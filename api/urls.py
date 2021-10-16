"""api/urls module"""

from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from api import views
from django.urls import path, include
from api.views import UserList

urlpatterns = [
    path('users/', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetail.as_view()),
    path('user/', views.UsetList.as_view()),
    path('userl/<int:pk>/', views.UserDetail.as_view()),
    path('api-auth/', include('rest_framework.urls')),
    path('uset/', UserList.as_view(), name='uset_list'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
