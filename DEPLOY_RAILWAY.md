# Deploy Thesis Wall to Railway

Railway is a simple, powerful platform that handles Next.js perfectly!

## Quick Deploy

### Option 1: Deploy via Railway Dashboard (Easiest)

1. **Push your code to GitHub** (if not already)
   ```bash
   git remote add origin https://github.com/yourusername/thesis-wall.git
   git push -u origin main
   ```

2. **Go to Railway**
   - Visit https://railway.app
   - Sign up/Login (you can use your GitHub account - free tier available!)

3. **Create a new project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

4. **Railway will auto-detect Next.js!**
   - It will automatically detect Next.js and configure everything

5. **Add Environment Variables**
   Click on your service → "Variables" tab → Add:
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
   - Railway will automatically deploy
   - Wait 2-3 minutes
   - Your app will be live! 🎉
   - You'll get a URL like: `https://your-app.up.railway.app`

### Option 2: Deploy via Railway CLI

1. **Install Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login**
   ```bash
   railway login
   ```

3. **Initialize and deploy**
   ```bash
   railway init
   railway up
   ```

4. **Add environment variables**
   ```bash
   railway variables set NEXT_PUBLIC_FIREBASE_API_KEY="your_api_key"
   railway variables set OPENAI_API_KEY="your_openai_key"
   # ... add all your env variables
   ```

## What Railway Does Automatically

✅ Auto-detects Next.js
✅ Handles API routes automatically
✅ Provides free SSL certificate
✅ Gives you a free domain
✅ Auto-deploys on git push
✅ Handles serverless functions
✅ No configuration needed!

## Custom Domain (Optional)

1. Go to your project settings
2. Click "Settings" → "Domains"
3. Add your custom domain

## That's It!

Railway is super simple - just connect your GitHub repo and it works! 🚀

