from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from wed_api_files import api_config
from wed_api_files import database_config

PLACE_ERROR = 'caused in get_statistic.py in get_statistic'


@api_view(['GET'])
def get_statistic(request):
    status_request = status.HTTP_200_OK
    msg_final = {}

    if request.method == 'GET':
        list_questions = get_statistic_from_database()
        status_request = status.HTTP_200_OK
        msg_final = list_questions

    else:
        status_request = status.HTTP_405_METHOD_NOT_ALLOWED
        msg_final = {'detail': 'wrong method', "result_type": 'error', 'type': 'C', 'caused': PLACE_ERROR}

    return create_response(msg_final, status_request)


def create_response(info, stat):
    return Response(info, status=stat, content_type=api_config.CONTENT_TYPE, headers=api_config.HEADERS)


def get_statistic_from_database():
    str_request = get_questions_str_request()

    db_connection = database_config.get_connection()
    cursor = db_connection.cursor()
    cursor.execute(str_request)
    result = cursor.fetchall()
    db_connection.close()

    arr = []
    for item in result:
        arr.append({
            'user_active': item[0],
            'user_name': item[1],
            'values': item[2],
            'date_of_set': item[3],
            'ankete_name': item[4]
        })

    return {'result': arr, "result_type": 'success'}


def get_questions_str_request():
    str_sql = """
        select
           u.active as user_active,
           u.name as user_name,
           (select distinct u_a.values from wedding_offer.user_answers as u_a
               where
                     u_a.active = true and
                     u_a.user_id = o.user_id and
                     u_a.ankete_id = o.ankete_id) as values,
           (select distinct u_a.date_set from wedding_offer.user_answers as u_a
               where
                     u_a.active = true and
                     u_a.user_id = o.user_id and
                     u_a.ankete_id = o.ankete_id) as date_of_set,
           a.name as ankete_name
        from wedding_offer.offer as o
            join wedding_offer."user" u on u.id = o.user_id
            join wedding_offer.ankete a on a.id = o.ankete_id
        where o.active = true
    """
    return str_sql