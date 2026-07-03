from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    # Registration & Profile
    path('register/', views.register_student, name='register'),
    path('profile/', views.get_student_profile, name='profile'),
    path('change-password/', views.change_password, name='change-password'),
    
    # JWT Login endpoints (provided by SimpleJWT)
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]