Question 2 — Routing + Global State (Context API)

Problem Statement

Build a simple authentication flow with protected dashboard routing.

Requirements
1. Create two pages:
    - /login
    - /dashboard
2. Implement AuthContext that stores:
    - isAuthenticated
    - login() function.
3. Login page:
    - Simple button "Login"
    - Clicking it sets isAuthenticated = true.
4. Implement ProtectedRoute component:
    - If user not authenticated → redirect to /login
    - If authenticated → allow access.
5. Dashboard page should show:
    - Welcome to EcoTrack Dashboard

Routing Structure

/

├── /login

└── /dashboard (protected)