# Generated by Django 3.1.7 on 2021-04-23 17:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auth_system', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='useraccount',
            name='username',
            field=models.CharField(default=models.EmailField(max_length=254, unique=True, verbose_name='UserEmail'), max_length=255, verbose_name='UserName'),
        ),
    ]