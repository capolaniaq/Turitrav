"""Models Module"""

from django.db import models


class User(models.Model):
    """class  Normal User"""
    username = models.CharField(max_length=50, blank=False)
    email = models.CharField(max_length=50, blank=False)
    password = models.CharField(max_length=50, blank=False)
    create = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['create']
