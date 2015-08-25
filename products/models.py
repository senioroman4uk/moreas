from django.db import models
from django.db.models.signals import post_delete
from django.dispatch.dispatcher import receiver

import os
import moreas.settings


class Product(models.Model):
    title = models.TextField(max_length=100)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='img/products')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


@receiver(post_delete, sender=Product)
def product_post_delete_handler(sender, instance, **kwargs):
    if instance.image:
        instance.image.delete(False)
