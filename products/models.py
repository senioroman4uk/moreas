from django.db import models
from django.db.models.signals import post_delete
from django.dispatch.dispatcher import receiver


class Product(models.Model):
    title = models.TextField(max_length=100)
    description = models.TextField(blank=True)
    image = models.ImageField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


@receiver(post_delete, sender=Product)
def product_post_delete_handler(sender, instance, **kwargs):
    if instance.image:
        instance.image.delete(False)
