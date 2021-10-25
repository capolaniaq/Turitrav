from django.contrib.auth.models import Group
from rest_framework.views import APIView
from django.contrib.auth import get_user_model, logout, login, authenticate
from api.models import *
from rest_framework import viewsets, status, permissions
from api.serializers import *
from django.urls import reverse_lazy
from django.views.generic.edit import FormView
from django.http import HttpResponseRedirect
from django.contrib.auth.forms import AuthenticationForm
from django.utils.decorators import method_decorator
from django.views.decorators.cache import never_cache
from django.views.decorators.csrf import csrf_protect
from rest_framework.response import Response

""" inherit the user data """

User = get_user_model()

""" Class to handle users logic """
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

""" Class to handle groups logic """
class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

""" Class to handle owners logic """
class OwnerViewSet(viewsets.ModelViewSet):
    queryset = Owner.objects.all()
    serializer_class = OwnerSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


""" Class to handle users departments """
class DepartmentViewSet(viewsets.ModelViewSet):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

""" Class to handle cities logic """
class CityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all()
    serializer_class = CitySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

""" Class to handle places logic """
class PlaceViewSet(viewsets.ModelViewSet):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

""" Class to handle activities logic """
class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

""" Class to handle activities of places logic """
class Place_activityViewSet(viewsets.ModelViewSet):
    queryset = Place_activity.objects.all()
    serializer_class = Place_activitySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

""" Class to handle reviews logic """
class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

""" Class to manage the login of a user """
class Login(FormView):
    template_name = "login.html"
    form_class = AuthenticationForm
    success_url = reverse_lazy('api-root')

    @method_decorator(csrf_protect)
    @method_decorator(never_cache)
    """ Function to check authentication """
    def dispatch(self,request,*args,**kwargs):
        if request.user.is_authenticated:
            return HttpResponseRedirect(self.get_success_url())
        else:
            return super(Login,self).dispatch(request,*args,*kwargs)

    """ Function to validate the Login """
    def form_valid(self,form):
        user = authenticate(username = form.cleaned_data['username'], password = form.cleaned_data['password'])
        token,_ = Token.objects.get_or_create(user = user)
        login(self.request, form.get_user())
        return super(Login,self).form_valid(form)

""" Class to manage the logout of a user """
class Logout(APIView):
    def get(self, request, format = None):
        data = reverse_lazy('api-root')
        if request.user.is_authenticated:
            logout(request)
            return Response(status = status.HTTP_200_OK)
        else:
            return HttpResponseRedirect(data)
