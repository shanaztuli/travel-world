# Deploying Travel to World - Full Backend Setup for Vercel

## What Was Added

Your backend folder now has the necessary files to be deployed to Vercel:

1. **server/package.json** - Backend dependencies only (express, cors, TypeScript)
2. **server/tsconfig.json** - TypeScript configuration for backend
3. **server/.env.example** - Environment variables template
4. **vercel.json** - Configuration telling Vercel how to deploy both frontend and backend
5. **.env.local** - Local development environment variables

## Updated Files

These files were updated to use the API_URL environment variable instead of hardcoded localhost:
- `src/app/destinations/page.tsx`
- `src/app/destinations/[id]/page.tsx`
- `src/app/add-destination/page.tsx`

## How to Deploy to Vercel (One Project)

### Option 1: Deploy Everything to Vercel (Recommended)

1. **Push your code to GitHub**
   ```powershell
   git add .
   git commit -m "Add backend deployment files for Vercel"
   git push origin main
   ```

2. **Go to vercel.com and sign in**

3. **Create new project and select your travel-to-world repository**

4. **In the deployment settings, add environment variable:**
   - Go to Settings → Environment Variables
   - Name: `NEXT_PUBLIC_API_URL`
   - Value: `https://<your-vercel-domain>.vercel.app` (you'll update this after first deploy)
   - Or temporarily use: `http://localhost:5000` for testing

5. **Deploy!** Vercel will automatically build:
   - Frontend from the root (Next.js)
   - Backend from the `server/` folder (Express)
   - Both will be on the same domain

### What Vercel Does

The `vercel.json` file tells Vercel:
- Build frontend with `@vercel/next`
- Build backend with `@vercel/node`
- Route `/api/*` requests to the backend server
- Route everything else to the frontend

## Local Testing

1. **Install dependencies for both frontend and backend:**
   ```powershell
   npm install
   cd server
   npm install
   cd ..
   ```

2. **Test with environment variable:**
   - Edit `.env.local` to point to localhost: `NEXT_PUBLIC_API_URL=http://localhost:5000`
   - Run: `npm run dev`
   - Both servers will start (frontend on 3000, backend on 5000)

3. **Test API directly:**
   - Open http://localhost:5000/api/destinations
   - Should see all 15 destinations

4. **Test frontend:**
   - Open http://localhost:3000/destinations
   - Should load destinations from the API

## After First Vercel Deploy

1. **Note your Vercel domain** - It will be like: `https://travel-to-world.vercel.app`

2. **Update environment variable in Vercel:**
   - Go to Project Settings → Environment Variables
   - Update `NEXT_PUBLIC_API_URL` to your actual domain: `https://travel-to-world.vercel.app`

3. **Redeploy** - Vercel will redeploy with the new API URL

## Troubleshooting

**Destinations not loading on Vercel?**
- Check browser console for errors
- Verify environment variable is set in Vercel settings
- Make sure backend server is actually deployed (check Vercel Functions logs)

**CORS errors?**
- Backend already has `cors()` enabled, so cross-origin requests should work

**Seeing localhost in production?**
- Forgot to set `NEXT_PUBLIC_API_URL` in Vercel environment variables
- Add it and redeploy

## Important Notes

✅ **Frontend and backend are in the same repository** - Vercel will deploy both from one repo
✅ **No separate backend URL needed** - Everything runs on your Vercel domain
✅ **Local development still uses localhost** - .env.local file handles this
✅ **Frontend deployment not affected** - All existing files remain unchanged
