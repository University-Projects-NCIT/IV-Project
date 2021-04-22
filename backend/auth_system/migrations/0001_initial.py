# Generated by Django 3.1.7 on 2021-04-21 14:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserAccount',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('id', models.CharField(help_text='Required and Unique', max_length=100, primary_key=True, serialize=False, unique=True, verbose_name='User id ')),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='UserEmail')),
                ('first_name', models.CharField(max_length=50, verbose_name='First Name ')),
                ('last_name', models.CharField(max_length=50, verbose_name='Last Name ')),
                ('is_staff', models.BooleanField(default=False, verbose_name='Staff ')),
                ('is_superuser', models.BooleanField(default=False, verbose_name='Super user')),
                ('profile_image', models.ImageField(default='images/default.png', upload_to='images/', verbose_name='Profile image ')),
                ('is_active', models.BooleanField(default=True)),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created At')),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
