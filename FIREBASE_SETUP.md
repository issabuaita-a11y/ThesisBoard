# Firebase Functions Setup for GitHub Pages

Since GitHub Pages can't run API routes, we need to deploy Firebase Functions to handle your API calls.

## Step 1: Update Firebase Project ID

1. Edit `.firebaserc` and replace `your-project-id` with your actual Firebase project ID
2. Or run: `firebase use --add` and select your project

## Step 2: Install Functions Dependencies

```bash
cd functions
npm install
cd ..
```

## Step 3: Set Firebase Functions Configuration

Set your environment variables for Firebase Functions:

```bash
firebase functions:config:set openai.key="your-openai-api-key-here"
firebase functions:config:set board.password="your-board-password-here"
```

**Important:** Replace the values with your actual:
- OpenAI API key (from https://platform.openai.com/api-keys)
- Board password (whatever you want for board access)

## Step 4: Build Functions

```bash
cd functions
npm run build
cd ..
```

## Step 5: Deploy Functions

```bash
firebase deploy --only functions
```

This will deploy two functions:
- `submit` - Handles form submissions
- `authBoard` - Handles board password authentication

You'll get URLs like:
- `https://us-central1-your-project-id.cloudfunctions.net/submit`
- `https://us-central1-your-project-id.cloudfunctions.net/authBoard`

## Step 6: Verify Deployment

After deployment, test the functions:
- Check Firebase Console → Functions to see they're deployed
- The URLs will be shown in the terminal after deployment

## Step 7: Make Sure Firestore is Set Up

1. Go to Firebase Console
2. Enable Firestore Database (if not already)
3. Create a collection named `submissions` (it will be created automatically when first submission comes in)

## That's It!

Once functions are deployed, your GitHub Pages site will be able to call them and everything will work!

## Troubleshooting

**"Project not found" error?**
- Make sure `.firebaserc` has the correct project ID
- Run `firebase projects:list` to see your projects

**Functions not deploying?**
- Make sure you're logged in: `firebase login`
- Check that you have the Blaze plan (pay-as-you-go) - Functions require it (but free tier is generous)

**CORS errors?**
- Functions already have CORS enabled in the code
- Make sure functions are deployed correctly

