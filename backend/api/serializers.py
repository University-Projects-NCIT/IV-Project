from rest_framework import serializers

from .models import(
    Product,
    ProductComment,
    ProductImage,
    ProfileImage,
    User,
    Category
)

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            "productID",
            "product_status",
            "title",
            "tagline",
            "description",
            "upvote",
            "profile_image",
            "created_at", 
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

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields =["userID","profile_image","email","password","token"]

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id","name","product"]