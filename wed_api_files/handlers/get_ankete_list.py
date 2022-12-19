from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from wed_api_files import api_config
from wed_api_files import database_config

PLACE_ERROR = 'caused in get_ankete_list.py in get_ankete_list'


@api_view(['GET'])
def get_ankete_list(request):
    status_request = status.HTTP_200_OK
    msg_final = {}

    if request.method == 'GET':
        list_ankete = get_ankete_list_from_database()
        status_request = status.HTTP_200_OK
        msg_final = list_ankete

    else:
        status_request = status.HTTP_405_METHOD_NOT_ALLOWED
        msg_final = {'detail': 'wrong method', "result_type": 'error', 'type': 'C', 'caused': PLACE_ERROR}

    return create_response(msg_final, status_request)


def create_response(info, stat):
    return Response(info, status=stat, content_type=api_config.CONTENT_TYPE, headers=api_config.HEADERS)


def get_ankete_list_from_database():
    str_request = get_ankete_list_str_request()

    db_connection = database_config.get_connection()
    cursor = db_connection.cursor()
    cursor.execute(str_request)
    result = cursor.fetchall()
    db_connection.close()

    arr = []
    for item in result:
        arr.append({
            'id': item[0],
            'name': item[2],
            'identifier': item[1],
            'active': item[3],
            'ankete_questions': get_ankete_questions_list(item[0])
        })

    return {'result': arr, "result_type": 'success'}


def get_ankete_questions_list(ankete_id):
    str_sql = """
        select
           q.id as questionId,
           q.name as questionName,
           q.identifier as questionIdentifier,
           q.active as questionActive,
           q.multiple as questionMultiple,
           q.questions_text as questionText,
           q.answer_variants as questionAnswerVariants,
           ankete_questions.active as activeQuestionInAnkete,
           ankete_questions.ankete_id as anketeId,
           ankete_questions.identifier as questionIdentifierInAnkete,
           ankete_questions.question_id as questionIdInAnkete
        from wedding_offer.ankete_questions as ankete_questions
            join wedding_offer.questions q on q.id = ankete_questions.question_id
        where ankete_questions.ankete_id = {0} and ankete_questions.active = true
    """.format(ankete_id)

    db_connection = database_config.get_connection()
    cursor = db_connection.cursor()
    cursor.execute(str_sql)
    result = cursor.fetchall()
    db_connection.close()

    arr = []
    for item in result:
        arr.append(
            {
                "wrapperActive": item[7],
                "wrapperAnketeId": item[8],
                "wrapperIdentifier": item[9],
                "wrapperQuestionId": item[10],
                "question": {
                    'id': item[0],
                    'name': item[1],
                    'identifier': item[2],
                    'active': item[3],
                    'multiple': item[4],
                    'question_text': item[5],
                    'answer_variants': item[6]
                }
            }
        )

    return arr


def get_ankete_list_str_request():
    str_sql = """
        select * from wedding_offer.ankete
    """
    return str_sql