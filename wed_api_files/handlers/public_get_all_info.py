from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from wed_api_files import api_config
from wed_api_files import database_config

PLACE_ERROR = 'caused in public_get_all_info.py in get_all_info_offer'


@api_view(['GET'])
def get_all_info_offer(request):
    status_request = status.HTTP_200_OK
    msg_final = {}

    if request.method == 'GET':

        if len(request.query_params) != 1:
            status_request = status.HTTP_200_OK
            msg_final = {'detail': 'incorrect quantity of arguments', "result_type": 'error', 'type': 'A',
                         'caused': PLACE_ERROR}

        else:
            token = request.query_params.get('token')

            is_args_empty_str = get_emty_arg(token)

            if len(is_args_empty_str) != 0:
                status_request = status.HTTP_200_OK
                msg_final = {'detail': 'empty fields: ' + is_args_empty_str, "result_type": 'error', 'type': 'B',
                             'caused': PLACE_ERROR}

            else:
                info = get_info_from_database(token)
                status_request = status.HTTP_200_OK
                msg_final = info
    else:
        status_request = status.HTTP_405_METHOD_NOT_ALLOWED
        msg_final = {'detail': 'wrong method', "result_type": 'error', 'type': 'C', 'caused': PLACE_ERROR}

    return create_response(msg_final, status_request)


def create_response(info, stat):
    return Response(info, status=stat, content_type=api_config.CONTENT_TYPE, headers=api_config.HEADERS)


def get_emty_arg(token):
    str_error = ''
    if token is None:
        return 'wrong field detected. check api params'
    if len(token) == 0:
        str_error += 'login field is empty, '

    return str_error


def get_main_str_request(token):
    sql = """
    select
        offer.id as offer_id,
        offer.identifier as offer_identifier,
        offer.active as offer_active,
        ankete.active as ankete_active,
        ankete.id as ankete_id,
        ankete.identifier as ankete_identifier,
        ankete.name as ankete_name,
        usr.token as user_token,
        usr.active as user_active,
        usr.id as user_id,
        usr.name as user_name,
        usr.text_offer as user_text_offer,
        usr.identifier as user_identifier
    from wedding_offer.offer as offer
        join wedding_offer."user" as usr on offer.user_id = usr.id
        join wedding_offer.ankete as ankete on offer.ankete_id = ankete.id
    where usr.token = \'{0}\'
    """.format(
        token
    )
    return sql


def sql_str_for_questions(ankete_id):
    sql = """
        select
           question.id,
           question.name,
           question.identifier,
           question.active,
           question.multiple,
           question.questions_text,
           question.answer_variants
    from wedding_offer.ankete_questions as list_quest
        join wedding_offer.questions as question on list_quest.question_id = question.id
    where list_quest.ankete_id = {0} and list_quest.active = true and question.active = true
    """.format(ankete_id)
    return sql


def get_questions_list_from_database(ankete_id):

    sql_req = sql_str_for_questions(ankete_id)

    db_connection = database_config.get_connection()
    cursor = db_connection.cursor()
    cursor.execute(sql_req)
    result = cursor.fetchall()
    db_connection.close()

    final_arr = []

    for item in result:
        final_arr.append(
            {
                "question_id": item[0],
                "question_name": item[1],
                "question_identifier": item[2],
                "question_active": item[3],
                "question_multiple": item[4],
                "questions_text": item[5],
                "answer_variants": item[6]
            }
        )

    return final_arr


def get_info_from_database(token):
    str_request = get_main_str_request(token)

    db_connection = database_config.get_connection()
    cursor = db_connection.cursor()
    cursor.execute(str_request)
    result = cursor.fetchall()
    db_connection.close()
    if len(result) > 0:

        data_offer = {
            'offer_id': result[0][0],
            'offer_identifier': result[0][1],
            'offer_active': result[0][2],
            'ankete_active': result[0][3],
            'ankete_id': result[0][4],
            'ankete_identifier': result[0][5],
            'ankete_name': result[0][6],
            'user_token': result[0][7],
            'user_active': result[0][8],
            'user_id': result[0][9],
            'user_name': result[0][10],
            'user_text_offer': result[0][11],
            'user_identifier': result[0][12]
        }

        questions_array = get_questions_list_from_database(data_offer['ankete_id'])

        final_info = {
            'user_info': {
                'user_token': data_offer['user_token'],
                'user_active': data_offer['user_active'],
                'user_id': data_offer['user_id'],
                'user_name': data_offer['user_name'],
                'user_text_offer': data_offer['user_text_offer'],
                'user_identifier': data_offer['user_identifier']
            },
            'offer_info': {
                'offer_id': data_offer['offer_id'],
                'offer_identifier': data_offer['offer_identifier'],
                'offer_active': data_offer['offer_active'],
            },
            'ankete': {
                'ankete_active': data_offer['ankete_active'],
                'ankete_id': data_offer['ankete_id'],
                'ankete_identifier': data_offer['ankete_identifier'],
                'ankete_name': data_offer['ankete_name'],

                'questions': questions_array,
                'user_answers': {

                }
            }
        }

        return {'result': final_info, "result_type": 'success'}
    else:
        return {'result': 'not found', "result_type": 'success'}