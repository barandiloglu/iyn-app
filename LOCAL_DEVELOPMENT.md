# 🚀 Local Development Setup Guide

This guide will help you set up the IYN application for local development with authentication functionality.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- PostgreSQL database (local or cloud)

## Quick Start

### 1. Clone and Install Dependencies

```bash
git clone <your-repo-url>
cd IYN
npm install
```

### 2. Environment Setup

Create a `.env.local` file in the root directory:

```bash
cp env.local.example .env.local
```

Edit `.env.local` with your local database credentials:

```env
# Database URL for local development
DATABASE_URL="postgresql://your-username:your-password@localhost:5432/iyn_local?schema=public"

# JWT Secret for local development
JWT_SECRET="your-local-jwt-secret-change-this-to-something-secure"

# NextAuth configuration
NEXTAUTH_SECRET="your-local-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"

# Environment indicator
NODE_ENV="development"
```

### 3. Database Setup

#### Option A: Local PostgreSQL
```bash
# Create a local database
createdb iyn_local

# Push the schema
npm run db:push

# Generate Prisma client
npm run db:generate
```

#### Option B: Cloud Database (Recommended)
Use a separate Neon database for development:

1. Create a new database at [Neon Console](https://console.neon.tech)
2. Copy the connection string
3. Update `DATABASE_URL` in `.env.local`

### 4. Setup Demo Data

```bash
# Create demo users for testing
npm run setup:local
```

This will create demo accounts:
- **Student**: `student@demo.com` / `password123`
- **Teacher**: `teacher@demo.com` / `password123`
- **Parent**: `parent@demo.com` / `password123`
- **Admin**: `admin@demo.com` / `password123`

### 5. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your application!

## Environment Configuration

The application automatically detects your environment and configures accordingly:

### Local Development (`NODE_ENV=development`)
- Uses `http://localhost:3000` as base URL
- Enables detailed logging
- Uses development JWT secrets
- Cookies work on localhost

### Production (`NODE_ENV=production`)
- Uses Vercel domain as base URL
- Minimal logging
- Requires secure JWT secrets
- Cookies configured for production domain

## Authentication Testing

### Test Login Flow
1. Go to `http://localhost:3000/en/login`
2. Select user type (Student/Teacher/Parent)
3. Use demo credentials from setup
4. Verify redirect to appropriate dashboard

### Test Protected Routes
- `/en/dashboard` - Student dashboard
- `/en/teacher-dashboard` - Teacher dashboard (if implemented)
- `/en/parent-dashboard` - Parent dashboard (if implemented)

## Troubleshooting

### Database Connection Issues
```bash
# Test database connection
npm run db:studio

# Reset database
npm run db:push -- --force-reset
```

### Authentication Issues
1. Check `.env.local` file exists and has correct values
2. Verify JWT_SECRET is set (32+ characters recommended)
3. Clear browser cookies and try again
4. Check browser console for errors

### Environment Issues
```bash
# Validate configuration
node -e "console.log(require('./src/lib/config').validateConfig())"
```

## Development Workflow

### Making Changes
1. Make your code changes
2. The development server will hot-reload automatically
3. Test authentication flow after changes
4. Commit and push to trigger Vercel deployment

### Database Changes
```bash
# After modifying schema.prisma
npm run db:push
npm run db:generate

# Reset demo data if needed
npm run setup:local
```

### Testing Production Build
```bash
# Build and test production version locally
npm run build
npm start
```

## Environment Variables Reference

| Variable | Development | Production | Description |
|----------|-------------|------------|-------------|
| `DATABASE_URL` | Local/Dev DB | Production DB | PostgreSQL connection string |
| `JWT_SECRET` | Dev secret | Secure secret | JWT signing secret (32+ chars) |
| `NEXTAUTH_SECRET` | Dev secret | Secure secret | NextAuth secret (32+ chars) |
| `NEXTAUTH_URL` | `http://localhost:3000` | `https://iyn-app.vercel.app` | Application base URL |
| `NODE_ENV` | `development` | `production` | Environment indicator |

## Security Notes

- Never commit `.env.local` to version control
- Use different JWT secrets for development and production
- Development secrets are logged as warnings - this is expected
- Production deployment requires secure, unique secrets

## Getting Help

If you encounter issues:

1. Check the console for error messages
2. Verify all environment variables are set correctly
3. Ensure database is accessible and schema is up to date
4. Try clearing browser cache and cookies
5. Check the deployment documentation for production-specific issues

## Next Steps

Once local development is working:

1. Test all authentication flows
2. Implement new features locally
3. Test with production build
4. Deploy to Vercel for testing
5. Verify production deployment works correctly

Happy coding! 🎉
