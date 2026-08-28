# CodeCraft Computer Institute — Website

A fully responsive, static marketing website for a computer coaching institute, built with **React (functional components + hooks)**, **React Router**, and **Tailwind CSS**, styled with a **Neumorphism (soft UI)** design language.

## ✨ Pages

| Page | Route | Notes |
|---|---|---|
| Landing | `/` | Logo header, auto-sliding achievements carousel, auto-sliding "6 popular courses" carousel, branch locations (click map → Google Maps), CTA, footer |
| Courses | `/courses` | All courses in a searchable, filterable grid. Data-driven from `src/data/courses.json` |
| Course Detail | `/courses/:courseId` | Name, image, price, description, syllabus, "Pay Now" → QR + UPI ID + red warning message |
| About Us | `/about` | Story, mission/vision, images, values |
| Contact Us | `/contact` | Phone, email, WhatsApp, social links, branch maps |
| Photo Gallery | `/gallery` | Masonry gallery with lightbox |
| 404 | `*` | Friendly not-found page |

Header (with all page links) and Footer (page links + contact details) are shared across every page via `src/components/Layout.jsx`.

## 🧱 Tech Stack

- **React 18** — functional components & hooks only (no class components)
- **React Router v6** — client-side routing
- **Tailwind CSS 3** — utility classes only, no MUI, with a custom Neumorphism token set (`tailwind.config.js`)
- **Vite** — build tool / dev server
- 100% static — no backend required. Course/branch/contact data lives in editable JSON files.

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → open http://localhost:5173

# 3. Build for production
npm run build
# → outputs to /dist, upload that folder to any static host
# (Netlify, Vercel, GitHub Pages, cPanel, S3, etc.)

# 4. Preview the production build locally
npm run preview
```

## ✏️ How to edit content (no code changes needed)

All editable business content lives in two JSON files under `src/data/`:

### 1. `src/data/courses.json` — your course catalog

Add, remove, or edit a course by editing this array. Each course looks like:

```json
{
  "id": "web-dev-fundamentals",       // used in the URL: /courses/web-dev-fundamentals
  "name": "Web Development Fundamentals",
  "category": "Web Development",
  "shortDescription": "Short one-liner shown on cards.",
  "description": "Longer paragraph shown on the course detail page.",
  "price": 8999,
  "originalPrice": 11999,             // optional, shows a strikethrough + % off badge
  "duration": "3 Months",
  "level": "Beginner",
  "image": "/images/courses/web-dev-fundamentals.svg",
  "popular": true,                    // true = eligible for the landing page's "Popular Courses" slider (top 6 are shown)
  "syllabus": ["Topic 1", "Topic 2", "..."]
}
```

To use your **own photos** instead of the generated placeholder images, just drop a `.jpg`/`.png`/`.webp` into `public/images/courses/` and update the `image` path in the JSON (e.g. `"/images/courses/web-dev-fundamentals.jpg"`).

### 2. `src/data/config.json` — everything else

This single file drives the rest of the site:

- **`branches`** — your branch list. Each branch needs `lat`/`lng` (latitude/longitude). This is what powers the "click the map to open Google Maps" feature on the Landing and Contact pages. To get coordinates for a new branch: open Google Maps → right-click the exact spot → click the lat/lng numbers to copy them.
- **`contact`** — phone numbers, emails, WhatsApp number, social media links (shown in the header, footer and Contact page).
- **`payment`** — `upiId`, `payeeName`, `qrImage` path, and the red warning message shown on the Course Detail page's payment box. Replace `public/images/payment-qr.svg` with your real UPI QR code image (keep the same filename, or update the path in `config.json`).
- **`achievements`** — cards shown in the landing page's auto-sliding achievements carousel.
- **`aboutUs`** — heading, story, mission, vision, images and core values for the About Us page.
- **`gallery`** — photo gallery images + captions.

After editing either JSON file, just save — Vite's dev server hot-reloads automatically, and a production build (`npm run build`) will pick up the changes.

## 🎨 Design system (Neumorphism)

All neumorphic shadows, radii, colors and gradients are defined centrally in `tailwind.config.js` under `theme.extend` (`boxShadow`, `borderRadius`, `colors.brand`, `colors.teal`, `backgroundImage`). Reusable primitives:

- `src/components/NeuCard.jsx` — soft-UI card (raised or pressed)
- `src/components/NeuButton.jsx` — soft-UI button (default / primary / teal / ghost variants)
- `src/components/Carousel.jsx` — generic auto-sliding, swipeable carousel (used for achievements & popular courses)

Fonts: **Space Grotesk** (headings) + **Inter** (body), loaded from Google Fonts in `index.html`.

## 📱 Responsiveness

Every page is built mobile-first with Tailwind's `sm:` / `lg:` breakpoints — tested down to small phones, tablets, and up to large desktop screens. The header collapses into a slide-down menu on mobile/tablet; carousels and the gallery reflow from 1 → 2 → 3 columns.

## 🖼️ Placeholder images

All images shipped in `public/images/` are generated SVG placeholders (course thumbnails, achievement icons, about photos, gallery shots, logo, and a decorative UPI QR code) so the site looks complete out of the box. Swap them out with your real photography/logo/QR whenever ready — just keep the same file paths, or update the paths in the JSON files.

## 📂 Project structure

```
computer-coaching-institute/
├── public/
│   └── images/                # logo, course/achievement/about/gallery images, payment QR
├── src/
│   ├── components/            # Header, Footer, Layout, NeuCard, NeuButton, Carousel, CourseCard
│   ├── data/
│   │   ├── config.json        # branches, contact, payment, achievements, about, gallery
│   │   └── courses.json       # course catalog
│   ├── pages/                 # Landing, Courses, CourseDetail, AboutUs, ContactUs, Gallery, NotFound
│   ├── App.jsx                 # routes
│   ├── main.jsx                 # entry point
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## 🌐 Deploying

The build output in `/dist` after `npm run build` is a plain static site — you can drag-and-drop the `dist` folder onto Netlify/Vercel, or upload it to any web host. If you deploy to a sub-path (not domain root) or a static host without SPA rewrite support (e.g. plain Apache without rules), make sure to configure a fallback to `index.html` for client-side routing to work on direct/deep links (most modern hosts do this automatically for SPAs).
