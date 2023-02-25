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
from wed_api_files.handlers import create_ankete as create_ankete_api
from wed_api_files.handlers import update_ankete as update_ankete_api
from wed_api_files.handlers import users_without_offers as users_without_offers_api
from wed_api_files.handlers import get_offers as get_offers_api
from wed_api_files.handlers import add_offer as add_offer_api
from wed_api_files.handlers import edit_offer as edit_offer_api
from wed_api_files.handlers import get_statistic as get_statistic_api

from wed_api_files.handlers import public_get_all_info as offer_info_api
from wed_api_files.handlers import set_answer as set_answer_api

urlpatterns = [
    path('', index),
    path('admin', index),

    path('admin/', index),
    path('api/weddings_offer/admin_api/auth/', auth_api.check_auth),
    path('api/weddings_offer/admin_api/get_users_list/', user_list_api.get_users_list),
    path('api/weddings_offer/admin_api/create_user/', add_user_api.add_user),
    path('api/weddings_offer/admin_api/update_user/', update_user_api.update_user),
    path('api/weddings_offer/admin_api/get_questions/', get_questions_api.get_questions),
    path('api/weddings_offer/admin_api/create_question/', create_questions_api.create_question),
    path('api/weddings_offer/admin_api/update_question/', update_questions_api.update_question),
    path('api/weddings_offer/admin_api/ankete_list/', get_ankete_list_api.get_ankete_list),
    path('api/weddings_offer/admin_api/create_ankete/', create_ankete_api.create_ankete),
    path('api/weddings_offer/admin_api/update_ankete/', update_ankete_api.update_ankete),
    path('api/weddings_offer/admin_api/users_without_offer/', users_without_offers_api.users_without_offers),
    path('api/weddings_offer/admin_api/offers_list/', get_offers_api.get_offers_list),
    path('api/weddings_offer/admin_api/add_offer/', add_offer_api.add_offer),
    path('api/weddings_offer/admin_api/edit_offer/', edit_offer_api.edit_offer),
    path('api/weddings_offer/admin_api/get_statistic/', get_statistic_api.get_statistic),
    path('api/wedding_offer/public_offer/get_info/', offer_info_api.get_all_info_offer),
    path('api/wedding_offer/public_offer/set_answers/', set_answer_api.set_user_answer),

    path('api/weddings_offer/admin_api/auth', auth_api.check_auth),
    path('api/weddings_offer/admin_api/get_users_list', user_list_api.get_users_list),
    path('api/weddings_offer/admin_api/create_user', add_user_api.add_user),
    path('api/weddings_offer/admin_api/update_user', update_user_api.update_user),
    path('api/weddings_offer/admin_api/get_questions', get_questions_api.get_questions),
    path('api/weddings_offer/admin_api/create_question', create_questions_api.create_question),
    path('api/weddings_offer/admin_api/update_question', update_questions_api.update_question),
    path('api/weddings_offer/admin_api/ankete_list', get_ankete_list_api.get_ankete_list),
    path('api/weddings_offer/admin_api/create_ankete', create_ankete_api.create_ankete),
    path('api/weddings_offer/admin_api/update_ankete', update_ankete_api.update_ankete),
    path('api/weddings_offer/admin_api/users_without_offer', users_without_offers_api.users_without_offers),
    path('api/weddings_offer/admin_api/offers_list', get_offers_api.get_offers_list),
    path('api/weddings_offer/admin_api/add_offer', add_offer_api.add_offer),
    path('api/weddings_offer/admin_api/edit_offer', edit_offer_api.edit_offer),
    path('api/weddings_offer/admin_api/get_statistic', get_statistic_api.get_statistic),
    path('api/wedding_offer/public_offer/get_info', offer_info_api.get_all_info_offer),
    path('api/wedding_offer/public_offer/set_answers', set_answer_api.set_user_answer),
]
