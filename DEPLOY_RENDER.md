# Deploy Thesis Wall to Render

Render is another great option that handles Next.js perfectly!

## Quick Deploy

### Deploy via Render Dashboard

1. **Push your code to GitHub** (if not already)
   ```bash
   git remote add origin https://github.com/yourusername/thesis-wall.git
   git push -u origin main
   ```

2. **Go to Render**
   - Visit https://render.com
   - Sign up/Login (you can use your GitHub account - free tier available!)

3. **Create a new Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select your repository

4. **Configure the service**
   - Name: `thesis-wall` (or your choice)
   - Region: Choose closest to you
   - Branch: `main`
   - Root Directory: `.` (leave empty)
   - Runtime: `Node`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`

5. **Add Environment Variables**
   Click "Environment" → "Add Environment Variable" and add:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   OPENAI_API_KEY=your_openai_key
   BOARD_PASSWORD=your_board_password
   NODE_VERSION=20.20.0
   ```

6. **Deploy!**
   - Click "Create Web Service"
   - Wait 5-10 minutes for first build
   - Your app will be live! 🎉
   - You'll get a URL like: `https://thesis-wall.onrender.com`

## What Render Does

✅ Handles Next.js with API routes
✅ Provides free SSL certificate
✅ Gives you a free domain
✅ Auto-deploys on git push
✅ Free tier available (with some limitations)

## Custom Domain (Optional)

1. Go to your service settings
2. Click "Custom Domains"
3. Add your domain

## Note on Free Tier

Render's free tier may spin down after inactivity. For production, consider:
- Paid plan (starts at $7/month)
- Or use Railway/Vercel which have better free tiers

## That's It!

Render is straightforward - just connect and deploy! 🚀

