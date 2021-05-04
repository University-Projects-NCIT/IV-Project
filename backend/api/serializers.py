from rest_framework import serializers

from .models import(
    Product,
    ProductComment,
    ProductImage,
    ProductIcon,
    Category
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
        
class ProductSerializer(serializers.ModelSerializer):
    product_images = ProductImageSerializer(many = True)
    product_icon = ProductIconSerializer(many = True)
    product_comment = ProductCommentSerializer(many = True)
    category = CategorySerializer(many = True)
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
            "created_by",
            'product_images',
            "product_icon",
            "product_comment",
            "category"
            ]
