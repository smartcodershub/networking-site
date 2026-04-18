# LearnHub — Astro Topics & Subtopics Starter

A free static site with topic → subtopic structure. Perfect for CCNA notes,
tutorials, documentation, or any structured learning content.

---

## How it works

```
Home (/)
  └── Topic page  (/topics/ccna)
        └── Subtopic page  (/topics/ccna/ip-addressing)
        └── Subtopic page  (/topics/ccna/routing)
        └── ...
  └── Topic page  (/topics/linux-basics)
        └── Subtopic page  (/topics/linux-basics/file-system)
```

All content lives in ONE file: `src/data/topics.js`
You never need to create individual page files — Astro generates them automatically.

---

## Project Structure

```
astro-ccna/
├── src/
│   ├── data/
│   │   └── topics.js          ← ✏️ EDIT THIS to add topics/subtopics/content
│   ├── components/
│   │   ├── Banner.astro       ← Reusable banner (same on all pages, different props)
│   │   ├── Navbar.astro       ← Auto-populated from topics.js
│   │   └── Sidebar.astro      ← Shows subtopic list, highlights current page
│   ├── layouts/
│   │   └── BaseLayout.astro   ← Shared HTML shell
│   ├── pages/
│   │   ├── index.astro        ← Home page (auto-lists all topics)
│   │   ├── topics/
│   │   │   ├── [slug].astro           ← Auto-generates /topics/ccna etc.
│   │   │   └── [slug]/[subtopic].astro ← Auto-generates /topics/ccna/routing etc.
│   └── styles/
│       └── global.css
├── netlify.toml
└── package.json
```

---

## Step 1 — Install & Run locally

Requires Node.js (https://nodejs.org — download LTS version)

```bash
cd astro-ccna
npm install
npm run dev
# Open http://localhost:4321
```

---

## Step 2 — Add your content

Open `src/data/topics.js` and edit the `topics` array:

```js
export const topics = [
  {
    slug: 'ccna',              // URL: /topics/ccna
    title: 'CCNA',
    description: 'Cisco networking fundamentals',
    icon: '🌐',
    color: '#0070d2',
    subtopics: [
      {
        slug: 'ip-addressing',     // URL: /topics/ccna/ip-addressing
        title: 'IP Addressing',
        description: 'IPv4, IPv6, subnetting',
        content: `
## IP Addressing
Your notes here in markdown...
        `
      },
      // Add more subtopics here...
    ]
  },
  // Add more topics here...
];
```

That's it — no new files needed. Astro auto-generates all pages.

---

## Step 3 — Upload to GitHub

### Option A: GitHub website (easiest — no terminal needed)

1. Go to https://github.com → Sign up free
2. Click the **+** icon → **New repository**
3. Name it `my-learn-site` → click **Create repository**
4. On the next screen click **uploading an existing file**
5. Drag and drop your entire `astro-ccna` folder contents
6. Click **Commit changes**

### Option B: Terminal (recommended for regular updates)

```bash
# One-time setup
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/my-learn-site.git
git push -u origin main

# Every time you update content
git add .
git commit -m "added new subtopic"
git push
```

---

## Step 4 — Deploy FREE on Netlify

1. Go to https://netlify.com → **Sign up free** (use GitHub login)
2. Click **Add new site** → **Import an existing project**
3. Click **GitHub** → select your `my-learn-site` repo
4. Build settings auto-fill from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy site**

Your site goes live in ~60 seconds at:
**https://random-name-123.netlify.app**

---

## Step 5 — Auto-deploy on content update

Every `git push` triggers a rebuild on Netlify automatically.

```bash
# Edit src/data/topics.js → add new subtopic → then:
git add .
git commit -m "added OSPF subtopic"
git push
# Site updates in ~30 seconds ✅
```

---

## Custom domain (free SSL included)

1. Netlify dashboard → **Domain settings** → **Add custom domain**
2. Type your domain (e.g. `ccnanotes.com`)
3. Update your domain's nameservers to Netlify's servers (shown in settings)
4. Free HTTPS certificate added automatically

---

## URL structure that gets generated

```
/                              ← Home (lists all topics)
/topics/ccna                  ← CCNA topic page (lists all CCNA subtopics)
/topics/ccna/network-fundamentals
/topics/ccna/ip-addressing
/topics/ccna/routing
/topics/ccna/vlans
/topics/linux-basics           ← Linux topic page
/topics/linux-basics/file-system
/topics/linux-basics/permissions
```

All URLs are auto-generated from your `topics.js` data. 
