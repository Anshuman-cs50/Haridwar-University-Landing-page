# Vercel Deployment Guide

This project is configured for easy deployment on Vercel.

## Prerequisites

- Node.js 18.17.0 or higher (version specified in `.nvmrc`)
- GitHub repository connected to Vercel

## Environment Variables

### Required Variables

Add these to your Vercel project settings (Settings → Environment Variables):

```
VITE_GOOGLE_API_KEY=<your-google-api-key>
```

Get your Google API key from: https://aistudio.google.com/apikey

## Deployment Steps

### 1. Connect GitHub Repository
- Go to https://vercel.com
- Click "Add New" → "Project"
- Select your GitHub repository `Haridwar-University-Landing-page`
- Click "Import"

### 2. Configure Environment Variables
- In Vercel Project Settings → Environment Variables
- Add `VITE_GOOGLE_API_KEY` with your Google API key
- Make sure it's enabled for Production, Preview, and Development

### 3. Deploy
- Click "Deploy"
- Vercel will automatically:
  - Detect Node.js version from `.nvmrc`
  - Run `npm run build` (from `vercel.json`)
  - Serve files from `dist/` directory
  - Handle client-side routing with SPA rewrites

## Automatic Deployments

After initial setup:
- Every push to `main` branch will trigger automatic deployment
- Preview deployments are created for pull requests
- Failed deployments will automatically rollback the previous version

## Build Configuration

The following files control the deployment:

- **vercel.json** - Deployment configuration (build command, output directory, rewrites, caching)
- **.nvmrc** - Node.js version specification
- **.env.example** - Template for environment variables

## Local Testing

Before deploying, test the production build locally:

```bash
npm run build
npm run preview
```

Visit `http://localhost:4173` to test the production build.

## Troubleshooting

### Build Fails
- Check that all environment variables are set in Vercel dashboard
- Verify Node.js version compatibility
- Check build logs in Vercel dashboard for specific errors

### Environment Variable Not Working
- Ensure `VITE_GOOGLE_API_KEY` is set in Vercel Project Settings
- Redeploy after adding environment variables
- Verify the variable starts with `VITE_` prefix (required for Vite)

### Chatbot Not Working
- Verify Google API key is valid and has proper permissions
- Check browser console for errors
- Ensure API key is set in Vercel environment variables

## Performance Optimization

Current optimizations enabled:
- Long-term caching for assets (1 year)
- Short-term caching for HTML (1 hour)
- Code splitting via Vite
- Production builds are minified

## Custom Domain

To add a custom domain:
1. Go to Vercel Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions provided by Vercel

## Support

For issues:
- Check Vercel logs: Project → Deployments → [Deployment] → Logs
- Review build errors in Vercel dashboard
- Check GitHub repository issues for known problems
