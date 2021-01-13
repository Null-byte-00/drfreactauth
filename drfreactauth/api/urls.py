from . import views
from django.urls import path

urlpatterns = [
    path("home/", views.home),
    path("current_user/", views.get_current_user),
    path('signup/', views.SignupView.as_view())
]