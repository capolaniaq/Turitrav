"""Models Module"""

from django.db import models
from django.contrib.auth.models import User


class Owner(models.Model):
    """class  Normal User"""
    name = models.CharField(max_length=50, blank=False)
    email = models.EmailField(blank=False)
    password = models.CharField(max_length=50, blank=False)
    create = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '{0}. {1}'.format(self.name, self.email)

    class Meta:
        ordering = ['create']

class Department(models.Model):
    """department class"""
    name = models.CharField(max_length=200, blank=False)

    def __str__(self):
        return self.name

class City(models.Model):
    """City class, inherits of Deparment"""
    iddepartment = models.ForeignKey(Department, on_delete=models.CASCADE)
    name = models.CharField(max_length=200, blank=False)

    def __str__(self):
        return self.name

class Place(models.Model):
    """Place class, inherits of City and Owner"""
    idcity = models.ForeignKey(City, on_delete=models.CASCADE)
    idowner = models.ForeignKey(Owner, on_delete=models.CASCADE)
    name = models.CharField(max_length=200, blank=False)
    description = models.TextField(max_length=500, blank=False)
    create = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "{}:{}".format(self.name, self.description)

class Activity(models.Model):
    """Class activity"""
    tyactivity = models.CharField(max_length=100, blank=False)

    def __str__(self):
        return self.tyactivity

class Place_activity(models.Model):
    """class place_activity"""
    idplace = models.ForeignKey(Place, on_delete=models.CASCADE)
    idactivity = models.ForeignKey(Activity, on_delete=models.CASCADE)

    def __str__(self):
        return "Place {}: activity {}".format(Place.name, Activity.tyactivity)

class Review(models.Model):
    """Class Review"""
    idplace_activity = models.ForeignKey(Place_activity, on_delete=models.CASCADE)
    iduser = models.ForeignKey(User, on_delete=models.CASCADE)
    review = models.TextField(max_length=500, blank=False)

