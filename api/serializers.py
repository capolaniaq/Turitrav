"""Serializers module"""
from django.db.models.query import InstanceCheckMeta
from rest_framework import serializers
from api.models import Uset
from api.models import Uset, LANGUAGE_CHOICES, STYLE_CHOICES
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
