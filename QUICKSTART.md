# Quick Start Guide - TravelWorld

## ⚡ Get Started in 30 Seconds

### 1. Open Terminal
Navigate to the project folder:
```bash
cd c:\projects\travel-to-world
```

### 2. Install Dependencies (First Time Only)
```bash
npm install
```

### 3. Start the Servers
```bash
npm run dev
```

### 4. Open in Browser
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api/destinations

## 🔑 Login Credentials

Just copy & paste or click the pre-filled form:
- **Email:** user@travel.com
- **Password:** password123

## 🎯 What to Try

### As a Guest (No Login Required)
1. ✓ View beautiful landing page with images
2. ✓ Browse 15+ destinations on /destinations
3. ✓ Click any destination for full details
4. ✓ Explore all sections with background images

### After Login
1. ✓ Click "Add Destination" in navbar
2. ✓ Fill in destination details
3. ✓ See your new destination appear immediately
4. ✓ Logout using the logout button

## 📂 Key Files

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Landing page with 7 sections |
| `src/app/login/page.tsx` | Login form (credentials pre-filled) |
| `src/app/destinations/page.tsx` | Destinations list (loads 15+ from API) |
| `src/app/destinations/[id]/page.tsx` | Destination details with images |
| `src/app/add-destination/page.tsx` | Protected form to add destinations |
| `server/index.ts` | Express.js API with destinations data |

## 🎨 Features You'll See

- **Background Images**: Hero sections, destination cards, CTA sections
- **15+ Destinations**: All with images, prices, ratings, attractions
- **Cookie Authentication**: Demo login works immediately
- **Toast Notifications**: Success/error messages appear
- **Responsive Design**: Works on mobile, tablet, desktop
- **Protected Routes**: Try accessing /add-destination without login - redirects to /login

## 🐛 Common Issues

| Issue | Solution |
|-------|----------|
| "Failed to load destinations" | Check that both servers are running in terminal |
| Login doesn't work | Use exact credentials: user@travel.com / password123 |
| Destinations page is blank | Wait a few seconds for API to load, refresh page |
| Port already in use | Kill Node.js processes: `Get-Process -Name node \| Stop-Process -Force` |

## 📱 Test the Full Flow

1. **Visit Home**: http://localhost:3000 - See 7 sections with images
2. **Browse**: http://localhost:3000/destinations - See 15+ destinations
3. **View Details**: Click any destination card - See full details
4. **Try to Add**: Click "Add Destination" - Redirects to login
5. **Login**: http://localhost:3000/login - Credentials pre-filled
6. **Add Destination**: Fill form and submit - See toast notification
7. **See New Destination**: http://localhost:3000/destinations - Your destination appears!
8. **Logout**: Click logout button in navbar

## 🚀 Next Steps

After testing, you can:
- Modify colors in `tailwind.config.ts`
- Change images in `server/index.ts` or `src/app/page.tsx`
- Add more sections to landing page
- Integrate real payment system
- Connect to real database
- Deploy to production

## 💡 Pro Tips

- All images use Unsplash CDN (free, high-quality)
- Demo credentials are intentionally pre-filled for easy testing
- Both servers must be running (use `npm run dev`)
- Use `npm run build` to create production build
- Check browser console (F12) if something doesn't work

## 📖 Documentation

Full documentation available in `README.md`

---

**Everything is ready to go! Start with `npm run dev` and explore! 🎉**
