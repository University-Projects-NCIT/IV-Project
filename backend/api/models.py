from django.db import models

##  All the models(Tables) are defined here
##  Edit and add new models(table) defining new class 
class ProfileImage(models.Model):
    """
    User Profile images who are signed in
    website also product profile icon or logo is stored here.
    """
    image = models.ImageField(
        verbose_name  = ("Product profile image "),
        help_text = ("Product profile images ,logo, icons  "),
        upload_to="images/",
        default = "images/default.png"
        ) 

    created_at = models.DateTimeField(verbose_name=("Created at"), auto_now_add=True)
    updated_at = models.DateTimeField(verbose_name=("Updated at"), auto_now_add=True)

class User(models.Model):
    userID = models.CharField(
        verbose_name = ("User id "),
        help_text = ("Required and Unique"),
        unique = True,
        max_length=100,
        primary_key = True,
    )
    profile_image = models.ForeignKey(
        ProfileImage,
        verbose_name= ("User Profile Image "),
        null = True,
        on_delete = models.SET_NULL,
        default = 'images/default.png'
        )
    email = models.EmailField(verbose_name = ("UserEmail"), max_length=254, unique = True)
    username = models.CharField(verbose_name = ("User Name "), unique= True, blank= False, null = False ,max_length= 50)
    is_staff = models.BooleanField(verbose_name=("Staff "), default= False)
    created_at = models.DateTimeField(verbose_name = ("Created At"),  auto_now_add=True)
    auth_providers = models.CharField(verbose_name =("Auth providers "), max_length=100, default = "email")
    USERNAME_FIELD = ["email"]


class Product(models.Model):
    """
    All the products like app,website 
    etc. suppose to be product that is 
    posted by users.
    """

    ACTIVE = "at"
    UPCOMMING = "up"
    # make two choice for porduct status 
    PRODUCT_STATUS_CHOICES = [
        (ACTIVE, "active"),
        (UPCOMMING, "upcoming")
        ]

    productID = models.CharField(
        verbose_name = ("prodcut id "),
        help_text = ("Required and Unique"),
        unique = True,
        max_length=50,
        primary_key = True,
    )

    product_status = models.CharField(
        verbose_name = ("Product Status "),
        help_text =("Select product status "),
        choices = PRODUCT_STATUS_CHOICES,
        max_length=50
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
        default =1
        )

    profile_image = models.ForeignKey(
        ProfileImage,
        verbose_name= ("Product icon or logo"),
        null = True,
        on_delete = models.SET_NULL,
        default = 'images/default.png'
        )

    created_at = models.DateTimeField(("Created at"), auto_now_add=True,editable = False)
    created_by = models.ForeignKey( 
        User,
        verbose_name=("Creator id "), 
        on_delete=models.CASCADE
        )

class ProductImage(models.Model):
    """
    Product screenshots images or may be featured image to show 
    your product for describing the product
    """
    product = models.ForeignKey(Product, verbose_name=("product Id"), on_delete=models.CASCADE)
    created_at = models.DateTimeField(verbose_name=("Created At"), editable = False , auto_now_add=True)
    image = models.ImageField(
        verbose_name  = ("Product image "),
        help_text = ("Product screenshot images "),
        upload_to="images/") 


class ProductComment(models.Model):
    """
    It stores the all comments make to 
    any porduct .
    """
    product = models.ForeignKey(Product, verbose_name=("product Id"), on_delete=models.CASCADE)
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
    product = models.ForeignKey(Product, verbose_name=("product Id"), on_delete=models.CASCADE)
