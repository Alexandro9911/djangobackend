import json

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from wed_api_files import api_config
from wed_api_files import database_config

PLACE_ERROR = 'caused in add_offer.py in add_offer'


@api_view(['POST'])
def add_offer(request):
    status_request = status.HTTP_200_OK
    msg_final = {}

    if request.method == 'POST':
        data = json.loads(request.body)

        print(data['offer'])

        res = add_user_to_list(
            data['offer']['userId'],
            data['offer']['userIdentifier'],
            data['offer']['anketeId'],
            data['offer']['anketeIdentifier'],
            data['offer']['identifier'],
            data['offer']['afterpaty']
        )
        status_request = status.HTTP_200_OK
        msg_final = res

    else:
        status_request = status.HTTP_405_METHOD_NOT_ALLOWED
        msg_final = {'detail': 'wrong method', "result_type": 'error', 'type': 'C', 'caused': PLACE_ERROR}

    return create_response(msg_final, status_request)


def create_response(info, stat):
    return Response(info, status=stat, content_type=api_config.CONTENT_TYPE, headers=api_config.HEADERS)


def add_user_to_list(user_id, user_identifier, ankete_id, ankete_identifier, identifier, afterpaty):
    str_request = add_user_str_request(user_id, user_identifier, ankete_id, ankete_identifier, identifier, afterpaty)

    db_connection = database_config.get_connection()
    cursor = db_connection.cursor()
    cursor.execute(str_request)
    db_connection.commit()
    db_connection.close()

    return {'result': 'success', "result_type": 'success'}


def add_user_str_request(user_id, user_identifier, ankete_id, ankete_identifier, identifier, afterpaty):
    str_sql = """
        insert into wedding_offer.offer
            (user_id, ankete_id, identifier, active, afterpaty)    
        values
        (
        {0},
        {1},
        \'{2}\',
        {3},
        {4}
        )
    """.format(
        user_id,
        ankete_id,
        str(identifier),
        True,
        afterpaty
    )
    return str_sql
