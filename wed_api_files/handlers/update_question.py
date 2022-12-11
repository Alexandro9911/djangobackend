import json

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from wed_api_files import api_config
from wed_api_files import database_config

PLACE_ERROR = 'caused in update_question.py in update_question'


@api_view(['POST'])
def update_question(request):
    status_request = status.HTTP_200_OK
    msg_final = {}

    if request.method == 'POST':
        data = json.loads(request.body)

        print(data['question'])

        res = update_question_in_list(
            data['question']['id'],
            data['question']['active'],
            data['question']['name'],
            data['question']['multiple'],
            data['question']['identifier'],
            data['question']['question_text'],
            data['question']['answer_variants'],
        )
        status_request = status.HTTP_200_OK
        msg_final = res

    else:
        status_request = status.HTTP_405_METHOD_NOT_ALLOWED
        msg_final = {'detail': 'wrong method', "result_type": 'error', 'type': 'C', 'caused': PLACE_ERROR}

    return create_response(msg_final, status_request)


def create_response(info, stat):
    return Response(info, status=stat, content_type=api_config.CONTENT_TYPE, headers=api_config.HEADERS)


def update_question_in_list(id_question, active, name, multiple, identifier, question_text, answer_variants):
    str_request = update_question_str_request(id_question, active, name, multiple, identifier, question_text, answer_variants)

    db_connection = database_config.get_connection()
    cursor = db_connection.cursor()
    cursor.execute(str_request)
    db_connection.commit()
    db_connection.close()

    return {'result': 'success', "result_type": 'success'}


def update_question_str_request(id_question, active, name, multiple, identifier, question_text, answer_variants):
    str_sql = """
        update wedding_offer.questions set 
            name = \'{1}\',
            active = \'{2}\',
            multiple = \'{3}\',
            questions_text = \'{4}\',
            answer_variants = \'{5}\'
        where wedding_offer.questions.id = {0}
    """.format(
        id_question,
        str(name),
        active,
        multiple,
        str(question_text),
        str(answer_variants)
    )
    return str_sql

