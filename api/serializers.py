"""Serializers module"""
from django.db.models.query import InstanceCheckMeta
from rest_framework import serializers
from api.models import Uset
from api.models import Uset, LANGUAGE_CHOICES, STYLE_CHOICES
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    users = serializers.PrimaryKeyRelatedField(many=True, queryset=Uset.objects.all())
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'users', 'owner']
