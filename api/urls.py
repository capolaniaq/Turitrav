"""api/urls module"""

from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from api import views
from django.urls import path, include
from api.views import OwnerList

urlpatterns = [
    path('user/', views.UserList.as_view()),
    path('userl/<int:pk>/', views.UserDetail.as_view()),
    path('uset/', OwnerList.as_view(), name='owner_list'),
    path('api-auth/', include('rest_framework.urls')),
    path('owner/', views.OwnerList.as_view()),
    path('owner/<int:pk>/', views.OwnerDetail.as_view()),
    path('place/', views.PlaceList.as_view()),
    path('place/<int:pk>/', views.PlaceDetail.as_view()),
    path('city/', views.CityList.as_view()),
    path('city/<int:pk>/', views.CityDetail.as_view()),
    path('department/', views.DepartmentList.as_view()),
    path('department/<int:pk>/', views.DepartmentDetail.as_view()),
    path('place_activity/', views.Place_aList.as_view()),
    path('place_activity/<int:pk>/', views.Place_aDetail.as_view()),
    path('activity/', views.ActivityList.as_view()),
    path('activity/<int:pk>/', views.ActivityDetail.as_view()),
    path('review/', views.ReviewList.as_view()),
    path('review/<int:pk>/', views.ReviewDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
