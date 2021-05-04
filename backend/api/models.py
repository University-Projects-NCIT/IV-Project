from django.db import models
from django.conf import settings

from django.contrib.auth import get_user_model

User = get_user_model()

##  All the models(Tables) are defined here
##  Edit and add new models(table) defining new class 

class Product(models.Model):
    """
    All the products like app,website 
    etc. suppose to be product that is 
    posted by users.
    """

    productID = models.CharField(
        verbose_name = ("prodcut id "),
        help_text = ("Required and Unique"),
        unique = True,
        max_length=50,
        primary_key = True,
    )
    

    title = models.CharField(
        verbose_name = ("Product Name "),
        help_text = ("Required "),
        max_length = 20,
    )

    product_link = models.URLField(
        verbose_name = ("Product Url"),
        help_text=("The product website or link"),
        max_length=255
        )

    tagline = models.CharField(
        verbose_name =("small product description"),
        help_text = ("describe in short of your product"),
        max_length = 255,
    )

    description = models.TextField(
        verbose_name = ("long product description"),
        help_text = ("Describe in long of your product"),
        max_length = 500,
        blank = False,
    )

    upvote = models.IntegerField(
        verbose_name = ("product upvote "),
        default = 0
        )

    created_at = models.DateTimeField(("Created at"), auto_now_add=True,editable = False)
    launch_at = models.DateTimeField(("Launch at"), auto_now=False, editable = True)
    author = models.ForeignKey( 
        settings.AUTH_USER_MODEL,
        related_name="author",
        on_delete=models.CASCADE,
        verbose_name=("Creator "), 
    )




class ProductIcon(models.Model):
    """
    User Profile images who are signed in
    website also product profile icon or logo is stored here.
    """
    image = models.URLField(
        verbose_name  = ("Product profile image "),
        help_text = ("Product profile images ,logo, icons  ")
        ) 
        
    product = models.ForeignKey(Product,related_name="product_icon", verbose_name=("product ID"), on_delete=models.CASCADE)

    created_at = models.DateTimeField(verbose_name=("Created at"), auto_now_add=True, editable = False)
    updated_at = models.DateTimeField(verbose_name=("Updated at"), auto_now_add=True)


class ProductImage(models.Model):
    """
    Product screenshots images or may be featured image to show 
    your product for describing the product
    """
    product = models.ForeignKey(Product,related_name="product_images", verbose_name=("product Id"), on_delete=models.CASCADE)
    created_at = models.DateTimeField(verbose_name=("Created At"), editable = False , auto_now_add=True)
    image = models.URLField(
        verbose_name  = ("Product image "),
        help_text = ("Product screenshot images ")
        ) 


class ProductComment(models.Model):
    """
    It stores the all comments make to 
    any porduct .
    """
    product = models.ForeignKey(Product,related_name="product_comment", verbose_name=("product Id"), on_delete=models.CASCADE)
    comment = models.TextField(
        verbose_name = ("Comments text"),
        help_text =("Comment made to prouct "),
        max_length= 400,
    )
    created_at = models.DateTimeField(verbose_name=("Created at"), auto_now_add=True, editable = False)

class Category(models.Model):
    """
    To determine the where the product 
    belongs like android ,ios , website etc.
    """
    name = models.CharField(verbose_name = ("Product categories"), max_length=20)
    product = models.ForeignKey(Product,related_name="categories", verbose_name=("product Id"), on_delete=models.CASCADE)


