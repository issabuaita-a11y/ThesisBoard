# Step-by-Step: Deploy Firebase Functions

Follow these steps exactly:

## Step 1: Open Terminal
Open Terminal on your Mac (Applications → Utilities → Terminal)

## Step 2: Navigate to Your Project
```bash
cd /Users/issaabuaita/Documents/School/Thesis/ThesisBoard
```

## Step 3: Login to Firebase
```bash
npx firebase-tools login
```
- This will open your browser
- Sign in with your Google account (the one you use for Firebase)
- Allow permissions
- Come back to terminal - it should say "Success! Logged in as..."

## Step 4: Set Your Project
```bash
npx firebase-tools use thesis-board
```
This tells Firebase to use your "thesis-board" project.

## Step 5: Get Your API Keys
You need to get these from your `.env.local` file:
- `OPENAI_API_KEY` - Your OpenAI API key
- `BOARD_PASSWORD` - Your board password (or create one)

## Step 6: Set Firebase Config
Replace the values below with your actual keys:

```bash
npx firebase-tools functions:config:set openai.key="sk-your-actual-openai-key-here"
npx firebase-tools functions:config:set board.password="your-password-here"
```

**Important:** 
- Keep the quotes around the values
- Replace the placeholder text with your actual values
- For OpenAI key, it should start with "sk-"

## Step 7: Build Functions
```bash
cd functions
npm run build
cd ..
```

## Step 8: Deploy Functions
```bash
npx firebase-tools deploy --only functions
```

This will:
- Upload your functions to Google's servers
- Take 2-3 minutes
- Show you the URLs when done:
  - `https://us-central1-thesis-board.cloudfunctions.net/submit`
  - `https://us-central1-thesis-board.cloudfunctions.net/authBoard`

## Step 9: Verify
After deployment, you should see:
```
✔  Deploy complete!
```

## Troubleshooting

**"Project not found"?**
- Make sure you're logged in: `npx firebase-tools login`
- Check project ID: `npx firebase-tools projects:list`

**"Billing required"?**
- Firebase Functions need Blaze plan (pay-as-you-go)
- But free tier is generous - you probably won't pay anything
- Go to Firebase Console → Upgrade to Blaze

**"Permission denied"?**
- Make sure you're the owner of the Firebase project
- Or have proper permissions

## That's It!

Once deployed, your GitHub Pages site will be able to call these functions and everything will work!

