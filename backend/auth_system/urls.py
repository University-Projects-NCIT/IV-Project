from rest_framework.routers import DefaultRouter,SimpleRouter

from .views import UserViewSet, ProfileImageViewSet

## Using default router 
## It provides all the CRUD route by default 
router = DefaultRouter()

# route for all the product list 
router.register(f'users', UserViewSet, 'User Account ')
router.register(f'profile_images', ProfileImageViewSet, 'User Profile Images ')
# router.register(f'dj-rest-auth/google/',GoogleLogin,'google auth')

# Assigning the api urls which is used in main urls setting 
urlpatterns = router.urls