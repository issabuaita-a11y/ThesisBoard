# Fix: Quota Exceeded Error

You're getting a rate limit error because Firebase tried to enable too many APIs at once.

## Solution 1: Wait and Retry (Easiest)

Just wait 1-2 minutes, then run the deploy command again:

```bash
npx firebase-tools deploy --only functions
```

The APIs are probably already enabled now, so it should work on the second try.

## Solution 2: Enable APIs Manually (If Solution 1 doesn't work)

1. Go to: https://console.cloud.google.com/apis/library?project=thesis-board
2. Search for and enable these APIs:
   - **Cloud Functions API** (cloudfunctions.googleapis.com)
   - **Cloud Build API** (cloudbuild.googleapis.com)
   - **Artifact Registry API** (artifactregistry.googleapis.com)
3. Wait 1-2 minutes for them to enable
4. Then run: `npx firebase-tools deploy --only functions`

## Solution 3: Use Firebase Console

1. Go to: https://console.firebase.google.com/project/thesis-board/functions
2. Click "Get Started" if you see it
3. This will enable the APIs automatically
4. Then try deploying again

## What Happened?

Firebase tried to automatically enable 3 APIs at once, which triggered Google Cloud's rate limit. The APIs are probably already enabled now, so just waiting and retrying usually works.

