"""models module"""
from django.db import models
from django.contrib.auth.models import AbstractUser

""" Model to manage users """
class User(AbstractUser):
    is_owner = models.BooleanField(default=False)
    photo = models.ImageField(blank=True, null=True)

    def __str__(self):
        return self.username

""" Owner model inheriting from User """
class Owner(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, unique=True)

    def __str__(self):
        return self.user.username

""" Model to manage  departments """
class Department(models.Model):
    """department class"""
    name = models.CharField(max_length=200, blank=False)

    def __str__(self):
        return self.name

""" Model to manage  cities """
class City(models.Model):
    """City class, inherits of Deparment"""
    iddepartment = models.ForeignKey(Department, on_delete=models.CASCADE)
    name = models.CharField(max_length=200, blank=False)

    def __str__(self):
        return self.name

""" Model to manage  places """
class Place(models.Model):
    """Place class, inherits of City and Owner"""
    muni = models.ForeignKey(City, on_delete=models.CASCADE)
    idowner = models.ForeignKey(Owner, on_delete=models.CASCADE, serialize=True)
    lugar = models.CharField(max_length=200, blank=False)
    description = models.TextField(max_length=500, blank=False)
    calificacion = models.FloatField(default=0.0)

    def __str__(self):
        return self.lugar

""" Model to manage activities """
class Activity(models.Model):
    """department class"""
    name = models.CharField(max_length=200, blank=False)

    def __str__(self):
        return self.name

""" Model to manage activities of places """
class Place_activity(models.Model):
    """class place_activity"""
    idplace = models.ForeignKey(Place, on_delete=models.CASCADE)
    idactivity = models.ForeignKey(Activity, on_delete=models.CASCADE)
    img = models.ImageField(blank=True, null=True)
    img2 = models.ImageField(blank=True, null=True)

    def __str__(self):
        return "Place {}: activity {}".format(self.idplace.lugar, self.idactivity.name)

""" Model to manage reviews """
class Review(models.Model):
    """Class Review"""
    idplace_activity = modesls.ForeignKey(Place_activity, on_delete=models.CASCADE)
    iduser = models.ForeignKey(User, on_delete=models.CASCADE)
    review = models.TextField(max_length=500, blank=False)
