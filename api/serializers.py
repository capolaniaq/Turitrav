from django.contrib.auth.models import Group
from django.contrib.auth import get_user_model
from rest_framework import serializers
from api.models import *
from rest_framework.authtoken.models import Token

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'is_owner', 'date_joined']


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'

class OwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Owner
        fields = '__all__'


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'


class CitySerializer(serializers.ModelSerializer):
    department = serializers.SerializerMethodField()
    class Meta:
        model = City
        fields = ['id', 'name', 'department']

    def get_department(self, obj):
        return obj.iddepartment.name


class PlaceSerializer(serializers.ModelSerializer):
    department = serializers.SerializerMethodField()
    muni = serializers.SerializerMethodField()
    class Meta:
        model = Place
        fields = ['id', 'idowner','department', 'muni', 'lugar', 'description', 'calificacion']

    def get_department(self, obj):
        return obj.muni.iddepartment.name

    def get_muni(self, obj):
        return obj.muni.name

class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = '__all__'


class Place_activitySerializer(serializers.ModelSerializer):
    department = serializers.SerializerMethodField()
    muni = serializers.SerializerMethodField()
    lugar = serializers.SerializerMethodField()
    description = serializers.SerializerMethodField()
    calificacion = serializers.SerializerMethodField()
    categoria = serializers.SerializerMethodField()
    class Meta:
        model = Place_activity
        fields = ['id', 'department', 'muni', 'lugar', 'description', 'calificacion', 'categoria', 'img', 'img2']

    def get_department(self, obj):
        return obj.idplace.muni.iddepartment.name

    def get_muni(self, obj):
        return obj.idplace.muni.name

    def get_lugar(self, obj):
        return obj.idplace.lugar

    def get_description(self, obj):
        return obj.idplace.description

    def get_calificacion(self, obj):
        return obj.idplace.calificacion

    def get_categoria(self, obj):
        return obj.idactivity.name




class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'


