from django.shortcuts import render

# Create your views here.
from .models import Favor
from .serializers import FavorSerializer
from rest_framework import generics

class FavorListCreate(generics.ListCreateAPIView):
    queryset = Favor.objects.all()
    serializer_class = FavorSerializer