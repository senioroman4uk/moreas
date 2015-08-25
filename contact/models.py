__author__ = 'Vladyslav'

from django.db import models
from django.db.models.signals import post_delete
from django.dispatch.dispatcher import receiver

import os


class ContactUsMessage(models.Model):
    name = models.TextField(max_length=50)
    email = models.EmailField(max_length=320)
    subject = models.TextField(max_length=80)
    message = models.TextField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)


class SlideShowImage(models.Model):
    title = models.TextField(max_length=50)
    description = models.TextField(max_length=100, blank=True)
    src = models.ImageField(upload_to='img/contact/gallery')


@receiver(post_delete, sender=SlideShowImage)
def slide_show_image_delete(sender, instance, **kwargs):
    if instance.src:
        instance.src.delete(False)
