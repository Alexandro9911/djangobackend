import json

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from wed_api_files import api_config
from wed_api_files import database_config

PLACE_ERROR = 'caused in create_ankete.py in create_ankete'


@api_view(['POST'])
def create_ankete(request):
    status_request = status.HTTP_200_OK
    msg_final = {}

    if request.method == 'POST':
        data = json.loads(request.body)

        print(data['ankete'])

        ankete_item = data['ankete']

        ankete_info = {
            "name": ankete_item['name'],
            "identifier": ankete_item['identifier'],
            "active": ankete_item['active']
        }


        res = add_ankete_to_list(
            ankete_info
        )

        status_request = status.HTTP_200_OK
        msg_final = res

    else:
        status_request = status.HTTP_405_METHOD_NOT_ALLOWED
        msg_final = {'detail': 'wrong method', "result_type": 'error', 'type': 'C', 'caused': PLACE_ERROR}

    return create_response(msg_final, status_request)


def add_ankete(ankete_obj):
    str_request = """
        insert into wedding_offer.ankete 
            (identifier, name, active)
        values 
        (
            \'{0}\',
            \'{1}\',
            \'{2}\'
        )
    """.format(
        ankete_obj['identifier'],
        ankete_obj['name'],
        ankete_obj['active']
    )

    db_connection = database_config.get_connection()
    cursor = db_connection.cursor()
    cursor.execute(str_request)
    db_connection.commit()
    db_connection.close()


def get_new_ankete_id(identifier):
    sql = """
        select ankete.id as id from wedding_offer.ankete as ankete
            where ankete.identifier = \'{0}\'
    """.format(
        identifier
    )

    db_connection = database_config.get_connection()
    cursor = db_connection.cursor()
    cursor.execute(sql)
    result = cursor.fetchall()
    db_connection.close()

    print(result[0])

    return result[0]


def create_response(info, stat):
    return Response(info, status=stat, content_type=api_config.CONTENT_TYPE, headers=api_config.HEADERS)


def add_ankete_to_list(ankete_info_obj):
    add_ankete(ankete_info_obj)
    ankete_id = get_new_ankete_id(ankete_info_obj['identifier'])

    return {'result': 'success', "result_type": 'success'}

