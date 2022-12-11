import json

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from wed_api_files import api_config
from wed_api_files import database_config

PLACE_ERROR = 'caused in update_user.py in update_user'


@api_view(['POST'])
def update_user(request):
    status_request = status.HTTP_200_OK
    msg_final = {}

    if request.method == 'POST':
        data = json.loads(request.body)

        print(data['user'])

        res = update_user_in_list(
            data['user']['id'],
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


def update_user_in_list(id_user, active, name, token, text_offer):
    str_request = update_user_str_request(id_user, active, name, token, text_offer)

    db_connection = database_config.get_connection()
    cursor = db_connection.cursor()
    cursor.execute(str_request)
    db_connection.commit()
    db_connection.close()

    return {'result': 'success', "result_type": 'success'}


def update_user_str_request(id_user, active, name, token, text_offer):
    str_sql = """
        update wedding_offer."user" SET
            active = {1},
            name = \'{2}\',
            token = \'{3}\',
            text_offer = \'{4}\'
        where
            wedding_offer."user".id = {0}
    """.format(id_user, active, str(name), str(token), str(text_offer))
    return str_sql

