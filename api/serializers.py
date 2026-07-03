from rest_framework import serializers
from .models import User, StudentProfile

class StudentRegistrationSerializer(serializers.Serializer):
    first_name = serializers.CharField(max_length=50)
    last_name = serializers.CharField(max_length=50)
    email = serializers.EmailField()
    date_of_birth = serializers.DateField()
    phone = serializers.CharField(max_length=15)
    address = serializers.CharField()

class StudentProfileSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)
    full_name = serializers.SerializerMethodField()
    email = serializers.EmailField(source='user.email', read_only=True)

    class Meta:
        model = StudentProfile
        fields = ['student_id', 'full_name', 'email', 'username', 'date_of_birth', 'phone', 'address']

    def get_full_name(self, obj):
        return f"{obj.user.first_name} {obj.user.last_name}"