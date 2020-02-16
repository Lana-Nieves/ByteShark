from django.shortcuts import render
from .models import Meeting
from .serializers import MeetingSerializer
from rest_framework import generics

# Create your views here.

class MeetingListCreate(generics.ListCreateAPIView):
    queryset = Meeting.objects.all()
    serializer_class = MeetingSerializer
