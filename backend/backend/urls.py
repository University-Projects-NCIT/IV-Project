from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from auth_system.views import GoogleLogin


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('api.urls')),
    path('', include('auth_system.urls')),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),
    path('dj-rest-auth/google/',GoogleLogin.as_view(), name='google_login'),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('accounts/', include('allauth.urls')),

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
