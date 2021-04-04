# Generated by Django 3.1.7 on 2021-04-02 10:53

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20210402_1611'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='product_status',
            field=models.CharField(choices=[('at', 'active'), ('up', 'upcoming')], default=django.utils.timezone.now, help_text='Select product status ', max_length=50, verbose_name='Product Status '),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='product',
            name='profile_image',
            field=models.ForeignKey(default='images/default.png', null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.profileimage', verbose_name='Product icon or logo'),
        ),
        migrations.AlterField(
            model_name='profileimage',
            name='image',
            field=models.ImageField(default='images/default.png', help_text='Product profile images ,logo, icons  ', upload_to='images/', verbose_name='Product profile image '),
        ),
        migrations.AlterField(
            model_name='user',
            name='profile_image',
            field=models.ForeignKey(default='images/default.png', null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.profileimage', verbose_name='User Profile Image '),
        ),
    ]