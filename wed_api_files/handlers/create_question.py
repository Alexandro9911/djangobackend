import json

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from wed_api_files import api_config
from wed_api_files import database_config

PLACE_ERROR = 'caused in create_question.py in create_question'


@api_view(['POST'])
def create_question(request):
    status_request = status.HTTP_200_OK
    msg_final = {}

    if request.method == 'POST':
        data = json.loads(request.body)

        print(data['question'])

        res = add_question_to_list(
            data['question']['id'],
            data['question']['active'],
            data['question']['name'],
            data['question']['multiple'],
            data['question']['question_text'],
            data['question']['identifier'],
            data['question']['answer_variants']
        )
        status_request = status.HTTP_200_OK
        msg_final = res

    else:
        status_request = status.HTTP_405_METHOD_NOT_ALLOWED
        msg_final = {'detail': 'wrong method', "result_type": 'error', 'type': 'C', 'caused': PLACE_ERROR}

    return create_response(msg_final, status_request)


def create_response(info, stat):
    return Response(info, status=stat, content_type=api_config.CONTENT_TYPE, headers=api_config.HEADERS)


def add_question_to_list(id_quest, active, name, multiple, question_text, identifier, answer_variants):
    str_request = add_user_str_request(id_quest, active, name, multiple, question_text, identifier, answer_variants)

    db_connection = database_config.get_connection()
    cursor = db_connection.cursor()
    cursor.execute(str_request)
    db_connection.commit()
    db_connection.close()

    return {'result': 'success', "result_type": 'success'}


def add_user_str_request(id_quest, active, name, multiple, question_text, identifier, answer_variants):
    str_sql = """
        insert into wedding_offer.questions 
            (name, identifier, active, multiple, questions_text, answer_variants)
        values 
        (
            \'{0}\',
            \'{1}\',
            \'{2}\',
            \'{3}\',
            \'{4}\',
            \'{5}\'
        )
    """.format(
        str(name),
        str(identifier),
        active,
        multiple,
        str(question_text),
        str(answer_variants)
    )
    return str_sql
