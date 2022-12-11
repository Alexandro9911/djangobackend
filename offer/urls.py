"""offer URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from weddings_api.views import index
from wed_api_files.handlers import auth as auth_api
from wed_api_files.handlers import users_list as user_list_api
from wed_api_files.handlers import add_user as add_user_api
from wed_api_files.handlers import update_user as update_user_api
from wed_api_files.handlers import get_questions as get_questions_api
from wed_api_files.handlers import create_question as create_questions_api
from wed_api_files.handlers import update_question as update_questions_api
from wed_api_files.handlers import get_ankete_list as get_ankete_list_api

urlpatterns = [
    path('', index),
    path('admin', index),
    path('api/weddings_offer/admin_api/auth', auth_api.check_auth),
    path('api/weddings_offer/admin_api/get_users_list', user_list_api.get_users_list),
    path('api/weddings_offer/admin_api/create_user', add_user_api.add_user),
    path('api/weddings_offer/admin_api/update_user', update_user_api.update_user),
    path('api/weddings_offer/admin_api/get_questions', get_questions_api.get_questions),
    path('api/weddings_offer/admin_api/create_question', create_questions_api.create_question),
    path('api/weddings_offer/admin_api/update_question', update_questions_api.update_question),
    path('api/weddings_offer/admin_api/ankete_list', get_ankete_list_api.get_ankete_list),
]
