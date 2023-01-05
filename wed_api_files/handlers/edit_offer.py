import json

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from wed_api_files import api_config
from wed_api_files import database_config

PLACE_ERROR = 'caused in edit_offer.py in edit_offer'


@api_view(['POST'])
def edit_offer(request):
    status_request = status.HTTP_200_OK
    msg_final = {}

    if request.method == 'POST':
        data = json.loads(request.body)

        print(data['offer'])

        res = edit_offer_in_list(
            data['offer']['offerId'],
            data['offer']['offerActive'],
            data['offer']['anketeId'],
        )
        status_request = status.HTTP_200_OK
        msg_final = res

    else:
        status_request = status.HTTP_405_METHOD_NOT_ALLOWED
        msg_final = {'detail': 'wrong method', "result_type": 'error', 'type': 'C', 'caused': PLACE_ERROR}

    return create_response(msg_final, status_request)


def create_response(info, stat):
    return Response(info, status=stat, content_type=api_config.CONTENT_TYPE, headers=api_config.HEADERS)


def edit_offer_in_list(offer_id, offer_active, offer_ankete):
    str_request = edit_offer_str_request(offer_id, offer_active, offer_ankete)

    db_connection = database_config.get_connection()
    cursor = db_connection.cursor()
    cursor.execute(str_request)
    db_connection.commit()
    db_connection.close()

    return {'result': 'success', "result_type": 'success'}


def edit_offer_str_request(offer_id, offer_active, offer_ankete):
    str_sql = """
        update wedding_offer.offer as offer set active = {0}, ankete_id = {1}
        where offer.id = {2}
    """.format(
        offer_active,
        offer_ankete,
        offer_id
    )
    return str_sql
