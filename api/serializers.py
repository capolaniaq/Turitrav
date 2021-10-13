"""Serializers module"""
from django.db.models.query import InstanceCheckMeta
from rest_framework import serializers
from api.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
