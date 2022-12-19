import json

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from wed_api_files import api_config
from wed_api_files import database_config

PLACE_ERROR = 'caused in add_user.py in add_user'


@api_view(['POST'])
def add_user(request):
    status_request = status.HTTP_200_OK
    msg_final = {}

    if request.method == 'POST':
        data = json.loads(request.body)

        print(data['user'])

        res = add_user_to_list(
            data['user']['identifier'],
            data['user']['active'],
            data['user']['name'],
            data['user']['token'],
            data['user']['text_offer']
        )
        status_request = status.HTTP_200_OK
        msg_final = res

    else:
        status_request = status.HTTP_405_METHOD_NOT_ALLOWED
        msg_final = {'detail': 'wrong method', "result_type": 'error', 'type': 'C', 'caused': PLACE_ERROR}

    return create_response(msg_final, status_request)


def create_response(info, stat):
    return Response(info, status=stat, content_type=api_config.CONTENT_TYPE, headers=api_config.HEADERS)


def add_user_to_list(identifier, active, name, token, text_offer):
    str_request = add_user_str_request(identifier, active, name, token, text_offer)

    db_connection = database_config.get_connection()
    cursor = db_connection.cursor()
    cursor.execute(str_request)
    db_connection.commit()
    db_connection.close()

    return {'result': 'success', "result_type": 'success'}


def add_user_str_request(identifier, active, name, token, text_offer):
    str_sql = """
        insert into wedding_offer."user"
            (identifier, active, name, token, text_offer)    
        values
        (
        \'{0}\',
        {1},
        \'{2}\',
        \'{3}\',
        \'{4}\'
        )
    """.format(str(identifier), active, str(name), str(token), str(text_offer))
    return str_sql
