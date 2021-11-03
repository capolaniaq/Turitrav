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
        fields = ['id', 'username', 'email',
                  'first_name', 'last_name', 'is_owner', 'date_joined']


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
    city = serializers.SerializerMethodField()

    class Meta:
        model = Place
        fields = ['id', 'idowner', 'department',
                  'city', 'place_name', 'description', 'calification']

    def get_department(self, obj):
        """ data from other models that we are going to handle """
        return obj.city.iddepartment.name

    def get_city(self, obj):
        return obj.city.name


class ActivitySerializer(serializers.ModelSerializer):
    """ Serializer for activities """
    class Meta:
        model = Activity
        fields = '__all__'


class Place_activitySerializer(serializers.ModelSerializer):
    """ Serializer for activities of places """
    department = serializers.SerializerMethodField()
    city = serializers.SerializerMethodField()
    place_name = serializers.SerializerMethodField()
    description = serializers.SerializerMethodField()
    calification = serializers.SerializerMethodField()
    category = serializers.SerializerMethodField()

    class Meta:
        model = Place_activity
        fields = ['id', 'idplace', 'idactivity',
                  'department', 'city', 'place_name',
                  'description', 'calification', 'category', 'img', 'img2']

    def get_department(self, obj):
        """ Function for get department by place_activity"""
        return obj.idplace.city.iddepartment.name

    def get_city(self, obj):
        """Function for get city by place_activity"""
        return obj.idplace.city.name

    def get_place_name(self, obj):
        """Function for get place by place_activity"""
        return obj.idplace.place_name

    def get_description(self, obj):
        """Function for get description by place_activity"""
        return obj.idplace.description

    def get_calification(self, obj):
        """Function for calication city by place_activity"""
        return obj.idplace.calification

    def get_category(self, obj):
        """Function for get category by place_activity"""
        return obj.idactivity.name


class ReviewSerializer(serializers.ModelSerializer):
    """ Serializer for reviews """
    class Meta:
        model = Review
        fields = '__all__'


class HostelSerializer(serializers.ModelSerializer):
    """Sereliazer for Hostels"""
    contact_number = serializers.SerializerMethodField()
    place = serializers.SerializerMethodField()
    department = serializers.SerializerMethodField()
    city = serializers.SerializerMethodField()

    class Meta:
        model = Hostel
        fields = ['id', 'name',
                  'place', 'department', 'city',
                  'contact_number', 'img', 'price', 'idplace', 'idowner']

    def get_contact_number(self, obj):
        """Function that get the contanct_number by hostel owner"""
        return obj.idowner.contact_number

    def get_place(self, obj):
        """Function that get place for hostels"""
        return obj.idplace.place_name

    def get_department(self, obj):
        """Function that get department for hostels"""
        return obj.idplace.city.iddepartment.name

    def get_city(self, obj):
        """Function that get city for hostels"""
        return obj.idplace.city.name
