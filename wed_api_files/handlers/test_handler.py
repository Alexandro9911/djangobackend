from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from wed_api_files import api_config


@api_view(['GET'])
def test_handler(request):

    status_request = status.HTTP_200_OK
    msg_final = {'answer': 'all ok'}

    return create_response(msg_final, status_request)


def create_response(info, stat):
    return Response(info, status=stat, content_type=api_config.CONTENT_TYPE, headers=api_config.HEADERS)

