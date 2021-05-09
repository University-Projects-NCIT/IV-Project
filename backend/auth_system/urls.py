from rest_framework.routers import DefaultRouter,SimpleRouter

from .views import UserViewSet

## Using default router 
## It provides all the CRUD route by default 
router = DefaultRouter()

# route for all the product list 
router.register(f'users', UserViewSet, 'User Account ')

# Assigning the api urls which is used in main urls setting 
urlpatterns = router.urls