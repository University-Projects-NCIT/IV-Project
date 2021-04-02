from django.shortcuts import render
from rest_framework import viewsets, permissions

## Importing serializers 
from .serializers import (
    ProductSerializer,
    ProductImageSerializer,
    ProfileImageSerializer,
    ProductCommentSerializer,
    UserSerializer,
    CategorySerializer
)

#importing the models /Tables 
from .models import(
    Product,
    ProductComment,
    ProductImage,
    ProfileImage,
    User,
    Category
)

# Product api
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [permissions.AllowAny]

#porduct image api
class ProductImageViewSet(viewsets.ModelViewSet):
    queryset = ProductImage.objects.all()
    serializer_class = ProductImageSerializer
    permission_classes = [permissions.AllowAny]

# product profile image api 
class ProfileImageViewSet(viewsets.ModelViewSet):
    queryset = ProfileImage.objects.all()
    serializer_class = ProfileImageSerializer
    permission_classes = [permissions.AllowAny]

# product comments api 
class ProductCommentViewSet(viewsets.ModelViewSet):
    queryset = ProductComment.objects.all()
    serializer_class = ProductCommentSerializer
    permission_classes = [permissions.AllowAny]

# application user api 
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

# product categories api 
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.AllowAny]
