student_registration_system/
├── backend/                      # Django Root
│   ├── manage.py
│   ├── backend/                  # Project settings
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── api/                      # Main App
│   │   ├── migrations/
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── models.py             # User(AbstractUser) + StudentProfile
│   │   ├── serializers.py        # Registration, Login, Profile serializers
│   │   ├── urls.py               # /api/register, /api/login, /api/profile
│   │   ├── views.py              # Business logic (auto-generate credentials)
│   │   └── utils.py              # Helper functions for generation
│   ├── .env                      # Environment variables (MySQL password, Secret Key)
│   └── requirements.txt
│
├── frontend/                     # React Root (Vite.js for speed)
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── .env                      # API base URL
│   └── src/
│       ├── main.jsx              # Entry point
│       ├── App.jsx               # Routes setup
│       ├── context/
│       │   └── AuthContext.jsx   # JWT storage, Role checking
│       ├── services/
│       │   └── api.js            # Axios instance with Interceptors
│       └── pages/
│           ├── Home.jsx          # Registration Form + "Go to Login" button
│           ├── Login.jsx         # Username/Password form
│           ├── StudentDashboard.jsx  # Student Profile view (change password)
│           └── AdminDashboard.jsx    # Admin view (list all students)
└── database/
    └── init.sql                  # MySQL create database command