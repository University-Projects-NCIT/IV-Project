from django.shortcuts import render
from rest_framework import viewsets, permissions
from rest_framework import filters
from .paginations import ProductLimitOffsetPagination
from rest_framework.generics import ListAPIView 
from django.views.generic import TemplateView

## Importing serializers 
from .serializers import (
    ProductSerializer,
    ProductImageSerializer,
    ProductIconSerializer,
    ProductCommentSerializer,
    CategorySerializer,
    ProductUpvoteSerializer
)

#importing the models /Tables 
from .models import(
    Product,
    ProductComment,
    ProductImage,
    ProductIcon,
    Category,
    ProductUpvote
)


class HomePageView(TemplateView):
    template_name = "index.html"

# Product api
class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    permission_classes = [permissions.AllowAny]
    filter_backends = [filters.OrderingFilter, filters.SearchFilter]
    ## Table column created_at and upvote
    ordering_fields = ['created_at','upvote']
    ## databse table should have fields column titile and tagline
    search_fields = ['$title', '$tagline']
    ## Paginations to get product list 
    pagination_class = ProductLimitOffsetPagination


    def get_queryset(self):
        """
        This method modifies the extra query as required 
        To midify the query params request 
        """
        queryset = Product.objects.all()

        ordering_query = self.request.query_params.get('m_order')
        
        if ordering_query == "created_at" :
            return queryset.order_by('-created_at')

        if ordering_query == "upvote":
            print("upvote called ")
            return queryset.order_by('-upvote')

        return queryset


    # @property
    # def categories(self):
    #     return self.category_set.all()
    


#porduct image api
class ProductImageViewSet(viewsets.ModelViewSet):
    serializer_class = ProductImageSerializer
    permission_classes = [permissions.AllowAny]
    filter_backends=[filters.OrderingFilter]

    ### It orders the data according to the created date 
    ordering_fields = ['created_at']

    def get_queryset(self):
        """
        This method should return list of profile 
        images associated with requested peoduct.
        """
        queryset = ProductImage.objects.all()

        productId = self.request.query_params.get('productID')
        if productId is not None:
            queryset = queryset.filter(product = productId)
        return queryset
    


# product profile image api 
class ProductIconViewSet(viewsets.ModelViewSet):

    serializer_class = ProductIconSerializer 
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        """
        This method should return profile 
        images of associated authenticated user or product.
        only should authenticated for user not for product.
        """
        queryset = ProductIcon.objects.all()

        id = self.request.query_params.get('id')
        
        if id is not None:
            queryset = queryset.filter(product = id)

        return queryset

# product upvote api 
class ProductUpvoteViewSet(viewsets.ModelViewSet):

    serializer_class = ProductUpvoteSerializer 
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        """
        """
        queryset = ProductUpvote.objects.all()

        userid = self.request.query_params.get('userid')
        productid = self.request.query_params.get('productid')
        
        if userid is not None and productid is not None:
            queryset = queryset.filter(userID = userid).filter(productID = productid)
        
        # if userid is not None:
        #     queryset = queryset.filter(userID = userid)
        
        # if productid is not None:
        #     queryset = queryset.filter(productID= productid)

        return queryset


# product comments api 
class ProductCommentViewSet(viewsets.ModelViewSet):
    serializer_class = ProductCommentSerializer
    permission_classes = [permissions.AllowAny]
    filter_backends=[filters.OrderingFilter]

    ### to get data in order of created date 
    ### eg .end point: /comments/?ordering = 'created_at' for asc
    ### eg .end point: /comments/?ordering = '-created_at' for desc
    ordering_fields = ['created_at']
    ordering = ['-created_at']

    def get_queryset(self):
        """
        This method retruns the filtered list of data 
        Filtered according to the product Id 
        eg . end point: /comments/productID = "ab34frfff@#dsf"
        """
        queryset = ProductComment.objects.all()

        productId = self.request.filter('productID')
        if productId is not None:
            queryset = queryset.filter(product = productId)

        return queryset
    

    

# product categories api 
class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        """
        This method return the specific catagories that is 
        associated with product .It filters according to
        the product .
        eg. end point: /categories/productID = 'asfhakfsha34#$2323'
        """
        queryset = Category.objects.all()

        productId = self.request.query_params.get('productID')

        if productId is not None:
            queryset = queryset.filter(product = productId)

        return queryset
    
