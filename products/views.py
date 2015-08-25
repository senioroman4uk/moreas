from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import ProductSerializer
from .models import Product


class ProductsView(APIView):
    def get(self, request, format=None):
        query_set = Product.objects.all()
        page = int(request.GET.get('page', 1))
        per_page = int(request.GET.get('per_page', 20))
        pages_count = round(query_set.count() / per_page + 0.5)
        serializer = ProductSerializer(
            query_set[per_page * (page - 1):per_page * page],
            many=True)

        return Response(
            {'products': serializer.data, 'pages_count': pages_count},
            status=status.HTTP_200_OK)
