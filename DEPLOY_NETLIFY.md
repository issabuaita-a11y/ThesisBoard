# Deploy Thesis Wall to Netlify

Netlify is a great platform for hosting Next.js apps! It handles API routes automatically with Netlify Functions.

## Quick Deploy (Recommended)

### Option 1: Deploy via Netlify Dashboard (Easiest)

1. **Push your code to GitHub** (if not already)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/thesis-wall.git
   git push -u origin main
   ```

2. **Go to Netlify**
   - Visit https://netlify.com
   - Sign up/Login (you can use your GitHub account - it's free!)

3. **Import your project**
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select your repository
   - Netlify will auto-detect Next.js!

4. **Configure build settings** (usually auto-detected):
   - Build command: `npm run build`
   - Publish directory: `.next` (or leave default)
   - Netlify will use the `netlify.toml` config automatically

5. **Add Environment Variables**
   Click "Site settings" → "Environment variables" → "Add variable" and add:
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

6. **Deploy!**
   - Click "Deploy site"
   - Wait 2-3 minutes for build
   - Your app will be live! 🎉
   - You'll get a URL like: `https://your-site-name.netlify.app`

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```
   
   First time? It will ask you to:
   - Create & configure a new site
   - Link to existing site? No (first time)
   - Team: Select your team
   - Site name: thesis-wall (or your choice)

4. **Add Environment Variables via CLI**
   ```bash
   netlify env:set NEXT_PUBLIC_FIREBASE_API_KEY "your_api_key"
   netlify env:set OPENAI_API_KEY "your_openai_key"
   netlify env:set BOARD_PASSWORD "your_password"
   # ... add all your env variables
   ```

5. **Redeploy after adding env vars**
   ```bash
   netlify deploy --prod
   ```

## What Netlify Does Automatically

✅ Detects Next.js framework
✅ Builds your app
✅ Converts API routes to Netlify Functions automatically
✅ Provides free SSL certificate
✅ Gives you a free domain (your-site.netlify.app)
✅ Auto-deploys on every git push
✅ Handles serverless functions
✅ CDN for fast global access

## Custom Domain (Optional)

1. Go to your site settings on Netlify
2. Click "Domain management"
3. Click "Add custom domain"
4. Follow DNS setup instructions

## Environment Variables

Make sure all these are set in Netlify:
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `OPENAI_API_KEY`
- `BOARD_PASSWORD`

## Generate QR Code After Deployment

Once deployed, you'll get a URL like `https://your-site.netlify.app`. Update the QR code generator:

1. Edit `generate-qr.js` and change the URL to your Netlify URL
2. Run: `node generate-qr.js`
3. Print the new QR code!

## Troubleshooting

**Build fails?**
- Check that all dependencies are in `package.json`
- Make sure environment variables are set
- Check build logs in Netlify dashboard

**API routes not working?**
- Netlify automatically converts them to Functions
- Make sure your API routes are in `app/api/` directory
- Check function logs in Netlify dashboard

**Environment variables not working?**
- Make sure `NEXT_PUBLIC_*` variables are set for client-side access
- Redeploy after adding new environment variables

## That's It!

Netlify makes deployment super simple. Your app will be live and accessible from anywhere! 🚀

Once deployed, you'll get a public URL that works from any WiFi network - perfect for your QR code!

