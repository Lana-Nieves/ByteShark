from rest_framework import serializers
from .models import Favor

class FavorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favor
        fields = ('id', 'username', 'description', 'tag', 'loaned', 'returned')