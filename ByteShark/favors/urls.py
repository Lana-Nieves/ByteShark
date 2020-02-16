from django.urls import path
from . import views

urlpatterns = [
    path('api/favor/', views.FavorListCreate.as_view() ),
]