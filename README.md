# Student Registration & Management System (SRMS)

## Overview

The **Student Registration & Management System (SRMS)** is a full-stack web application designed to simplify the student registration and management process for educational institutions. The system allows prospective students to register online, automatically receive login credentials, and access a personalized dashboard to manage their academic profile. Administrators can efficiently manage student records, departments, registrations, and system activities through a secure administrative interface.

This project is being developed using modern web technologies with a strong focus on clean architecture, security, scalability, and maintainability.

---

# Project Objectives

* Provide an online student registration platform.
* Automatically generate secure student login credentials.
* Allow students to manage their personal information.
* Enable administrators to manage students and departments.
* Maintain secure authentication and authorization.
* Provide a scalable architecture suitable for real-world educational institutions.

---

# Technology Stack

## Frontend

* React
* Vite
* React Router
* Axios
* React Hook Form
* Bootstrap 5 (initially)
* React Icons

## Backend

* Django
* Django REST Framework (DRF)
* JWT Authentication
* Django CORS Headers
* Pillow
* Django Filter

## Database

* MySQL

## Development Tools

* Git
* GitHub
* VS Code
* Postman
* MySQL Workbench

---

# System Roles

The application contains two primary roles.

## Student

Students can:

* Register online.
* Receive automatically generated credentials.
* Log into their account.
* Change their temporary password after the first login.
* View and edit their profile.
* Upload required documents.
* View notifications.
* Access their personal dashboard.

## Administrator

Administrators can:

* Manage student accounts.
* View all registrations.
* Search and filter students.
* Manage departments.
* Approve or reject registrations (optional).
* Generate reports.
* Monitor audit logs.
* Manage system settings.

---

# System Workflow

1. Student visits the home page.
2. Student completes the registration form.
3. The system validates the submitted information.
4. A new student account is created.
5. A unique username is generated automatically.
6. A secure temporary password is generated automatically.
7. The password is securely hashed before storage.
8. The student receives the generated credentials.
9. The student logs into the system.
10. During the first login, the student is required to change the temporary password.
11. After changing the password, the student is redirected to the personal dashboard.

---

# Core Features

## Public Website

* Home page
* About page
* Departments
* Contact page
* Student registration
* Student login
* Administrator login

## Authentication

* Secure login
* JWT Authentication
* Automatic username generation
* Automatic password generation
* Password hashing
* First-login password change
* Logout

## Student Dashboard

* Dashboard overview
* Student profile
* Academic information
* Department information
* Uploaded documents
* Notifications
* Account settings

## Administrator Dashboard

* Dashboard overview
* Student management
* Department management
* Registration management
* User management
* Reports
* Audit logs
* System settings

---

# Planned Modules

* Authentication
* Student Management
* Department Management
* Registration Management
* User Management
* Dashboard
* Notifications
* Reports
* Audit Logs
* Profile Management
* File Uploads

---

# Database Design (Initial)

The project will include relational tables such as:

* users
* students
* student_profiles
* departments
* registrations
* notifications
* uploaded_documents
* audit_logs
* password_reset_tokens

The database schema will follow normalization principles to improve performance and maintain data integrity.

---

# Backend Architecture

```text
backend/
│
├── config/
├── accounts/
├── students/
├── departments/
├── dashboard/
├── notifications/
├── reports/
├── audit/
├── media/
├── static/
├── templates/
├── manage.py
└── requirements.txt
```

---

# Frontend Architecture

```text
frontend/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── vite.config.js
```

---

# Security Features

* JWT Authentication
* Password hashing
* Role-based authorization
* Protected API endpoints
* Input validation
* CSRF protection where applicable
* SQL injection prevention through Django ORM
* Secure password generation
* First-login password reset
* Environment variable configuration

---

# Future Enhancements

* Email verification
* SMS notifications
* QR Code Student ID
* Student ID card generation
* PDF report generation
* Academic transcript module
* Course registration
* Payment integration
* Attendance management
* Biometric integration
* OCR document verification
* Multi-language support
* Dark mode
* Docker deployment
* CI/CD pipeline
* Cloud deployment

---

# Development Roadmap

### Phase 1

* Project setup
* Environment configuration
* MySQL integration
* Django REST API setup
* React application setup

### Phase 2

* Authentication system
* Student registration
* Login
* JWT implementation

### Phase 3

* Student dashboard
* Profile management
* Document uploads

### Phase 4

* Administrator dashboard
* Student management
* Department management
* Reporting

### Phase 5

* Notifications
* Audit logs
* Testing
* Deployment
* Production optimization

---

# Project Goals

This project is intended to demonstrate professional full-stack software development practices, including:

* Clean Architecture
* Modular Design
* RESTful API Development
* Secure Authentication
* Database Design
* Responsive User Interface
* Scalable Project Structure
* Industry-standard Coding Practices

The completed system should be suitable as both a portfolio project and a foundation for deployment in a real educational institution with additional customization and institutional requirements.

---

# License

This project is developed for educational and portfolio purposes. The architecture and codebase are designed to follow professional software engineering principles and may be extended or customized for institutional use.
