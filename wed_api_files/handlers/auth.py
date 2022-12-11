from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from wed_api_files import api_config
from wed_api_files import database_config

PLACE_ERROR = 'caused in Auth.py in check_auth'


@api_view(['GET'])
def check_auth(request):
    status_request = status.HTTP_200_OK
    msg_final = {}

    if request.method == 'GET':

        if len(request.query_params) != 2:
            status_request = status.HTTP_200_OK
            msg_final = {'detail': 'incorrect quantity of arguments', "result_type": 'error', 'type': 'A',
                         'caused': PLACE_ERROR}

        else:
            login = request.query_params.get('login')
            passw = request.query_params.get('passw')

            is_args_empty_str = get_emty_arg(login, passw)

            if len(is_args_empty_str) != 0:
                status_request = status.HTTP_200_OK
                msg_final = {'detail': 'empty fields: ' + is_args_empty_str, "result_type": 'error', 'type': 'B',
                             'caused': PLACE_ERROR}

            else:
                info = get_user_info_from_database(login, passw)
                status_request = status.HTTP_200_OK
                msg_final = info
    else:
        status_request = status.HTTP_405_METHOD_NOT_ALLOWED
        msg_final = {'detail': 'wrong method', "result_type": 'error', 'type': 'C', 'caused': PLACE_ERROR}

    return create_response(msg_final, status_request)


def create_response(info, stat):
    return Response(info, status=stat, content_type=api_config.CONTENT_TYPE, headers=api_config.HEADERS)


def get_emty_arg(login, passw):
    str_error = ''
    if login is None or passw is None:
        return 'wrong field detected. check api params'
    if len(login) == 0:
        str_error += 'login field is empty, '
    if len(passw) == 0:
        str_error += 'passw field is empty '

    return str_error


def get_user_info_from_database(login, passw):
    str_request = get_auth_str_request(login, passw)

    db_connection = database_config.get_connection()
    cursor = db_connection.cursor()
    cursor.execute(str_request)
    result = cursor.fetchall()
    db_connection.close()

    if len(result) == 0:
        return {'result': 'not exist', "result_type": 'success'}
    else:
        return {'result': 'success', "result_type": 'success'}

def get_auth_str_request(login, passw):
    str_sql = """
        select perms.id from wedding_offer.admin_permissions as perms
            join wedding_offer."user" as usr on perms.user_id = usr.id
        where
            perms.passw = \'{1}\' and
            perms.login = \'{0}\' and
            usr.active = true and
            perms.active = true
    """.format(str(login), str(passw))
    return str_sql