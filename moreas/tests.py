__author__ = 'Vladyslav'

from django.test import TestCase
from django.core.urlresolvers import reverse


class IndexViewTestMethods(TestCase):
    def test_index_view(self):
        response = self.client.get(reverse('index'))
        self.assertEqual(response.status_code, 200)