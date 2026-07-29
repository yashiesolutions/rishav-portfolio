# Rishav Kumar — Portfolio Website

A personal portfolio website built with **Angular 18** (standalone components), showcasing
13+ years of hybrid mobile app development experience plus recent real estate sales work.

Live sections: **Home · About · Skills · Experience · Projects · Contact**

Everything here is **100% free** — no paid packages, no paid hosting. It's built to run
locally with the free Angular CLI and deploy to **GitHub Pages** (free static hosting).

---

## 1. Tech stack

| Purpose        | Choice                                              |
|-----------------|------------------------------------------------------|
| Framework       | Angular 18 (standalone components, no NgModules)    |
| Language        | TypeScript                                           |
| Styling         | SCSS, plain CSS variables (no paid UI kit)           |
| Fonts           | Google Fonts — Space Grotesk, Inter, JetBrains Mono (free) |
| Routing         | Angular Router, lazy-loaded feature pages            |
| Hosting         | GitHub Pages (free) via GitHub Actions               |

---

## 2. Folder structure

```
portfolio/
├── .github/workflows/deploy.yml     # Free auto-deploy to GitHub Pages on every push
├── src/
│   ├── app/
│   │   ├── app.component.*          # Root shell (navbar + router-outlet + footer)
│   │   ├── app.routes.ts            # All page routes
│   │   ├── app.config.ts            # App-wide providers (router, animations)
│   │   ├── core/
│   │   │   ├── data/portfolio-data.ts   # ⭐ ALL your text content lives here
│   │   │   ├── config/assets.config.ts  # ⭐ ALL image/resume file paths live here
│   │   │   └── models/portfolio.model.ts# TypeScript interfaces for the content
│   │   ├── shared/components/
│   │   │   ├── navbar/                  # Top navigation (About/Skills/Experience/Projects/Contact)
│   │   │   └── footer/                  # Footer with quick contact links
│   │   └── features/
│   │       ├── home/                    # Landing page (hero, resume button, stats)
│   │       ├── about/
│   │       ├── skills/
│   │       ├── experience/
│   │       ├── projects/
│   │       ├── contact/                 # Email / WhatsApp / LinkedIn
│   │       └── not-found/               # 404 page
│   ├── assets/
│   │   ├── images/                  # ⭐ REPLACE YOUR PHOTOS HERE (see section 4)
│   │   │   ├── profile/profile-photo.jpg
│   │   │   ├── about/about-photo.jpg
│   │   │   ├── projects/*.jpg
│   │   │   ├── og/og-cover.jpg
│   │   │   ├── favicon.svg
│   │   │   └── logo-mark.svg
│   │   └── resume/
│   │       └── Rishav_Kumar_Resume.pdf   # ⭐ REPLACE YOUR RESUME HERE
│   ├── index.html
│   ├── main.ts
│   └── styles.scss                  # Global design tokens (colors, fonts, spacing)
├── angular.json
├── package.json
└── README.md
```

---

## 3. Run it locally (macOS, Angular CLI already installed)

```bash
# 1. Unzip the project and open it in VS Code
cd portfolio
code .

# 2. Install dependencies (only needed once, or after editing package.json)
npm install

# 3. Start the local dev server
npm start
# or: ng serve

# 4. Open the site
# Visit http://localhost:4200 — it live-reloads as you edit files
```

Build a production bundle at any time with:

```bash
npm run build
# Output goes to dist/portfolio/
```

---

## 4. Replacing images

All image paths are centralized in **one file**:
`src/app/core/config/assets.config.ts`

You have two ways to swap in your own photos:

### Option A — Easiest (recommended)
Keep the **same file name**, just drop your new image into the matching folder,
overwriting the placeholder:

| What to replace          | Put your file here                                  | Recommended size |
|---------------------------|-------------------------------------------------------|-------------------|
| Profile photo (hero)      | `src/assets/images/profile/profile-photo.jpg`         | Square, 440×440px+ |
| About page photo          | `src/assets/images/about/about-photo.jpg`             | Portrait, 4:5 ratio |
| Social share preview image| `src/assets/images/og/og-cover.jpg`                   | 1200×630px |
| "BOG Shield 2.0" project  | `src/assets/images/projects/bog-shield.jpg`           | 16:10 ratio |
| "ICEGATE" project         | `src/assets/images/projects/icegate.jpg`              | 16:10 ratio |
| "Martin Marietta App Suite" project | `src/assets/images/projects/work-order.jpg`| 16:10 ratio |
| "OMR Test App" project    | `src/assets/images/projects/omr-test-app.jpg`         | 16:10 ratio |
| "Kheti Bari" project      | `src/assets/images/projects/kheti-bari.jpg`           | 16:10 ratio |
| "Online Class & Test App" project | `src/assets/images/projects/online-class-test.jpg` | 16:10 ratio |
| "TS Client App" project   | `src/assets/images/projects/ts-client-app.jpg`        | 16:10 ratio |
| "Hotel & School ERP Suite" project | `src/assets/images/projects/hotel-school-erp.jpg` | 16:10 ratio |
| "E-Learning Platforms" project | `src/assets/images/projects/elearning-platforms.jpg` | 16:10 ratio |
| "Coaching Suite" project  | `src/assets/images/projects/coaching-suite.jpg`       | 16:10 ratio |
| Favicon / browser tab icon| `src/assets/images/favicon.svg`                       | SVG, any size |

Just make sure your replacement file has the **exact same file name** as the one
you're replacing (you can convert PNG/HEIC to `.jpg` in Preview.app: File → Export).

### Option B — Use a different file name
Open `src/app/core/config/assets.config.ts` and change the path string to point at
your new file name, e.g.:

```ts
profile: {
  photo: 'assets/images/profile/my-new-photo.jpg', // ← change this line
  ...
}
```

No other file in the app needs to change — every component reads from this one map.

### Replacing the résumé
Same idea — overwrite `src/assets/resume/Rishav_Kumar_Resume.pdf` with your own PDF
(keep the same file name), or change `RESUME_PATH` in `assets.config.ts` if you rename it.
The **"View Resume"** button on the Home and About pages opens this file in a new tab.

---

## 5. Editing your text content (name, job history, skills, etc.)

Everything else — your name, summary, stats, skills, work experience, education, and
project descriptions — lives in one file:
`src/app/core/data/portfolio-data.ts`

It's plain, readable TypeScript objects and arrays. Edit the values directly; the
website updates automatically. Your contact details (email, phone, WhatsApp number,
LinkedIn URL) are in the `PROFILE` object at the top of that same file.

---

## 6. Deploying to GitHub Pages (free)

There are two ways to deploy — pick whichever you prefer.

### Option A — Automatic, via GitHub Actions (recommended)

This repo already includes `.github/workflows/deploy.yml`, which rebuilds and
redeploys the site automatically every time you push to `main`.

1. **Create a new GitHub repository** (public, since GitHub Pages on the free plan
   needs a public repo — unless you have GitHub Pro/Team/Enterprise).

2. **Push this project to it:**
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

3. **Enable GitHub Pages with Actions as the source:**
   - Go to your repo on GitHub → **Settings → Pages**
   - Under "Build and deployment" → **Source**, select **GitHub Actions**
   - That's it — no branch to pick manually.

4. **Wait for the workflow to run:**
   - Go to the **Actions** tab in your repo → you'll see "Deploy to GitHub Pages" running.
   - Once it finishes (green check), your site is live at:
     ```
     https://<your-username>.github.io/<your-repo-name>/
     ```
   - The workflow automatically sets the correct `--base-href` using your repo name,
     so you don't need to edit anything for this to work.

5. **Every future `git push` to `main` redeploys automatically.**

### Option B — Manual, via `angular-cli-ghpages`

If you'd rather deploy by hand from your terminal:

1. Open `package.json` and replace `PORTFOLIO_REPO_NAME` in the `build:prod` script
   with your actual GitHub repo name:
   ```json
   "build:prod": "ng build --configuration production --base-href /your-repo-name/",
   ```

2. Run:
   ```bash
   npm install
   npm run deploy
   ```
   This builds the site and pushes the `dist/portfolio/browser` folder to a `gh-pages`
   branch using the free [`angular-cli-ghpages`](https://www.npmjs.com/package/angular-cli-ghpages) package.

3. In your repo on GitHub → **Settings → Pages** → set **Source** to the `gh-pages` branch.

4. Your site will be live at `https://<your-username>.github.io/<your-repo-name>/`.

> **Using a custom domain instead of github.io?** Add a `CNAME` file with your domain
> inside `src/` (it'll be copied into the build output), and point your domain's DNS
> at GitHub Pages per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

---

## 7. Notes on "free-only" choices made in this project

- **No paid UI kit** — layout and components are hand-written CSS/SCSS.
- **Google Fonts** (Space Grotesk, Inter, JetBrains Mono) are free and loaded via
  a public, no-key-required CDN link in `index.html`.
- **No backend / no database** — the contact page uses direct `mailto:`, `wa.me`,
  and LinkedIn links, so there's nothing to host or pay for beyond static files.
- **GitHub Pages** hosting and **GitHub Actions** minutes are free for public repos.

---

## 8. Troubleshooting

- **Blank page after deploying to GitHub Pages** — almost always a `base-href`
  mismatch. Confirm it matches your repo name exactly (case-sensitive), including
  leading/trailing slashes: `/your-repo-name/`.
- **Images not showing after replacing them** — hard-refresh the browser
  (Cmd+Shift+R) to bypass the cache, and double check the file name matches exactly
  what's in `assets.config.ts` (file names are case-sensitive on GitHub Pages).
- **`ng: command not found`** — run `npm install` first; use `npx ng serve` if the
  global Angular CLI isn't installed on your machine.
