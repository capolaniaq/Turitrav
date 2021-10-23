from django.contrib.auth.models import Group
from django.contrib.auth import get_user_model
from rest_framework import serializers
from api.models import *
from rest_framework.authtoken.models import Token

User = get_user_model()


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username','password', 'email', 'groups', 'is_owner', 'photo']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class OwnerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Owner
        fields = ['id', 'user']


class PlaceSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Place
        fields = ['id', 'idowner', 'idcity', 'description', 'name']


class DepartmentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Department
        fields = ['id', 'name']


class CitySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = City
        fields = ['id', 'iddepartment', 'name']


class ActivitySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Activity
        fields = ['id', 'name']


class Place_activitySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Place_activity
        fields = ['id', 'idplace', 'idactivity']


class ReviewSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'idplace_activity', 'iduser', 'review']


