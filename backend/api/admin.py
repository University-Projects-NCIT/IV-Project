from django.contrib import admin

from .models import (
    Product, 
    ProductImage, 
    ProductComment, 
    ProductIcon,
    Category
)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ["productID",
    "title",
    "tagline",
    "description",
    "upvote",
    "created_at",
    "launch_at", 
    ]

@admin.register(ProductIcon)
class ProductIconAdmin(admin.ModelAdmin):
    list_display = ["id","product", "image","created_at","updated_at"]

@admin.register(ProductImage)
class ProductImageAdmin(admin.ModelAdmin):
    list_display = ["id", "product","created_at","image"]

@admin.register(ProductComment)
class ProductCommentAdmin(admin.ModelAdmin):
    list_display = ["id", "product","comment" ,"created_at"]
    
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ["id","name","product"]