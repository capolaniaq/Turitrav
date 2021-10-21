from rest_framework.urlpatterns import format_suffix_patterns
from api import views
from django.urls import path, include
from api.views import OwnerList

urlpatterns = [
path('owner/', views.OwnerList.as_view()),
path('uset/', OwnerList.as_view(), name='owner_list'),
]

urlpatterns = format_suffix_patterns(urlpatterns)