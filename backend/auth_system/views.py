from django.shortcuts import render
from rest_framework import viewsets, permissions
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from dj_rest_auth.registration.views import SocialLoginView
from django.contrib.auth import get_user_model
from .serializers import UserCreateSerializer, ProfileImageSerializer
from .models import ProfileImages
from rest_framework import filters

User = get_user_model()


# from .models import UserAccount

class ProfileImageViewSet(viewsets.ModelViewSet):
    serializer_class = ProfileImageSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    filter_backends = [filters.OrderingFilter, filters.SearchFilter]
    ## Table column created_at and upvote

    def get_queryset(self):

        userid = self.request.query_params.get("userid")

        if userid is not None:
            return  ProfileImages.objects.all().filter(userId=userid).order_by('-created_at')

        return ProfileImages.objects.all()

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserCreateSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    client_class = OAuth2Client