# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-06-28 12:21
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('text', models.TextField()),
                ('date_added', models.DateField(auto_now_add=True)),
            ],
        ),
    ]
