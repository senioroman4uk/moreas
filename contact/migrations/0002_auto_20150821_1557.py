# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('contact', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='slideshowimage',
            name='description',
            field=models.TextField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='slideshowimage',
            name='src',
            field=models.ImageField(upload_to='D:\\Git\\moreas\\static/img/contact/gallery'),
        ),
    ]
