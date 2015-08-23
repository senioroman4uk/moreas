__author__ = 'Vladyslav'

from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.generic.base import TemplateView
from django.utils.decorators import method_decorator

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from contact.serializers import *


class IndexView(TemplateView):
    template_name = 'index.html'

    @method_decorator(ensure_csrf_cookie)
    def dispatch(self, *args, **kwargs):
        return super(IndexView, self).dispatch(*args, **kwargs)


class ContactUsView(APIView):
    def post(self, request, format=None):
        serializer = ContactUsMessageSerializer(data=request.data)

        if serializer.is_valid():
            return Response(status.HTTP_201_CREATED)
        return Response({'errors': serializer.errors},
                        status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, format=None):
        serializer = SlideShowImageSerializer(SlideShowImage.objects.all(),
                                              many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
