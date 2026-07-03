from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone

class User(AbstractUser):
    # Adding roles explicitly
    is_student = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)  # We'll use is_staff for Admin actually, but keep this for clarity
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.username

class StudentProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='student_profile')
    date_of_birth = models.DateField()
    phone = models.CharField(max_length=15)
    address = models.TextField()
    student_id = models.CharField(max_length=20, unique=True, blank=True, editable=False)

    def save(self, *args, **kwargs):
        # Auto-generate Student ID (e.g., STU-0001) if not set
        if not self.student_id:
            # Get the last student ID number
            last_student = StudentProfile.objects.order_by('id').last()
            if last_student and last_student.student_id:
                # Extract numeric part
                try:
                    last_num = int(last_student.student_id.split('-')[1])
                    new_num = last_num + 1
                except:
                    new_num = 1
            else:
                new_num = 1
            self.student_id = f"STU-{str(new_num).zfill(4)}"
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.user.get_full_name()} ({self.student_id})"