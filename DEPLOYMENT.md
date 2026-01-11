# 🚀 Deployment Guide: GitHub + Netlify

This guide will help you deploy your **Mirror or The Encounter** app to Netlify using GitHub.

---

## 📋 Prerequisites

- ✅ A [GitHub account](https://github.com/signup)
- ✅ A [Netlify account](https://app.netlify.com/signup) (free plan works)
- ✅ Git installed locally (already available in this environment)

---

## 🎯 Step-by-Step Deployment

### Step 1: Create a GitHub Repository

1. **Go to GitHub**
   - Visit https://github.com/new

2. **Create a new repository**
   - Repository name: `mirror-encounter` (or your preferred name)
   - Description: `Interactive journey of true self-discovery`
   - Visibility: Choose Public or Private
   - **IMPORTANT:** Leave "Initialize this repository with" unchecked
   - Click **"Create repository"**

3. **Copy the repository URL**
   - After creating, you'll see a URL like:
     ```
     https://github.com/YOUR_USERNAME/mirror-encounter.git
     ```
   - Copy this URL (you'll need it in Step 2)

---

### Step 2: Push Your Code to GitHub

From your project terminal, run these commands:

```bash
# Navigate to your project (if not already there)
cd /home/z/my-project

# Add GitHub as remote (replace with your actual URL)
git remote add origin https://github.com/YOUR_USERNAME/mirror-encounter.git

# Rename branch to 'main' (modern Git standard)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

**Note:** When prompted for credentials, use your GitHub username and a Personal Access Token (PAT) or your GitHub password.

---

### Step 3: Connect GitHub to Netlify

1. **Go to Netlify**
   - Visit https://app.netlify.com

2. **Create a new site**
   - Click **"Add new site"** → **"Import an existing project"**

3. **Connect GitHub**
   - Click **"GitHub"** under "Continuous Deployment"
   - Authorize Netlify to access your GitHub account
   - Find and select your `mirror-encounter` repository

4. **Configure build settings**
   Netlify will auto-detect Next.js. Verify these settings:

   ```
   Build command: npm run build
   Publish directory: .next
   ```
   
   **For Next.js 15 with App Router, use these advanced settings:**
   
   - Click **"Show advanced"**
   - **Base directory:** Leave empty (root)
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Branch:** `main`

5. **Deploy**
   - Click **"Deploy site"**
   - Netlify will build and deploy your app (takes 2-5 minutes)
   - You'll see a random URL like: `https://amazing-kalam-123456.netlify.app`

---

## ✨ Step 4: Configure Custom Domain (Optional)

### Option A: Use Netlify Subdomain
1. In Netlify, go to **Site settings** → **Domain management**
2. Click **"Change site name"**
3. Enter your preferred name: `mirror-encounter.netlify.app`
4. Click **"Save"**

### Option B: Use Your Own Domain
1. Purchase a domain (e.g., from Namecheap, GoDaddy, etc.)
2. In Netlify, go to **Domain settings** → **Add custom domain**
3. Enter your domain and follow DNS instructions
4. Update DNS records at your domain registrar
5. Wait for DNS propagation (can take up to 48 hours)

---

## 🎨 Step 5: Environment Variables (If Needed)

If your app uses environment variables:

1. Go to **Site settings** → **Environment variables**
2. Click **"Add variable"**
3. Add key-value pairs as needed
4. Redeploy after adding variables

---

## 🔄 Step 6: Automatic Deployments

After setup, Netlify will:
- ✅ **Automatically deploy** when you push to GitHub
- ✅ **Create preview URLs** for pull requests
- ✅ **Rollback** to previous deployments if needed

**To trigger a new deployment:**
```bash
# Make changes
git add .
git commit -m "Your commit message"
git push
```

Netlify will detect the push and deploy automatically!

---

## 🛠 Troubleshooting

### Issue: Build Fails
**Solution:**
1. Check build logs in Netlify dashboard
2. Ensure all dependencies are in `package.json`
3. Try clearing cache: Site settings → Build & deploy → Clear build cache

### Issue: Blank Page After Deploy
**Solution:**
1. Ensure `output: 'export'` is NOT in `next.config.ts`
2. Verify build settings match: Build command `npm run build`, Publish directory `.next`
3. Check console for errors

### Issue: Styles Not Loading
**Solution:**
1. Verify `globals.css` is imported in `layout.tsx`
2. Check Tailwind config is correct
3. Clear browser cache and rebuild

### Issue: Images Not Loading
**Solution:**
1. Ensure images are in `public/` folder
2. Use relative paths: `/image.png` (not `./image.png`)
3. Check file paths are case-sensitive

---

## 📚 Netlify Specific Configuration for Next.js

Create a `netlify.toml` file in your project root for additional configuration:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "18"
  NPM_FLAGS = "--legacy-peer-deps"
```

Add this file if you encounter any Netlify-specific issues.

---

## ✅ Deployment Checklist

Before deploying, verify:

- [ ] All code is committed to git
- [ ] `.gitignore` excludes `node_modules`, `.next`, `.env`
- [ ] Build runs locally: `npm run build`
- [ ] App works locally: `npm run dev`
- [ ] No console errors in production build
- [ ] Environment variables configured (if needed)
- [ ] Custom domain configured (optional)

---

## 🎉 Success!

Once deployed, your app will be live at:
- **Random URL:** `https://xxxxx.netlify.app`
- **Custom URL:** `https://your-domain.com` (if configured)

You can now:
- Share your app with the world
- Monitor analytics in Netlify dashboard
- Manage deployments and rollbacks
- Set up custom forms and functions

---

## 📞 Getting Help

- **Netlify Docs:** https://docs.netlify.com
- **Next.js Deployment:** https://nextjs.org/docs/deployment
- **GitHub Support:** https://support.github.com

---

**Happy deploying! 🚀**
