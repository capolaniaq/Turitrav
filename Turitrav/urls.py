"""Turitrav URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
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
from django.urls import include, path
from rest_framework import routers
from api.views import *
from django.conf import settings
from django.conf.urls.static import static
from frontend.views import *

# Records to easily move through urls

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)
router.register(r'owners', OwnerViewSet)
router.register(r'places', PlaceViewSet)
router.register(r'departments', DepartmentViewSet)
router.register(r'cities', CityViewSet)
router.register(r'activities', ActivityViewSet)
router.register(r'place_activies', Place_activityViewSet)
router.register(r'reviews', ReviewViewSet)
router.register(r'hostels', HostelViewSet)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
# Urls to handle the data
urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls',
                              namespace='rest_framework')),
    path('login/', Login.as_view(), name='login'),
    path('logout/', Logout.as_view()),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
