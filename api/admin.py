""" Admin module, select the models to use """
from django.contrib import admin
from api.models import (User, Owner, City, Department, Place, Place_activity, Activity, Review)
from django.contrib.auth.admin import UserAdmin


admin.site.register(User, UserAdmin)
admin.site.register(Owner)
admin.site.register(City)
admin.site.register(Department)
admin.site.register(Place)
admin.site.register(Place_activity)
admin.site.register(Activity)
admin.site.register(Review)




