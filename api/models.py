"""models module"""
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.aggregates import Max


class User(AbstractUser):
    """ Model to manage users """
    is_owner = models.BooleanField(default=False)
    photo = models.ImageField(blank=True, null=True)

    def __str__(self):
        return self.username


class Owner(models.Model):
    """ Owner model inheriting from User """
    user = models.OneToOneField(User, on_delete=models.CASCADE, unique=True)
    contact_number = models.CharField(max_length=20, blank=True, null=True)

    def __str__(self):
        return self.user.username


class Department(models.Model):
    """ Model to manage  departments """
    name = models.CharField(max_length=200, blank=False)

    def __str__(self):
        return self.name


class City(models.Model):
    """ Model to manage  cities """
    iddepartment = models.ForeignKey(Department, on_delete=models.CASCADE)
    name = models.CharField(max_length=200, blank=False)

    def __str__(self):
        return self.name


class Place(models.Model):
    """ Model to manage  places """
    muni = models.ForeignKey(City, on_delete=models.CASCADE)
    idowner = models.ForeignKey(Owner, on_delete=models.CASCADE,
                                serialize=True)
    lugar = models.CharField(max_length=200, blank=False)
    description = models.TextField(max_length=500, blank=False)
    calificacion = models.CharField(max_length=10, blank=False, default='0.0')

    def __str__(self):
        return self.lugar


class Activity(models.Model):
    """ Model to manage activities """
    name = models.CharField(max_length=200, blank=False)

    def __str__(self):
        return self.name


class Place_activity(models.Model):
    """ Model to manage activities of places """
    idplace = models.ForeignKey(Place, on_delete=models.CASCADE)
    idactivity = models.ForeignKey(Activity, on_delete=models.CASCADE)
    img = models.CharField(max_length=200, blank=False)
    img2 = models.CharField(max_length=200, blank=False)

    def __str__(self):
        return "Place {}: activity {}".format(self.idplace.lugar,
                                              self.idactivity.name)


class Review(models.Model):
    """ Model to manage reviews """
    idplace_activity = models.ForeignKey(Place_activity,
                                         on_delete=models.CASCADE)
    iduser = models.ForeignKey(User, on_delete=models.CASCADE)
    review = models.TextField(max_length=500, blank=False)


class Hostel(models.Model):
    """ Model to manage hostels """
    name = models.CharField(max_length=100, blank=False)
    price = models.CharField(max_length=100, blank=False)
    idplace = models.ForeignKey(Place, on_delete=models.CASCADE)
    img = models.CharField(max_length=100, blank=False)
    idowner = models.ForeignKey(Owner, on_delete=models.CASCADE)

    def __str__(self):
        """print information about hostel"""
        return 'Hostel: {}, by {} on {}'.format(self.name,
                                                self.idowner.username,
                                                self.idplace.lugar)
