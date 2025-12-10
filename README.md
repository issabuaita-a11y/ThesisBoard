# Thesis Wall

A lightweight digital space for MFA thesis where visitors can anonymously share thoughts about family, technology, and connection.

## Features

- **Submission Page**: Mobile-responsive form for anonymous submissions
- **Board Page**: FigJam-style canvas for viewing and exploring all responses
- **AI Tagging**: Automatic tag generation using OpenAI
- **Real-time Updates**: Live updates when new submissions are added
- **Tag Filtering**: Filter and highlight submissions by category

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file with your configuration:
```bash
cp .env.local.example .env.local
```

3. Fill in your Firebase and OpenAI credentials in `.env.local`:
   - Get Firebase config from [Firebase Console](https://console.firebase.google.com/)
   - Get OpenAI API key from [OpenAI Platform](https://platform.openai.com/)
   - Set a password for board access

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) for the submission page
6. Open [http://localhost:3000/board](http://localhost:3000/board) for the board (password protected)

## Firebase Setup

1. Create a new Firebase project
2. Enable Firestore Database
3. Create a collection named `submissions`
4. Copy your Firebase config values to `.env.local`

## Project Structure

- `app/page.tsx` - Submission page
- `app/board/page.tsx` - Board page (password protected)
- `app/api/submit/route.ts` - API endpoint for submissions
- `components/` - React components
- `lib/` - Firebase and OpenAI utilities
- `types/` - TypeScript type definitions

