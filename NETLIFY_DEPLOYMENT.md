# Deploying Unnati Foundation Website to Netlify

This guide will help you deploy the Unnati Foundation website to Netlify.

## Prerequisites
- A Netlify account (sign up at https://netlify.com)
- Your GitHub repository with this code

## Deployment Steps

### Option 1: Deploy from GitHub (Recommended)

1. **Push your code to GitHub**
   - First, authenticate with GitHub in Replit's Git panel
   - Click the "Edit Settings" button in the Git tab
   - Follow the authentication flow
   - Then push your code

2. **Connect to Netlify**
   - Go to https://app.netlify.com/
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your GitHub account
   - Select the `sandeepdoodigani/unnati` repository

3. **Configure Build Settings**
   - Netlify should automatically detect the settings from `netlify.toml`
   - If not, use these settings:
     - **Build command:** `vite build`
     - **Publish directory:** `dist/public`
     - **Node version:** 20

4. **Deploy**
   - Click "Deploy site"
   - Netlify will build and deploy your site
   - You'll get a URL like `https://random-name.netlify.app`

5. **Custom Domain (Optional)**
   - In Netlify dashboard, go to "Domain settings"
   - Click "Add custom domain"
   - Follow instructions to set up `unnatifoundationindia.org`

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI** (in your local machine, not Replit)
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Build the project**
   ```bash
   vite build
   ```

4. **Deploy**
   ```bash
   netlify deploy --prod
   ```

### Option 3: Manual Deploy (Drag & Drop)

1. **Build the project in Replit**
   - Run the build command in the Shell:
   ```bash
   vite build
   ```

2. **Download the build folder**
   - Download the `dist/public` folder from your Replit workspace

3. **Deploy to Netlify**
   - Go to https://app.netlify.com/drop
   - Drag and drop the `dist/public` folder
   - Your site will be deployed instantly

## What's Configured

The `netlify.toml` file in this project includes:

- **Build command:** Runs Vite build to create optimized production files
- **Publish directory:** Points to `dist/public` where built files are located
- **Redirects:** Handles client-side routing (all routes redirect to index.html)
- **Node version:** Set to Node 20 for compatibility

## After Deployment

Once deployed, your website will be live at a Netlify URL. You can:

1. **View your site** at the provided URL
2. **Set up a custom domain** (unnatifoundationindia.org)
3. **Enable HTTPS** (automatic with Netlify)
4. **Set up continuous deployment** (auto-deploy when you push to GitHub)

## Continuous Deployment

Once connected to GitHub, Netlify will automatically:
- Build and deploy whenever you push to the main branch
- Create preview deployments for pull requests
- Provide deploy previews for testing before going live

## Troubleshooting

If the build fails:
1. Check the Netlify build logs for errors
2. Ensure all dependencies are in `package.json`
3. Verify the build works locally with `vite build`
4. Check that Node version 20 is being used

## Support

For Netlify-specific issues, check:
- Netlify Documentation: https://docs.netlify.com/
- Netlify Community: https://answers.netlify.com/

For website issues, contact the development team.
