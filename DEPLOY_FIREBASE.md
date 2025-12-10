# Deploy Thesis Wall to Firebase

## Setup Steps

### 1. Install Firebase CLI (if not already installed)
```bash
npm install -g firebase-tools
```

### 2. Login to Firebase
```bash
firebase login
```

### 3. Initialize Firebase in your project
```bash
firebase init
```

When prompted, select:
- ✅ **Functions**: Configure Cloud Functions
- ✅ **Hosting**: Configure Firebase Hosting

**For Functions:**
- Language: TypeScript
- ESLint: Yes
- Install dependencies: Yes

**For Hosting:**
- Public directory: `out` (Next.js export folder)
- Configure as single-page app: Yes
- Set up automatic builds: No

### 4. Update .firebaserc with your project ID
Edit `.firebaserc` and replace `your-project-id` with your actual Firebase project ID.

### 5. Set Firebase Functions Configuration
Set your environment variables for Cloud Functions:

```bash
firebase functions:config:set openai.key="your-openai-api-key"
firebase functions:config:set board.password="your-board-password"
```

Or use environment variables in `.env` (for local development).

### 6. Build and Deploy

**Build Next.js app:**
```bash
npm run build
```

**Deploy Functions:**
```bash
cd functions
npm install
cd ..
firebase deploy --only functions
```

**Deploy Hosting:**
```bash
firebase deploy --only hosting
```

**Deploy Everything:**
```bash
firebase deploy
```

## Environment Variables

Make sure your `.env.local` has:
```
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
```

This is used by the frontend to construct the Firebase Functions URLs.

## Testing Locally

### Test Functions Locally:
```bash
cd functions
npm run serve
```

This starts the Firebase emulator. The functions will be available at:
- `http://localhost:5001/your-project-id/us-central1/submit`
- `http://localhost:5001/your-project-id/us-central1/authBoard`

### Test Hosting Locally:
```bash
firebase serve --only hosting
```

## Production URLs

After deployment, your app will be available at:
- **Hosting**: `https://your-project-id.web.app` or `https://your-project-id.firebaseapp.com`
- **Functions**: `https://us-central1-your-project-id.cloudfunctions.net/submit`

## Troubleshooting

1. **Functions not working?** Make sure you've deployed them: `firebase deploy --only functions`
2. **CORS errors?** The functions already have CORS enabled
3. **Environment variables?** Use `firebase functions:config:set` for production

## Next Steps

1. Set up your Firebase project
2. Run `firebase init`
3. Configure your project ID in `.firebaserc`
4. Set function config variables
5. Build and deploy!
