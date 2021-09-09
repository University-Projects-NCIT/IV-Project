from djoser.serializers import UserCreateSerializer, UserSerializer
from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import ProfileImages

User = get_user_model()

class ProfileImageSerializer(serializers.ModelSerializer):

  class Meta():
    model = ProfileImages
    fields = ('userId', 'imageUrl', 'created_at')

class UserCreateSerializer(UserCreateSerializer):

  ProfileImage = ProfileImageSerializer(many= True, read_only = True)
  class Meta(UserCreateSerializer.Meta):
    model = User
    fields = ('id','email', 'first_name', 'last_name', 'ProfileImage')

