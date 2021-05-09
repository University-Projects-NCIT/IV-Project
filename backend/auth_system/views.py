from django.shortcuts import render
from rest_framework import viewsets, permissions


from .serializers import UserCreateSerializer
from .models import UserAccount

class UserViewSet(viewsets.ModelViewSet):
    queryset = UserAccount.objects.all()
    serializer_class = UserCreateSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
