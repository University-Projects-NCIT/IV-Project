from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class UserAccountManager(BaseUserManager):
    def create_user(self,email, password=None, **extra_fields):
        if not email:
            raise ValueError("Email is not found ")
        
        email = self.normalize_email(email)
        user = self.model(email= email, **extra_fields)
        user.set_password(password)

        # regex = '^(\w|\.|\_|\-)+[@](\w|\_|\-|\.)+[.]\w{2,3}$'
        # djfksjdfhks@kdfgjfkkdhaf

        # if re.fullmatch(r'[A-Za-z0-9@#$%^&+=]{8,}', password) and (re.search(regex, email)):
        user.save(using = self.db)

        return user

    
    def create_superuser(self,email, password, **extra_fields):

        # print("jsdgsgdhg " + extra_fields)
        """
        Creates and saves a superuser with the given email password.
        """
        user = self.create_user(
            email=email,
            password=password,
            **extra_fields
        )

        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        
        user.save(using = self.db)
        return user
   


class UserAccount(AbstractBaseUser, PermissionsMixin):

    id = models.CharField(
        verbose_name=("User id "),
        help_text=("Required and Unique"),
        unique=True,
        max_length=100,
        primary_key=True
    )

    profile_image = models.CharField(
      verbose_name = (" Profile image url "),
      max_length=500
     )

    email = models.EmailField(
      verbose_name=("UserEmail"),
      max_length=254,
      unique=True
      )


    first_name = models.CharField(
        verbose_name=("First Name "),
        blank=False,
        max_length=50
    )

    last_name = models.CharField(
        verbose_name=("Last Name "),
        blank=False,
        max_length=50
    )


    is_staff = models.BooleanField(
      verbose_name=("Staff "),
      default=False
      )

    is_superuser = models.BooleanField(
      verbose_name=("Super user"),
      default=False
      )

    is_active = models.BooleanField(default=False)


    created_at = models.DateTimeField(
      verbose_name=("Created At"),
      blank=False,
      auto_now_add=True
      )

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ["first_name", "last_name", "profile_image"]

    def __str__(self):
        return self.email 
        


