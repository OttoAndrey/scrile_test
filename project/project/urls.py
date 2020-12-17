from django.contrib import admin
from django.urls import path

from indicator import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index),
]
