# Generated by Django 4.0 on 2022-01-06 09:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0003_rename_header_project_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='pic',
            field=models.CharField(max_length=400),
        ),
    ]