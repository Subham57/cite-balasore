# Deploying CITE Computer Institute to Netlify (Free Tier)

This guide walks you through publishing this website for free using **GitHub + Netlify**, then buying and connecting your own custom domain with free SSL.

Total cost: **₹0 for hosting** (Netlify free tier) + **~₹500–900/year** for a domain name.

---

## Part 1: Push the project to GitHub

Netlify auto-deploys your site whenever you push changes to GitHub — this also means editing `courses.json` or `config.json` later is easy: push the change, and the live site updates itself in ~1 minute.

### 1.1 Create a GitHub account
Go to [github.com](https://github.com) and sign up if you don't already have an account (it's free).

### 1.2 Create a new repository
1. Click the **+** icon (top-right) → **New repository**.
2. Name it something like `computer-coaching-institute`.
3. Set visibility to **Private** (recommended, so competitors can't easily copy your course pricing/content) or Public — either works with Netlify's free tier.
4. Do **not** initialize with a README (you already have one) — leave it empty.
5. Click **Create repository**.

### 1.3 Upload your project
GitHub will show you a page with commands. From inside your project folder (`computer-coaching-institute`), run:

```bash
git init
git add .
git commit -m "Initial commit - CITE website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/computer-coaching-institute.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username. If you don't have Git installed or aren't comfortable with the command line, you can instead:
1. Go to your new repo on GitHub.
2. Click **Add file → Upload files**.
3. Drag the entire project folder's contents in (everything except `node_modules` and `dist`, which don't need to be uploaded).
4. Click **Commit changes**.

> **Note:** Do not upload the `node_modules` folder — it's large and unnecessary. If a `.gitignore` file is present in the project, Git will skip it automatically when using the command-line method.

---

## Part 2: Deploy to Netlify (Free Tier)

### 2.1 Sign up
Go to [netlify.com](https://www.netlify.com) → **Sign up** → choose **Sign up with GitHub** (this makes connecting your repo one click).

### 2.2 Create a new site
1. On your Netlify dashboard, click **Add new site → Import an existing project**.
2. Choose **Deploy with GitHub**.
3. Authorize Netlify to access your GitHub account if prompted.
4. Select your `computer-coaching-institute` repository from the list.

### 2.3 Configure the build settings
Netlify usually auto-detects a Vite project, but confirm these values:

| Setting | Value |
|---|---|
| Base directory | *(leave blank)* |
| Build command | `npm run build` |
| Publish directory | `dist` |

### 2.4 Deploy
Click **Deploy site**. Netlify will install dependencies, run the build, and publish your site — this takes 1–2 minutes. You'll get a live URL like:

```
https://random-name-12345.netlify.app
```

Your site is now live and already has free SSL (the padlock) on that `.netlify.app` address. Next, let's put your own domain on it.

### 2.5 (Optional) Rename the Netlify subdomain
Go to **Site settings → General → Site details → Change site name** to pick something more memorable, e.g. `CITE-institute.netlify.app`, while you set up the custom domain.

### 2.6 Future updates
Any time you edit `src/data/courses.json` or `src/data/config.json` (or anything else) and push to GitHub (`git push`), Netlify automatically rebuilds and redeploys the live site — no manual steps needed.

---

## Part 3: Buy a Custom Domain

You can buy your domain from any registrar. Two solid, low-markup options:

- **Netlify Domains** (buy directly inside Netlify — simplest, auto-connects)
- **Cloudflare Registrar**, **Namecheap**, or **GoDaddy** (buy externally, then point it to Netlify — usually cheaper, especially for `.in` domains)

### Option A — Buy directly through Netlify (easiest)
1. In your site dashboard, go to **Domain management → Add a domain**.
2. Search for your desired domain, e.g. `CITEinstitute.com`.
3. Complete the purchase (card payment). Netlify auto-configures DNS and SSL for you — **skip to Part 4, you're basically done**.

### Option B — Buy externally (often cheaper, especially for `.in`)
1. Go to a registrar such as [Namecheap](https://www.namecheap.com), [GoDaddy](https://www.godaddy.com), or [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/).
2. Search for your desired domain name, e.g. `CITEinstitute.in` or `CITEinstitute.com`.
3. Add it to cart. **Decline/skip upsells** you don't need — hosting, email, paid SSL, site builder — Netlify already provides SSL for free.
4. Complete checkout and pay.
5. You now own the domain and can manage its DNS settings from that registrar's dashboard.

**Typical cost (as a guide — always check live pricing at checkout):**

| Domain type | First year | Renewal (from year 2) |
|---|---|---|
| `.in` | ₹400 – ₹700 | ₹500 – ₹900/year |
| `.co.in` | ₹300 – ₹600 | ₹500 – ₹800/year |
| `.com` | ₹500 – ₹900 | ₹900 – ₹1,300/year |

---

## Part 4: Connect Your Custom Domain to Netlify

*(Skip this section if you bought the domain directly through Netlify in Option A — it's already connected.)*

### 4.1 Add the domain in Netlify
1. In your Netlify site dashboard, go to **Domain management → Add a domain**.
2. Type your domain (e.g. `CITEinstitute.in`) and click **Verify**, then **Add domain**.
3. Netlify will show you the DNS records it needs — usually:
   - An **A record** pointing `@` (root domain) to Netlify's load balancer IP (e.g. `75.2.60.5`)
   - A **CNAME record** pointing `www` to your Netlify subdomain (e.g. `CITE-institute.netlify.app`)

   (Netlify shows the exact current values on this page — always copy them from there.)

### 4.2 Update DNS at your registrar
1. Log in to the registrar where you bought the domain (Namecheap, GoDaddy, Cloudflare, etc.).
2. Find the **DNS Management** or **DNS Settings** page for your domain.
3. Add/edit the records to match what Netlify showed you:
   - Type: `A`, Host: `@`, Value: *(Netlify's IP address)*
   - Type: `CNAME`, Host: `www`, Value: *(your-site-name.netlify.app)*
4. Save changes.

> Alternative (simpler, if your registrar supports it): instead of individual A/CNAME records, you can point your domain's **nameservers** to Netlify's nameservers, and Netlify manages all DNS for you. Netlify's domain settings page will show this option too.

### 4.3 Wait for DNS to propagate
This can take anywhere from a few minutes to a few hours (rarely up to 24–48 hours). You can check progress at [dnschecker.org](https://dnschecker.org) by entering your domain.

### 4.4 Set your primary domain
Back in Netlify's **Domain management**, click **Set as primary domain** next to your custom domain (e.g. `www.CITEinstitute.in`) so visitors are redirected there consistently.

---

## Part 5: Free SSL (HTTPS)

Once DNS has propagated:

1. Go to **Site settings → Domain management → HTTPS**.
2. Netlify automatically provisions a **free SSL certificate** (powered by Let's Encrypt) for your custom domain — usually within a few minutes of DNS resolving correctly.
3. Once issued, your site will be reachable securely at `https://CITEinstitute.in` with the padlock icon, and Netlify auto-renews the certificate forever — no action needed from you.

If it doesn't provision automatically after ~1 hour, click **Renew certificate** on that same page to trigger it manually.

---

## Quick Checklist

- [ ] Code pushed to a GitHub repository
- [ ] Site imported and deployed on Netlify (free tier)
- [ ] Domain purchased (Netlify, Namecheap, GoDaddy, or Cloudflare)
- [ ] DNS records (A + CNAME, or nameservers) pointed to Netlify
- [ ] Custom domain added and set as primary in Netlify
- [ ] HTTPS/SSL certificate active (automatic, free, auto-renewing)

Once all boxes are checked, your site is live at your own domain, fully secured, and will auto-update every time you push changes to GitHub — all for free aside from the yearly domain renewal.
