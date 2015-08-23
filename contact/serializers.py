__author__ = 'Vladyslav'

from rest_framework import serializers

from contact.models import *


class ContactUsMessageSerializer(serializers.ModelSerializer):

    class Meta:
        model = ContactUsMessage
        fields = ('id', 'name', 'email', 'subject', 'message', 'created_at')
        read_only_fields = ('created_at', 'id')


class SlideShowImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = SlideShowImage
        fields = ('id', 'src', 'title', 'description')
        read_only_fields = ('id', 'src', 'title', 'description')
