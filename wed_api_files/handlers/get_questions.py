from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from wed_api_files import api_config
from wed_api_files import database_config

PLACE_ERROR = 'caused in get_questions.py in get_questions'


@api_view(['GET'])
def get_questions(request):
    status_request = status.HTTP_200_OK
    msg_final = {}

    if request.method == 'GET':
        list_questions = get_questions_list_from_database()
        status_request = status.HTTP_200_OK
        msg_final = list_questions

    else:
        status_request = status.HTTP_405_METHOD_NOT_ALLOWED
        msg_final = {'detail': 'wrong method', "result_type": 'error', 'type': 'C', 'caused': PLACE_ERROR}

    return create_response(msg_final, status_request)


def create_response(info, stat):
    return Response(info, status=stat, content_type=api_config.CONTENT_TYPE, headers=api_config.HEADERS)


def get_questions_list_from_database():
    str_request = get_questions_str_request()

    db_connection = database_config.get_connection()
    cursor = db_connection.cursor()
    cursor.execute(str_request)
    result = cursor.fetchall()
    db_connection.close()

    arr = []
    for item in result:
        arr.append({
            'id': item[0],
            'name': item[1],
            'identifier': item[2],
            'active': item[3],
            'multiple': item[4],
            'question_text': item[5],
            'answer_variants': item[6]
        })

    return {'result': arr, "result_type": 'success'}


def get_questions_str_request():
    str_sql = """
        select * from wedding_offer.questions as questions
    """
    return str_sql