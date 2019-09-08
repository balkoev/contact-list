from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer, UserProfileSerializer
from django.contrib.auth.models import User
from .models import UserProfile

class UserViewSet(viewsets.ModelViewSet):
  serializer_class = UserSerializer
  queryset = User.objects.all()
  
class UserProfileViewSet(viewsets.ModelViewSet):
  serializer_class = UserProfileSerializer
  queryset = UserProfile.objects.all()
  