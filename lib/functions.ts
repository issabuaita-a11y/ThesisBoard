// Helper to get Firebase Functions URLs
// In development, use localhost
// In production, use the deployed Firebase Functions URLs

const isDevelopment = process.env.NODE_ENV === 'development';

// Get your Firebase project ID from .env.local or Firebase config
const PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'your-project-id';
const REGION = 'us-central1'; // Change if you deploy to a different region

export const getFunctionUrl = (functionName: string): string => {
  if (isDevelopment) {
    // For local development, you can use the emulator or your deployed functions
    // Option 1: Use deployed functions (recommended for testing)
    return `https://${REGION}-${PROJECT_ID}.cloudfunctions.net/${functionName}`;
    
    // Option 2: Use local emulator (uncomment if running firebase emulators)
    // return `http://localhost:5001/${PROJECT_ID}/${REGION}/${functionName}`;
  }
  
  // Production: Use deployed Firebase Functions
  return `https://${REGION}-${PROJECT_ID}.cloudfunctions.net/${functionName}`;
};

export const SUBMIT_FUNCTION_URL = getFunctionUrl('submit');
export const AUTH_BOARD_FUNCTION_URL = getFunctionUrl('authBoard');

