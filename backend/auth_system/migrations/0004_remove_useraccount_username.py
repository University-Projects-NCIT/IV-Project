# Generated by Django 3.1.7 on 2021-04-25 08:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('auth_system', '0003_auto_20210425_1403'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='useraccount',
            name='username',
        ),
    ]
