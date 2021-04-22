from django.contrib import admin
from .models import UserAccount

@admin.register(UserAccount)
class ProductAdmin(admin.ModelAdmin):
    list_display = ["id", "email", "first_name", "last_name", "is_staff", "is_superuser","profile_image","is_active","created_at"]