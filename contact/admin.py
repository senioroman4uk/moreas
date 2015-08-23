from django.contrib import admin

from .models import *


class SlideShowImageAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')


class ContactUsMessageAdmin(admin.ModelAdmin):
    list_display = fields = ('email', 'name', 'subject', 'message',
                             'created_at')
    list_filter = ['created_at', 'email']


admin.site.register(ContactUsMessage, ContactUsMessageAdmin)
admin.site.register(SlideShowImage, SlideShowImageAdmin)
admin.site.site_header = 'Moreas'
