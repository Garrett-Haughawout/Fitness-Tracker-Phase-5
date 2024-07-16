
Fitness Tracker
Overview
Fitness Tracker is a web application designed to help users track their workouts, set fitness goals, and share progress with friends. The application leverages Flask and SQLAlchemy for the backend and React Router for the frontend.

Features
The application includes user authentication and profile management, allowing users to register, log in, and manage their profiles securely. Users can log workout details, including type, duration, and calories burned. Additionally, users can set and track fitness goals with descriptions and target dates. The app also supports managing friends, enabling users to add and manage friends to share progress and stay motivated. Progress charts, implemented using Chart.js, visualize workout progress with interactive charts.

Backend (Flask and SQLAlchemy)
Models
The backend includes several models:

User: Stores authentication and profile information.
Workout: Logs details of each workout, including type, duration, and calories burned.
Goal: Manages fitness goals with descriptions and target dates.
Friendship: Handles many-to-many relationships between users for friend management.

Relationships
The application models several relationships:
A user can log multiple workouts.
A user can set multiple fitness goals.
Users can be friends with other users (many-to-many relationship).

CRUD Operations
The application supports full CRUD operations for users and workouts, allowing users to create, read, update, and delete user profiles and workout logs.

Frontend (React Router)
Routes
The frontend includes several routes:
Home: The user dashboard displays recent workouts and goals.
Workout Log: A detailed view for logging new workouts and viewing workout history.
Friends: A view to manage the friends list.
Register: The user registration page.
Login: The user login page.

New Feature
Progress charts implemented using Chart.js allow users to track and visualize their progress over time.

Authentication and Authorization
Users must log in to log workouts or set goals.


