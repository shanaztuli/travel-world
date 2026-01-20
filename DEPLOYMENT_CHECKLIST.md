# Deployment Checklist

## ✅ Files Created/Added
- [x] `server/package.json` - Backend npm dependencies
- [x] `server/tsconfig.json` - Backend TypeScript config
- [x] `server/.env.example` - Backend env template
- [x] `vercel.json` - Vercel deployment config for both frontend & backend
- [x] `.env.local` - Local development API URL

## ✅ Files Updated
- [x] `src/app/destinations/page.tsx` - Uses env variable for API URL
- [x] `src/app/destinations/[id]/page.tsx` - Uses env variable for API URL
- [x] `src/app/add-destination/page.tsx` - Uses env variable for API URL

## 📋 Next Steps

### Step 1: Commit to GitHub
```powershell
git add .
git commit -m "Setup backend for Vercel deployment"
git push origin main
```

### Step 2: Deploy to Vercel
1. Go to https://vercel.com
2. Sign in with your account
3. Click "Add New" → "Project"
4. Import your `travel-to-world` repository
5. Vercel will auto-detect settings (Next.js)
6. Add environment variable before deploying:
   - Name: `NEXT_PUBLIC_API_URL`
   - Value: (leave empty for now, will update after deploy)
7. Click "Deploy"

### Step 3: After Deployment
1. Get your Vercel domain (e.g., https://travel-to-world-abc123.vercel.app)
2. Go to Project Settings → Environment Variables
3. Add/Update: `NEXT_PUBLIC_API_URL` = `https://your-vercel-domain.vercel.app`
4. Click "Redeploy" to apply the environment variable

### Step 4: Test Everything
1. Visit your Vercel domain
2. Go to `/destinations` - should load all 15 destinations
3. Click on a destination - should show details
4. Try login - should work
5. Try adding a new destination - should work

## 🔧 Local Testing (Optional)
```powershell
# Install all dependencies
npm install
cd server
npm install
cd ..

# Run both servers together
npm run dev

# Test in browser
# Frontend: http://localhost:3000
# Backend API: http://localhost:5000/api/destinations
```

## ⚠️ Common Issues

**API calls failing in production?**
- Check that `NEXT_PUBLIC_API_URL` is set in Vercel environment variables
- Make sure you updated it after getting your Vercel domain
- Redeploy after changing environment variables

**Build fails?**
- Check Vercel build logs
- Ensure all files in `server/` folder are committed to git
- Verify `vercel.json` is in the root directory

**CORS errors?**
- Already handled - express server has `cors()` middleware enabled

## 📊 Deployment Architecture

```
┌─ Your Repository ─────────────────────┐
│  ├── src/                 (Frontend)   │
│  ├── server/              (Backend)    │
│  ├── package.json         (Frontend)   │
│  ├── server/package.json  (Backend)    │
│  └── vercel.json          (Config)     │
└────────────────────────────────────────┘
           ↓ (Push to GitHub)
    Vercel detects both
           ↓
┌─── VERCEL DEPLOYMENT ────────────────┐
│  ├── Frontend (Next.js) on main domain│
│  └── Backend (Node/Express) at /api/* │
│  └── Both on same domain (no CORS!)   │
└──────────────────────────────────────┘
```

