from django.contrib import admin
from .models import UserAccount

@admin.register(UserAccount)
class ProductAdmin(admin.ModelAdmin):
    list_display = ["id","profile_image", "email", "first_name", "last_name", "is_staff", "is_superuser","is_active","created_at"]