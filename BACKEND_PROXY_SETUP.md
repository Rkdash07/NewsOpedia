# Backend Proxy Setup Guide

This guide explains how to set up the backend proxy for NewsAPI in production on Vercel.

## Overview

The backend proxy uses a Vercel serverless function (`api/news.js`) to securely fetch news from NewsAPI. This keeps your API key server-side and prevents CORS/426 errors.

## Setup Steps

### 1. Add Environment Variable in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Click **Add New**
4. Add the following:
   - **Name**: `NEWS_API_KEY`
   - **Value**: Your NewsAPI key (e.g., `03c61b6d8941404c9fef010bdf01f892`)
   - **Environments**: Select all (Production, Preview, Development)
5. Click **Save**

### 2. Deploy to Vercel

After adding the environment variable:

1. Commit and push your changes:
   ```bash
   git add .
   git commit -m "Add backend proxy for NewsAPI"
   git push
   ```

2. Vercel will automatically detect the changes and redeploy

### 3. Verify the Setup

1. After deployment, visit your Vercel app
2. Open the browser console (F12)
3. Check the Network tab to see if requests to `/api/news` are successful
4. The news should load without CORS or 426 errors

## How It Works

- **Frontend** (`NewsBoard.jsx`): Makes requests to `/api/news?category=general`
- **Backend** (`api/news.js`): Vercel serverless function that:
  - Receives the request
  - Fetches data from NewsAPI using the server-side API key
  - Returns the data to the frontend

## File Structure

```
NewsApp/
├── api/
│   └── news.js          # Vercel serverless function (proxy)
├── news-app/
│   └── src/
│       └── Components/
│           └── NewsBoard.jsx  # Updated to use /api/news endpoint
└── vercel.json
```

## Troubleshooting

### API returns 500 error
- Check that `NEWS_API_KEY` is set in Vercel environment variables
- Verify the API key is valid
- Check Vercel function logs in the dashboard

### API returns 426 error
- This shouldn't happen with the proxy, but if it does, check:
  - The API key is correctly set
  - The serverless function is deployed correctly

### CORS errors
- The proxy should eliminate CORS issues since requests go through your own domain
- If you still see CORS errors, check that the API route is accessible

## Local Development

For local development, you can:

1. Create a `.env` file in the root directory:
   ```
   NEWS_API_KEY=your_api_key_here
   ```

2. Use Vercel CLI to run the dev server:
   ```bash
   npm install -g vercel
   vercel dev
   ```

   This will start a local server that mimics Vercel's environment, including serverless functions.

## Benefits

✅ **Security**: API key stays server-side, never exposed to clients  
✅ **No CORS issues**: Requests go through your own domain  
✅ **No 426 errors**: Server-side requests bypass client-side restrictions  
✅ **Better error handling**: Centralized error handling in the proxy

