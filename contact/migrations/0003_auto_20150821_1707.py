# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('contact', '0002_auto_20150821_1557'),
    ]

    operations = [
        migrations.AlterField(
            model_name='slideshowimage',
            name='src',
            field=models.ImageField(upload_to='staticfiles\\img/contact/gallery'),
        ),
    ]
