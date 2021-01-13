from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from django.contrib.auth.forms import UserCreationForm
from .serializers import UserSerializer
from django.contrib.auth.models import User

# Create your views here.
@api_view(["GET"])
def home(request):
    if request.user.is_authenticated:
        return Response({"message": "hello " + request.user.username})
    else:
        return Response({"message": "your not authenticated"})

@api_view(["GET"])
def get_current_user(request):
    if request.user.is_authenticated:
        return Response({"username": request.user.username})

class SignupView(CreateAPIView):
    serializer_class = UserSerializer
    model = User


    