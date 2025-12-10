# Deploy Thesis Wall to Vercel

Vercel is the easiest way to deploy Next.js apps! It's made by the creators of Next.js and handles everything automatically.

## Quick Deploy (Recommended)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/thesis-wall.git
   git push -u origin main
   ```

2. **Go to Vercel**
   - Visit https://vercel.com
   - Sign up/Login (you can use your GitHub account)

3. **Import your project**
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js!

4. **Add Environment Variables**
   Click "Environment Variables" and add:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   OPENAI_API_KEY=your_openai_key
   BOARD_PASSWORD=your_board_password
   ```

5. **Deploy!**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your app will be live! 🎉

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Link to existing project? No (first time)
   - Project name? thesis-wall (or your choice)
   - Directory? ./ (current directory)
   - Override settings? No

4. **Add Environment Variables**
   ```bash
   vercel env add NEXT_PUBLIC_FIREBASE_API_KEY
   vercel env add OPENAI_API_KEY
   vercel env add BOARD_PASSWORD
   # ... add all your env variables
   ```

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## What Vercel Does Automatically

✅ Detects Next.js framework
✅ Builds your app
✅ Handles API routes (`/api/submit`, `/api/auth/board`)
✅ Provides free SSL certificate
✅ Gives you a free domain (your-project.vercel.app)
✅ Auto-deploys on every git push
✅ Handles serverless functions
✅ Optimizes images and assets

## Custom Domain (Optional)

1. Go to your project settings on Vercel
2. Click "Domains"
3. Add your custom domain
4. Follow DNS setup instructions

## Environment Variables

Make sure all these are set in Vercel:
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `OPENAI_API_KEY`
- `BOARD_PASSWORD`

## Troubleshooting

**Build fails?**
- Check that all dependencies are in `package.json`
- Make sure environment variables are set
- Check build logs in Vercel dashboard

**API routes not working?**
- Vercel handles them automatically - no extra config needed!
- Make sure your API routes are in `app/api/` directory

**Environment variables not working?**
- Make sure `NEXT_PUBLIC_*` variables are set for client-side access
- Redeploy after adding new environment variables

## That's It!

Vercel makes deployment super simple. Your app will be live in minutes! 🚀

