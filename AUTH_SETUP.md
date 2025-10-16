# Authentication System Setup

## Overview
This authentication system provides role-based access control for students, teachers, parents, and administrators. Each user type has access to their respective dashboard with proper route protection.

## Features
- **JWT Authentication** with httpOnly cookies for security
- **Role-based Access Control** (Student, Teacher, Parent, Admin)
- **Protected Routes** with automatic redirection
- **Password Hashing** using bcryptjs
- **TypeScript Support** with full type safety

## Setup Instructions

### 1. Environment Variables
Create a `.env` file in the root directory with your database connection:

```env
# Database (Replace with your Neon PostgreSQL URL)
DATABASE_URL="postgresql://your-username:your-password@your-host:5432/your-database?schema=public"

# JWT Secret (Change this to a secure random string)
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"

# NextAuth (if needed later)
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"
```

### 2. Database Setup
Run the following commands to set up your database:

```bash
# Push the schema to your database
npx prisma db push

# Create demo users for testing
npx ts-node scripts/create-demo-users.ts
```

### 3. Start the Development Server
```bash
npm run dev
```

## Demo Users
After running the demo user creation script, you can test with these accounts:

| Role | Email | Password | Dashboard Route |
|------|-------|----------|----------------|
| Student | student@demo.com | password123 | `/dashboard` |
| Teacher | teacher@demo.com | password123 | `/teacher-dashboard` |
| Parent | parent@demo.com | password123 | `/parent-dashboard` |
| Admin | admin@demo.com | password123 | `/admin-dashboard` |

## User Access Rules

### Students
- Can only login as "Student" on login page
- Redirected to `/dashboard` after login
- Cannot access teacher, parent, or admin dashboards

### Teachers
- Can only login as "Teacher" on login page
- Redirected to `/teacher-dashboard` after login
- Cannot access student, parent, or admin dashboards

### Parents
- Can only login as "Parent" on login page
- Redirected to `/parent-dashboard` after login
- Cannot access student, teacher, or admin dashboards

### Administrators
- Can login as any user type (Student, Teacher, Parent)
- Always redirected to `/admin-dashboard` after login
- Have access to admin panel with user management features

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user info

### Request/Response Examples

#### Login Request
```json
{
  "email": "student@demo.com",
  "password": "password123",
  "userType": "student"
}
```

#### Login Response
```json
{
  "success": true,
  "user": {
    "id": "user_id",
    "email": "student@demo.com",
    "role": "STUDENT",
    "firstName": "Ahmet",
    "lastName": "Yılmaz",
    "isActive": true
  },
  "redirectTo": "/dashboard",
  "message": "Login successful"
}
```

## File Structure

```
src/
├── app/
│   ├── api/auth/          # Authentication API routes
│   ├── [lang]/
│   │   ├── login/         # Login page
│   │   ├── dashboard/     # Student dashboard (existing)
│   │   ├── teacher-dashboard/  # Teacher dashboard
│   │   ├── parent-dashboard/   # Parent dashboard
│   │   └── admin-dashboard/    # Admin dashboard
├── components/
│   ├── auth/
│   │   └── protected-route.tsx  # Route protection wrapper
│   └── dashboard/         # Dashboard components
├── contexts/
│   └── auth-context.tsx   # Authentication React context
├── lib/
│   ├── auth.ts           # Authentication utilities
│   └── db.ts            # Database connection
└── types/
    └── auth.ts           # Authentication types
```

## Security Features

- **HttpOnly Cookies**: JWT tokens stored in secure httpOnly cookies
- **Password Hashing**: All passwords hashed with bcryptjs
- **Role Validation**: Server-side role validation on every request
- **Route Protection**: Client and server-side route protection
- **CSRF Protection**: HttpOnly cookies prevent XSS attacks

## Next Steps

1. Set up your Neon PostgreSQL database
2. Update the `.env` file with your database URL
3. Run the database setup commands
4. Test the login functionality with demo users
5. Customize the dashboard components as needed

## Troubleshooting

### Database Connection Issues
- Ensure your Neon database URL is correct
- Check that your database is accessible from your IP
- Verify the database schema was pushed successfully

### Login Issues
- Check browser console for errors
- Verify JWT_SECRET is set in environment variables
- Ensure demo users were created successfully

### Route Protection Issues
- Check that AuthProvider is wrapped around your app
- Verify protected routes are using the ProtectedRoute component
- Ensure user roles match the expected values
