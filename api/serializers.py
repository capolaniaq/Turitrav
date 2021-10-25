""" we inherit the user data """
from django.contrib.auth.models import Group
from django.contrib.auth import get_user_model
from rest_framework import serializers
from api.models import *
from rest_framework.authtoken.models import Token


User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    """ Serializer for users """
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'is_owner', 'date_joined']


class GroupSerializer(serializers.ModelSerializer):
    """ Serializer for Groups """
    class Meta:
        model = Group
        fields = '__all__'


class OwnerSerializer(serializers.ModelSerializer):
    """ Serializer for Owners """
    class Meta:
        model = Owner
        fields = '__all__'


class DepartmentSerializer(serializers.ModelSerializer):
    """ Serializer for departments """
    class Meta:
        model = Department
        fields = '__all__'


class CitySerializer(serializers.ModelSerializer):
    """ Serializer for cities """
    department = serializers.SerializerMethodField()
    class Meta:
        model = City
        fields = ['id', 'name', 'department']

    
    def get_department(self, obj):
        """ data from other models that we are going to handle """
        return obj.iddepartment.name


class PlaceSerializer(serializers.ModelSerializer):
    """ Serializer for places """
    department = serializers.SerializerMethodField()
    muni = serializers.SerializerMethodField()
    class Meta:
        model = Place
        fields = ['id', 'idowner','department', 'muni', 'lugar', 'description', 'calificacion']


    def get_department(self, obj):
        """ data from other models that we are going to handle """
        return obj.muni.iddepartment.name

    def get_muni(self, obj):
        return obj.muni.name


class ActivitySerializer(serializers.ModelSerializer):
    """ Serializer for activities """
    class Meta:
        model = Activity
        fields = '__all__'


class Place_activitySerializer(serializers.ModelSerializer):
    """ Serializer for activities of places """
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
        """ Function for get department by place_activity"""
        return obj.idplace.muni.iddepartment.name

    def get_muni(self, obj):
        """Function for get city by place_activity"""
        return obj.idplace.muni.name

    def get_lugar(self, obj):
        """Function for get place by place_activity"""
        return obj.idplace.lugar

    def get_description(self, obj):
        """Function for get description by place_activity"""
        return obj.idplace.description

    def get_calificacion(self, obj):
        """Function for calication city by place_activity"""
        return obj.idplace.calificacion

    def get_categoria(self, obj):
        """Function for get category by place_activity"""
        return obj.idactivity.name


class ReviewSerializer(serializers.ModelSerializer):
    """ Serializer for reviews """
    class Meta:
        model = Review
        fields = '__all__'


