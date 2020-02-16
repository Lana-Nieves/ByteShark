from django.urls import path
from . import views

urlpatterns = [
    path('api/meeting/', views.MeetingListCreate.as_view() ),
]