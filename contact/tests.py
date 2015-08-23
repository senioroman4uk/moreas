from django.test import TestCase
from rest_framework.test import APIClient


class ContactViewTestMethods(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_get_request(self):
        response = self.client.get('/contact', data=None, follow=True)
        self.assertEqual(response.status_code, 200)
