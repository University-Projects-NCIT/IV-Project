# Generated by Django 3.1.7 on 2021-04-25 08:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('auth_system', '0004_remove_useraccount_username'),
    ]

    operations = [
        migrations.RenameField(
            model_name='useraccount',
            old_name='profile_image_url',
            new_name='profile_image',
        ),
    ]
