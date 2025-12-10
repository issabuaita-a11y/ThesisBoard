# Setup Guide for Thesis Wall

Follow these steps to get your project running:

## Step 1: Create Environment File

I've created a `.env.local.example` file. Copy it to `.env.local`:

```bash
cp .env.local.example .env.local
```

Then fill in your credentials (see steps below).

## Step 2: Set Up Firebase

1. **Go to Firebase Console**: https://console.firebase.google.com/
2. **Create a new project** (or use existing):
   - Click "Add project"
   - Enter a project name (e.g., "thesis-wall")
   - Follow the setup wizard
3. **Enable Firestore Database**:
   - In your project, click "Firestore Database" in the left menu
   - Click "Create database"
   - Choose "Start in test mode" (for now)
   - Select a location (choose closest to you)
   - Click "Enable"
4. **Get your Firebase config**:
   - Click the gear icon ⚙️ next to "Project Overview"
   - Select "Project settings"
   - Scroll down to "Your apps" section
   - Click the web icon `</>` to add a web app
   - Register app (you can name it "Thesis Wall Web")
   - Copy the `firebaseConfig` values
5. **Update `.env.local`** with these values:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

## Step 3: Set Up OpenAI API Key

1. **Go to OpenAI Platform**: https://platform.openai.com/
2. **Sign in** or create an account
3. **Get your API key**:
   - Click on your profile (top right)
   - Select "API keys"
   - Click "Create new secret key"
   - Copy the key (you won't see it again!)
4. **Add to `.env.local`**:
   ```
   OPENAI_API_KEY=sk-your-key-here
   ```

## Step 4: Set Board Password

Add a password for accessing the board page in `.env.local`:
```
BOARD_PASSWORD=your_secure_password_here
```

## Step 5: Run the Project

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Open your browser**:
   - Submission page: http://localhost:3000
   - Board page: http://localhost:3000/board

## Step 6: Test It!

1. **Test submission**:
   - Go to http://localhost:3000
   - Type a test message
   - Click "Send"
   - You should see a confirmation

2. **Test board**:
   - Go to http://localhost:3000/board
   - Enter your board password
   - You should see your test submission as a bubble!

## Troubleshooting

- **Firebase errors**: Make sure Firestore is enabled and in test mode
- **OpenAI errors**: Check your API key is correct and you have credits
- **Port already in use**: Change port with `npm run dev -- -p 3001`

## Next Steps After Setup

- Set up Firestore security rules for production
- Deploy to Vercel or your hosting platform
- Customize colors/styling if needed

