import json

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from wed_api_files import api_config
from wed_api_files import database_config

PLACE_ERROR = 'caused in set_answer.py in set_user_answer'


@api_view(['POST'])
def set_user_answer(request):
    status_request = status.HTTP_200_OK
    msg_final = {}

    if request.method == 'POST':

        data = json.loads(request.body)

        user_answers = data['answers']

        insert_answers(user_answers)
        status_request = status.HTTP_200_OK
        msg_final = {'result': 'success'}

    else:
        status_request = status.HTTP_405_METHOD_NOT_ALLOWED
        msg_final = {'detail': 'wrong method', "result_type": 'error', 'type': 'C', 'caused': PLACE_ERROR}

    return create_response(msg_final, status_request)


def create_response(info, stat):
    return Response(info, status=stat, content_type=api_config.CONTENT_TYPE, headers=api_config.HEADERS)


def insert_answers(answers_obj):
    user_id = answers_obj['user']['user_id']
    ankete_id = answers_obj['ankete']['ankete_id']
    values = answers_obj['question']

    disable_previous_answer_of_user(user_id, ankete_id)
    add_actual_answers_of_user(user_id,ankete_id,values)


def disable_previous_answer_of_user(user_id, ankete_id):
    sql = """
        update wedding_offer.user_answers as u_a set active = false
            where u_a.ankete_id = {0} and u_a.user_id = {1};    
    """.format(
        ankete_id,
        user_id
    )

    db_connection = database_config.get_connection()
    cursor = db_connection.cursor()
    cursor.execute(sql)
    db_connection.commit()
    db_connection.close()


def add_actual_answers_of_user(user_id, ankete_id, values):
    sql = """
    insert into wedding_offer.user_answers (ankete_id, user_id, values, active, date_set)
        values (
            {0},
            {1},
            \'{2}\',
            true,
            now()
        )
    """.format(
        user_id,
        ankete_id,
        values
    )

    db_connection = database_config.get_connection()
    cursor = db_connection.cursor()
    cursor.execute(sql)
    db_connection.commit()
    db_connection.close()