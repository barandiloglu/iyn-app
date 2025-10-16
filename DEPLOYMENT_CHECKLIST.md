# 🚀 Vercel Deployment Checklist

## Before Deployment

### ✅ Environment Variables
Set these in Vercel Dashboard → Settings → Environment Variables:

```
DATABASE_URL=postgresql://username:password@ep-xxxxx-pooler.us-east-1.aws.neon.tech/dbname?sslmode=require&pgbouncer=true
JWT_SECRET=your-32-char-secret-key-here
NEXTAUTH_SECRET=your-32-char-secret-key-here  
NEXTAUTH_URL=https://iyn-app.vercel.app
```

### ✅ Generate Secure Secrets
```bash
# Generate JWT secret
openssl rand -base64 32

# Generate NextAuth secret  
openssl rand -base64 32
```

### ✅ Database Setup
```bash
# Push schema to production database
DATABASE_URL="your-production-url" npx prisma db push

# Create demo users
DATABASE_URL="your-production-url" npm run setup:production
```

## Deploy to Vercel

### Option 1: GitHub Integration (Recommended)
1. Push code to GitHub
2. Connect repo to Vercel
3. Vercel auto-deploys

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

## Post-Deployment

### ✅ Test Authentication
- [ ] Login as student: `student@demo.com` / `password123`
- [ ] Login as teacher: `teacher@demo.com` / `password123`  
- [ ] Login as parent: `parent@demo.com` / `password123`
- [ ] Login as admin: `admin@demo.com` / `password123`

### ✅ Test Features
- [ ] Toast notifications work
- [ ] Logout functionality works
- [ ] Protected routes redirect properly
- [ ] Dashboard access is role-based

### ✅ Monitor
- [ ] Check Vercel function logs
- [ ] Monitor database connections
- [ ] Test on mobile devices

## Troubleshooting

### Database Issues
```bash
# Check connection
DATABASE_URL="your-url" npx prisma db push

# View database
DATABASE_URL="your-url" npx prisma studio
```

### Environment Issues
- Redeploy after adding env vars
- Check variable names match exactly
- No extra spaces in values

### Build Issues
- Check Prisma client generation
- Verify all dependencies installed
- Check TypeScript compilation

## Security Notes
- ✅ Never commit .env files
- ✅ Use strong, unique secrets
- ✅ Enable SSL for database
- ✅ Monitor logs regularly
- ✅ Rotate secrets periodically

## URLs
- **Production**: https://iyn-app.vercel.app
- **Preview**: https://iyn-app-git-branch.vercel.app
- **Database**: Your Neon dashboard

## Demo Accounts (Production)
| Role | Email | Password | Dashboard |
|------|-------|----------|-----------|
| Student | student@demo.com | password123 | /dashboard |
| Teacher | teacher@demo.com | password123 | /teacher-dashboard |
| Parent | parent@demo.com | password123 | /parent-dashboard |
| Admin | admin@demo.com | password123 | /admin-dashboard |
