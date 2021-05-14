from django.contrib import admin
from .models import ProfileImages

# @admin.register(UserAccount)
# class ProductAdmin(admin.ModelAdmin):
#     list_display = ["id","imageUrl", "email", "first_name", "last_name", "is_staff", "is_superuser","is_active"]

@admin.register(ProfileImages)
class ProfileImageAdmin(admin.ModelAdmin):
  list_display = ["id", "userId","imageUrl", 'created_at']