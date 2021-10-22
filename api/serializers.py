from django.contrib.auth.models import Group
from django.contrib.auth import authenticate, get_user_model
from rest_framework import serializers
from api.models import *
from rest_framework.authtoken.models import Token

User = get_user_model()


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username','password', 'email', 'groups', 'is_owner']


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


class Place_aSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Place_activity
        fields = ['id', 'place', 'activity']


class ActivitySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Activity
        fields = ['id', 'type']


class ReviewSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'idplace_activity', 'iduser', 'review']


class LoginSerializers(serializers.Serializer):
    """class Loginserializer"""
    username = serializers.CharField(max_length=80)
    password = serializers.CharField(max_length=80)

    def validate(self, data):
        user = authenticate(username=data['username'], password=data['password'])
        if user:
            self.context['user'] = user
            return data
        else:
            raise serializers.ValidationError('invalid credentials')

    def create(self, data):
        """generate and save the token"""
        token, created = Token.objects.get_or_create(user=self.context['user'])
        return self.context['user'], token.key

