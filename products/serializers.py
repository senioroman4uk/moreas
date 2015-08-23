__author__ = 'Vladyslav'

from rest_framework.serializers import ModelSerializer
from .models import Product


class ProductSerializer(ModelSerializer):

    class Meta:
        model = Product
        fields = ('created_at', 'id', 'updated_at', 'title', 'description', 'image')
        read_only_fields = ('created_at', 'id', 'updated_at')
