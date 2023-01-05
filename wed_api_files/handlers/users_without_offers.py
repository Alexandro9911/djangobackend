from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from wed_api_files import api_config
from wed_api_files import database_config

PLACE_ERROR = 'caused in users_without_offers.py in users_without_offers'


@api_view(['GET'])
def users_without_offers(request):
    status_request = status.HTTP_200_OK
    msg_final = {}

    if request.method == 'GET':
        list_users = get_user_list_from_database()
        status_request = status.HTTP_200_OK
        msg_final = list_users

    else:
        status_request = status.HTTP_405_METHOD_NOT_ALLOWED
        msg_final = {'detail': 'wrong method', "result_type": 'error', 'type': 'C', 'caused': PLACE_ERROR}

    return create_response(msg_final, status_request)


def create_response(info, stat):
    return Response(info, status=stat, content_type=api_config.CONTENT_TYPE, headers=api_config.HEADERS)


def get_user_list_from_database():
    str_request = get_user_str_request()

    db_connection = database_config.get_connection()
    cursor = db_connection.cursor()
    cursor.execute(str_request)
    result = cursor.fetchall()
    db_connection.close()

    arr = []
    for item in result:
        arr.append({
            'active': item[0],
            'id': item[1],
            'name': item[2],
            'token': item[3],
            'text_offer': item[4],
            'identifier': item[5]
        })

    return {'result': arr, "result_type": 'success'}


def get_user_str_request():
    str_sql = """
        select
            users.active,
            users.id,
            users.name,
            users.token,
            users.text_offer,
            users.identifier
        from wedding_offer."user" as users
            where users.id not in (
                select distinct offer.user_id from wedding_offer.offer as offer
        );
    """
    return str_sql
