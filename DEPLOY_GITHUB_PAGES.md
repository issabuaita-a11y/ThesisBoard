# Deploy to GitHub Pages

Your app is now configured for GitHub Pages! Here's what you need to do:

## Important: API Routes

GitHub Pages only serves static files, so your API routes (`/api/submit` and `/api/auth/board`) won't work. The app is now configured to use **Firebase Functions** instead.

## Setup Steps

### 1. Deploy Firebase Functions First

Before GitHub Pages will work, you need to deploy your Firebase Functions:

```bash
cd functions
npm install
cd ..
firebase deploy --only functions
```

This will give you URLs like:
- `https://us-central1-your-project-id.cloudfunctions.net/submit`
- `https://us-central1-your-project-id.cloudfunctions.net/authBoard`

### 2. Enable GitHub Pages

1. Go to your GitHub repository: https://github.com/issabuaita-a11y/ThesisBoard
2. Click **Settings** → **Pages**
3. Under "Source", select **GitHub Actions**
4. Save

### 3. Add GitHub Secrets

Go to your repo → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

Add these secrets:
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

### 4. Push Your Code

```bash
git add .
git commit -m "Configure for GitHub Pages"
git push
```

### 5. Wait for Deployment

- Go to **Actions** tab in your GitHub repo
- You'll see the workflow running
- Wait 2-3 minutes
- Your site will be live at: `https://issabuaita-a11y.github.io/ThesisBoard/`

## Your Site URL

After deployment, your site will be at:
**https://issabuaita-a11y.github.io/ThesisBoard/**

## Update QR Code

Once deployed, update `generate-qr.js`:
```javascript
const url = 'https://issabuaita-a11y.github.io/ThesisBoard/';
```

Then run: `node generate-qr.js`

## Troubleshooting

**Build fails?**
- Check the Actions tab for error logs
- Make sure all GitHub Secrets are set
- Verify Firebase Functions are deployed

**API calls not working?**
- Make sure Firebase Functions are deployed
- Check that `NEXT_PUBLIC_FIREBASE_PROJECT_ID` is set correctly
- Verify CORS is enabled in Firebase Functions

