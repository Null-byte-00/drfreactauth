from . import views
from django.urls import path

app_name = 'frontend'

urlpatterns = [
    path('', views.index),
    path('translate/', views.Translate.as_view())
]