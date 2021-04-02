# Generated by Django 3.1.7 on 2021-04-01 14:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('prodcutID', models.CharField(help_text='Required and Unique', max_length=50, primary_key=True, serialize=False, unique=True, verbose_name='prodcut id ')),
                ('title', models.CharField(help_text='Required ', max_length=20, verbose_name='Product Name ')),
                ('tagline', models.CharField(help_text='describe in short of your product', max_length=255, verbose_name='small product description')),
                ('description', models.TextField(help_text='Describe in long of your product', max_length=500, verbose_name='long product description')),
                ('upvote', models.IntegerField(default=1, verbose_name='product upvote ')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created at')),
            ],
        ),
        migrations.CreateModel(
            name='ProfileImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(help_text='Product profile images ,logo, icons  ', upload_to='images/', verbose_name='Product profile image ')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created at')),
                ('updated_at', models.DateTimeField(auto_now_add=True, verbose_name='Updated at')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('userID', models.CharField(help_text='Required and Unique', max_length=50, primary_key=True, serialize=False, unique=True, verbose_name='User id ')),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='UserEmail')),
                ('pasword', models.CharField(max_length=50, unique=True, verbose_name='User password ')),
                ('token', models.CharField(max_length=50, verbose_name='Token assigned to each user ')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.product', verbose_name='product Id')),
                ('profile_image', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.profileimage', verbose_name='User Profile Image ')),
            ],
        ),
        migrations.CreateModel(
            name='ProductImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created At')),
                ('image', models.ImageField(help_text='Product screenshot images ', upload_to='images/', verbose_name='Product image ')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.product', verbose_name='product Id')),
            ],
        ),
        migrations.CreateModel(
            name='ProductComment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment', models.TextField(help_text='Comment made to prouct ', max_length=400, verbose_name='Comments text')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created at')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.product', verbose_name='product Id')),
            ],
        ),
        migrations.AddField(
            model_name='product',
            name='profile_image',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.profileimage', verbose_name='Product icon or logo'),
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20, verbose_name='Product categories')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.product', verbose_name='product Id')),
            ],
        ),
    ]
