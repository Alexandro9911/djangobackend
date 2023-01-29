from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from wed_api_files import api_config
from wed_api_files import database_config

PLACE_ERROR = 'caused in get_offers.py in get_offers_list'


@api_view(['GET'])
def get_offers_list(request):
    status_request = status.HTTP_200_OK
    msg_final = {}

    if request.method == 'GET':
        list_users = get_offer_list_from_database()
        status_request = status.HTTP_200_OK
        msg_final = list_users

    else:
        status_request = status.HTTP_405_METHOD_NOT_ALLOWED
        msg_final = {'detail': 'wrong method', "result_type": 'error', 'type': 'C', 'caused': PLACE_ERROR}

    return create_response(msg_final, status_request)


def create_response(info, stat):
    return Response(info, status=stat, content_type=api_config.CONTENT_TYPE, headers=api_config.HEADERS)


def get_offer_list_from_database():
    str_request = get_offer_str_request()

    db_connection = database_config.get_connection()
    cursor = db_connection.cursor()
    cursor.execute(str_request)
    result = cursor.fetchall()
    db_connection.close()

    arr = []
    for item in result:
        arr.append({
            'offerId': item[0],
            'offerIdentifier': item[1],
            'offerActive': item[2],
            'userName': item[3],
            'userId': item[4],
            'userIdentifier': item[5],
            'userActive': item[6],
            'anketeActive': item[7],
            'anketeIdentifier': item[8],
            'anketeId': item[9],
            'anketeName': item[10],
            'userToken': item[11],
            'afterpaty': item[12]
        })

    return {'result': arr, "result_type": 'success'}


def get_offer_str_request():
    str_sql = """
        select
            offer.id as offer_id,
            offer.identifier as offer_identifier,
            offer.active as offer_active,
            usr.name as user_name,
            usr.id as user_id,
            usr.identifier as user_identifier,
            usr.active as user_active,
            ankete.active as ankete_active,
            ankete.identifier as ankete_identifier,
            ankete.id as ankete_id,
            ankete.name as ankete_name,
            usr.token as user_token,
            offer.afterpaty as afterpaty
        from wedding_offer.offer as offer
            join wedding_offer."user" as usr on usr.id = offer.user_id
            join wedding_offer.ankete as ankete on ankete.id = offer.ankete_id
    """
    return str_sql
