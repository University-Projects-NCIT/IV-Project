from rest_framework import serializers

from .models import(
    Product,
    ProductComment,
    ProductImage,
    ProfileImage,
    Category
)

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            "productID",
            "title",
            "tagline",
            "description",
            "upvote",
            "profile_image",
            "created_at", 
            "launch_at",
            "created_by"
            ]

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ["id", "product","created_at","image"]

class ProfileImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileImage
        fields = ["id", "image","created_at","updated_at"] 

class ProductCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductComment
        fields = ["id", "product","comment" ,"created_at"]

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id","name","product"]