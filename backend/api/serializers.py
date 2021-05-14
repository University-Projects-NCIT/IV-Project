from rest_framework import serializers
# from auth_system.serializers import UserCreateSerializer
# from auth_system.serializers import UserCreateSerializer

from .models import(
    Product,
    ProductComment,
    ProductImage,
    ProductIcon,
    Category,
    ProductUpvote
)


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ["id", "product","created_at","image"]

class ProductIconSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductIcon
        fields = ["id","product","image","created_at","updated_at"] 

class ProductCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductComment
        fields = ["id", "product","comment" ,"created_at"]

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id","name","product"]

class ProductUpvoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductUpvote
        fields = ["id","productID","userID"]
        
class ProductSerializer(serializers.ModelSerializer):
    product_images = ProductImageSerializer(many = True, read_only=True)
    product_icon = ProductIconSerializer(many = True, read_only= True)
    product_comment = ProductCommentSerializer(many = True, read_only = True)
    categories = CategorySerializer(many = True, read_only =True)
    class Meta:
        model = Product
        fields = [
            "productID",
            "title",
            "tagline",
            "description",
            "upvote",
            "created_at", 
            "launch_at",
            "author",
            "product_icon",
            "product_comment",
            "product_images",
            "categories"
            ]
