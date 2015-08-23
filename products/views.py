from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.core.paginator import Paginator

from .serializers import ProductSerializer
from .models import Product


class ProductsView(APIView):
    def get(self, request, format=None):
        query_set = Product.objects.all()
        page = request.GET.get('page')
        per_page = request.GET.get('per_page', 20)
        pages_count = round(query_set.count() / per_page + 0.5)
        serializer = ProductSerializer(query_set[page - 1:per_page],
                                       many=True)

        return Response(
            {'products': serializer.data, 'pages_count': pages_count},
            status=status.HTTP_200_OK)
