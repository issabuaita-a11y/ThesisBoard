# Super Simple Deployment - Railway

Forget Firebase Functions and GitHub Pages complexity. Use Railway - it's **super easy**!

## 3 Simple Steps:

### 1. Go to Railway
Visit: https://railway.app
- Sign up with GitHub (free)
- Click "New Project"
- Select "Deploy from GitHub repo"
- Choose your `ThesisBoard` repository

### 2. Add Environment Variables
Railway will auto-detect Next.js! Just add your environment variables:
- Click on your service
- Go to "Variables" tab
- Add these (get values from your `.env.local`):
  - `NEXT_PUBLIC_FIREBASE_API_KEY`
  - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
  - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
  - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
  - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
  - `NEXT_PUBLIC_FIREBASE_APP_ID`
  - `OPENAI_API_KEY`
  - `BOARD_PASSWORD`

### 3. That's It!
- Railway automatically builds and deploys
- Wait 2-3 minutes
- You'll get a URL like: `https://your-app.up.railway.app`
- **No Firebase Functions needed!**
- **No complex setup!**
- **Just works!**

## Update QR Code

Once you have your Railway URL:
1. Edit `generate-qr.js` - change URL to your Railway URL
2. Run: `node generate-qr.js`
3. Print the QR code!

## Why Railway?

✅ Handles Next.js automatically
✅ Handles API routes automatically  
✅ Free to start ($5 credit/month)
✅ No Firebase Functions needed
✅ No complex configuration
✅ Just connect GitHub and it works!

That's it! Much simpler than GitHub Pages + Firebase Functions.

