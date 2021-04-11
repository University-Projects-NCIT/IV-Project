from django.contrib import admin

from .models import (
    Product, 
    ProductImage, 
    ProductComment, 
    ProfileImage,
    User, 
    Category
)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ["productID",
    "product_status",
    "title",
    "tagline",
    "description",
    "upvote",
    "profile_image",
    "created_at", 
    "created_by"
    ]

@admin.register(ProfileImage)
class ProfileImageAdmin(admin.ModelAdmin):
    list_display = ["id", "image","created_at","updated_at"]

@admin.register(ProductImage)
class ProductImageAdmin(admin.ModelAdmin):
    list_display = ["id", "product","created_at","image"]

@admin.register(ProductComment)
class ProductCommentAdmin(admin.ModelAdmin):
    list_display = ["id", "product","comment" ,"created_at"]
    
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ["userID","profile_image","email","username","is_staff","created_at","auth_providers"]

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ["id","name","product"]