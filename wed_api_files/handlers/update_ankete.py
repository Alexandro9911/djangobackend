import json

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from wed_api_files import api_config
from wed_api_files import database_config

PLACE_ERROR = 'caused in update_ankete.py in update_ankete'


@api_view(['POST'])
def update_ankete(request):
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

        ankete_questions = ankete_item['ankete_questions']

        res = update_ankete_in_list(
            ankete_info,
            ankete_questions,
        )

        status_request = status.HTTP_200_OK
        msg_final = res

    else:
        status_request = status.HTTP_405_METHOD_NOT_ALLOWED
        msg_final = {'detail': 'wrong method', "result_type": 'error', 'type': 'C', 'caused': PLACE_ERROR}

    return create_response(msg_final, status_request)


def get_ankete_id(identifier):
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

    print(result[0][0])

    return result[0][0]


def add_questions_wrappers(ankete_id, questions):
    disable_previous_questions_by_ankete(ankete_id)
    if len(questions) > 0 :
        for quest in questions:
            str_request = get_str_insertion_request(ankete_id, quest)
            db_connection = database_config.get_connection()
            cursor = db_connection.cursor()
            cursor.execute(str_request)
            db_connection.commit()
            db_connection.close()


def disable_previous_questions_by_ankete(ankete_id):
    sql = """
        update wedding_offer.ankete_questions as list_q set active = false
            where list_q.ankete_id = {0}
    """.format(
       ankete_id
    )

    db_connection = database_config.get_connection()
    cursor = db_connection.cursor()
    cursor.execute(sql)
    db_connection.commit()
    db_connection.close()


def get_str_insertion_request(ankete_id, question):

    wrapper_active = question['wrapperActive']
    wrapper_ankete_id = question['wrapperAnketeId']
    wrapper_identifier = question['wrapperIdentifier']
    wrapper_question_id = question["wrapperQuestionId"]

    str_request = """
        insert into wedding_offer.ankete_questions 
            (ankete_id, question_id, active, identifier)
        values 
        (
            {0},
            {1},
            {2},
            \'{3}\'
        )
    """.format(
        ankete_id,
        wrapper_question_id,
        wrapper_active,
        wrapper_identifier
    )

    return str_request


def update_ankete_info(info):
    sql = """
    update wedding_offer.ankete as ankete 
    set 
        active = {0},
        name = \'{1}\'
    where ankete.identifier = \'{2}\'   
    """.format(
        info['active'],
        info['name'],
        info['identifier']
    )

    db_connection = database_config.get_connection()
    cursor = db_connection.cursor()
    cursor.execute(sql)
    db_connection.commit()
    db_connection.close()


def create_response(info, stat):
    return Response(info, status=stat, content_type=api_config.CONTENT_TYPE, headers=api_config.HEADERS)


def update_ankete_in_list(ankete_info_obj, questions_list):
    ankete_id = get_ankete_id(ankete_info_obj['identifier'])
    update_ankete_info(ankete_info_obj)
    add_questions_wrappers(ankete_id, questions_list)

    return {'result': 'success', "result_type": 'success'}