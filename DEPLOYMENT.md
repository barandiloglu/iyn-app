# Vercel Deployment Guide

## Prerequisites
- Vercel account
- Neon PostgreSQL database
- Git repository (GitHub recommended)

## Step 1: Environment Variables

### In Vercel Dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add the following variables:

```
DATABASE_URL=postgresql://your-username:your-password@your-host:5432/your-database?schema=public
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production-min-32-chars
NEXTAUTH_SECRET=your-nextauth-secret-min-32-chars
NEXTAUTH_URL=https://iyn-app.vercel.app
```

### Generate Secure Secrets:
```bash
# Generate JWT secret (32+ characters)
openssl rand -base64 32

# Generate NextAuth secret (32+ characters)
openssl rand -base64 32
```

## Step 2: Database Setup

### Push Schema to Production Database:
```bash
# Set your production DATABASE_URL
export DATABASE_URL="your-production-neon-url"

# Push schema to production
npx prisma db push

# Generate Prisma client
npx prisma generate

# Create demo users in production (optional)
npx ts-node scripts/create-demo-users.ts
```

## Step 3: Vercel Configuration

### Create `vercel.json` (if needed):
```json
{
  "functions": {
    "src/app/api/**/*.ts": {
      "maxDuration": 30
    }
  },
  "env": {
    "DATABASE_URL": "@database_url",
    "JWT_SECRET": "@jwt_secret",
    "NEXTAUTH_SECRET": "@nextauth_secret",
    "NEXTAUTH_URL": "@nextauth_url"
  }
}
```

## Step 4: Deploy

### Option A: GitHub Integration (Recommended)
1. Push your code to GitHub
2. Connect GitHub repo to Vercel
3. Vercel will auto-deploy on every push

### Option B: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables via CLI
vercel env add DATABASE_URL
vercel env add JWT_SECRET
vercel env add NEXTAUTH_SECRET
vercel env add NEXTAUTH_URL
```

## Step 5: Post-Deployment

### Verify Database Connection:
1. Check Vercel function logs
2. Test login functionality
3. Verify database operations

### Update Demo Users (if needed):
```bash
# Connect to production database
DATABASE_URL="your-production-url" npx ts-node scripts/create-demo-users.ts
```

## Troubleshooting

### Common Issues:

1. **Database Connection Errors**
   - Verify DATABASE_URL is correct
   - Check if Neon allows connections from Vercel IPs
   - Ensure database is not in sleep mode

2. **Environment Variables Not Loading**
   - Redeploy after adding env vars
   - Check variable names match exactly
   - Verify no extra spaces in values

3. **Build Errors**
   - Check Prisma client generation
   - Verify all dependencies are installed
   - Check TypeScript compilation

### Database Connection Pooling:
Neon provides connection pooling. Your DATABASE_URL should look like:
```
postgresql://user:pass@host.neon.tech/dbname?sslmode=require&pgbouncer=true
```

## Security Notes

- Never commit `.env` files to Git
- Use strong, unique secrets for production
- Enable SSL/TLS for database connections
- Regularly rotate JWT secrets
- Monitor Vercel function logs for errors

## Demo Accounts (Production)
After deployment, test with these accounts:
- Student: `student@demo.com` / `password123`
- Teacher: `teacher@demo.com` / `password123`
- Parent: `parent@demo.com` / `password123`
- Admin: `admin@demo.com` / `password123`
