# Cannon Lab Website Modernization

This repository contains the modernized, CMS-driven website for **The Cannon Lab at Occidental College**. It is built with **React + Vite** and integrated with **Decap CMS** for a a complete "No-Code" management experience.

## 🚀 Speed & SEO Optimization
The site is fully optimized for modern search engines:
- **Dynamic Meta Management**: Every page uses `react-helmet-async` to inject custom titles and descriptions managed via the CMS.
- **Social Media Previews**: Optimized OpenGraph tags ensure high-quality link previews on iMessage, Slack, Twitter, etc.
- **Performance**: Built with Vite for lightning-fast loads and zero-latency navigation.
- **SEO Ready**: Includes a dynamic `sitemap.xml` and `robots.txt` to guide search crawlers.

---

## 🛠️ Setup Instructions for the Site Owner (Jeff)

Follow these steps to take ownership of the site and enable the administrative dashboard.

### 1. Repository Setup
1. **Fork or Copy**: Ensure this repository is under your own GitHub account (e.g., `jeffcannon/TheCannonLabSite`).
2. **Connect to Vercel**: 
   - Sign into [Vercel](https://vercel.com) with your GitHub account.
   - Click **"Add New"** > **"Project"** and import this repository.
   - Vercel will automatically detect the Vite settings. Click **"Deploy"**.

### 2. Connect Your Domain (GoDaddy)
1. In the Vercel Dashboard, go to **Settings > Domains**.
2. Add `cannonchem.com`.
3. Vercel will provide **A** and **CNAME** records.
4. Log into **GoDaddy**, go to your DNS Management for `cannonchem.com`, and update the records to match what Vercel provided.

### 3. Enable the Admin Dashboard (/admin)
To allow the CMS to save changes directly to your GitHub repository, you must create an OAuth App:
1. Go to your **GitHub Settings** > **Developer Settings** > **OAuth Apps** > **New OAuth App**.
2. **Application Name**: `Cannon Lab CMS`
3. **Homepage URL**: `https://cannonchem.com`
4. **Authorization callback URL**: `https://cannonchem.com/admin/`
5. Click **Register**.
6. Copy the **Client ID**.
7. **Edit the Code**: Open `public/admin/config.yml` in this repo and update these lines:
   ```yaml
   backend:
     name: github
     repo: your-github-username/your-repo-name # e.g. jeffcannon/TheCannonLabSite
     branch: main
     auth_type: pkce
     app_id: YOUR_CLIENT_ID_HERE # Paste your Client ID here
   ```
8. Commit and push the change.

---

## 📝 How to Edit the Site
Once the setup above is complete, you can manage the entire site without touching code:
1. Navigate to **`https://cannonchem.com/admin`**.
2. Click **"Login with GitHub"**.
3. Use the sidebar to navigate through:
   - **Global Settings**: Change the Navbar title, Hero text, or Footer contact info.
   - **Members Directory**: Add/remove lab members and update alumni.
   - **News & Posts**: Create new blog posts with images and videos.
   - **Research/Publications/Courses**: Update all academic content.
4. Click **"Publish"** to save changes. Vercel will automatically rebuild the site (takes ~30 seconds) and the changes will be live!

---

## 💻 Local Development
If you need to run the site on your own machine:
1. `npm install`
2. `npm run dev` (Site runs at `localhost:5173`)
3. `npx decap-server` (In a separate terminal to enable the Admin dashboard locally)
