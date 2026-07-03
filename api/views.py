from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model
from .models import StudentProfile
from .serializers import StudentRegistrationSerializer, StudentProfileSerializer
import random

User = get_user_model()

@api_view(['POST'])
@permission_classes([AllowAny])
def register_student(request):
    serializer = StudentRegistrationSerializer(data=request.data)
    if serializer.is_valid():
        data = serializer.validated_data
        
        # 1. Auto-generate Username: firstname.lastname.123
        base_username = f"{data['first_name'].lower()}.{data['last_name'].lower()}"
        username = base_username
        counter = 1
        while User.objects.filter(username=username).exists():
            username = f"{base_username}.{counter}"
            counter += 1
        
        # 2. Auto-generate Secure Password (e.g., Xy9#PqLmNo)
        # Using Django's built-in random password generator
        raw_password = User.objects.make_random_password(length=10)
        # Add a special character and capital to ensure complexity
        raw_password = raw_password + "A1!"
        
        # 3. Create User
        user = User.objects.create_user(
            username=username,
            email=data['email'],
            first_name=data['first_name'],
            last_name=data['last_name'],
            password=raw_password,
            is_student=True  # This is a student
        )
        
        # 4. Create Student Profile (student_id auto-generates in .save())
        student = StudentProfile.objects.create(
            user=user,
            date_of_birth=data['date_of_birth'],
            phone=data['phone'],
            address=data['address']
        )
        
        # 5. Return the generated credentials to the frontend
        return Response({
            "message": "Student registered successfully!",
            "username": username,
            "password": raw_password,
            "student_id": student.student_id
        }, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_student_profile(request):
    try:
        student = request.user.student_profile
        serializer = StudentProfileSerializer(student)
        return Response(serializer.data)
    except StudentProfile.DoesNotExist:
        return Response({"error": "Student profile not found"}, status=404)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def change_password(request):
    # This is where they change the auto-generated password
    old_password = request.data.get('old_password')
    new_password = request.data.get('new_password')
    
    if not request.user.check_password(old_password):
        return Response({"error": "Old password is incorrect"}, status=400)
    
    request.user.set_password(new_password)
    request.user.save()
    return Response({"message": "Password updated successfully!"})