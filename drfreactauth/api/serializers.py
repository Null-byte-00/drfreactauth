from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    def create(self, data):
        user = User.objects.create_user(
            username = data['username'],
            email = data["email"],
            password = data["password"]
        )
        return user
    
    class Meta:
        model = User
        fields = ['username','email', 'password', ]
