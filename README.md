# APICon Tanzania 2026

Official website for **APICon Tanzania 2026** — a community-driven conference focused on API development, API security, DevSecOps, AI agents, Model Context Protocol (MCP), and the API Marketplace & Innovation Hub.

**Live site:** [https://apicon.or.tz](https://apicon.or.tz)

**Event date:** Saturday, 21 November 2026  
**Location:** Dar es Salaam, Tanzania

---

## About

APICon Tanzania brings together developers, cybersecurity professionals, startups, technology companies, students, and API providers to learn, showcase, discover, and secure the APIs powering modern digital systems.

This repository contains the source code for the public conference website, including the home page and the team page.

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| UI | React 19 |
| Language | TypeScript |
| Styling | Legacy CSS (`public/css/style.css`), Bootstrap 5, Animate.css, Font Awesome, Lineicons |
| Tooling | ESLint, React Compiler, Turbopack (dev) |

The site was migrated from a static HTML site to Next.js while preserving the original design and interactions.

---

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — conference overview, topics, marketplace, partners, FAQ, and contact |
| `/team` | Team — organizers and community leads behind APICon Tanzania |

Legacy static URLs are redirected automatically:

- `/index.html` → `/`
- `/team.html` → `/team`

---

## Project Structure

```text
apicon-website/
├── app/
│   ├── layout.tsx          # Root layout, metadata, global assets
│   ├── page.tsx            # Home page
│   ├── globals.css         # Minimal global overrides
│   └── team/
│       └── page.tsx        # Team page
├── components/
│   ├── legacy-page.tsx     # Renders migrated HTML markup
│   ├── structured-data.tsx # JSON-LD schema injection
│   └── use-legacy-interactions.ts  # Theme, nav, FAQ, scroll, and client routing
├── lib/
│   ├── legacy-content.ts   # Home and team HTML content
│   └── structured-data.ts  # SEO structured data
├── public/
│   ├── assets/images/      # Logos, hero images, team photos, OG image
│   ├── css/style.css       # Main site stylesheet
│   ├── robots.txt
│   ├── sitemap.xml
│   └── llms.txt
└── next.config.mjs          # Redirects and Next.js configuration
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
git clone <repository-url>
cd apicon-website
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## Features

- **SEO-ready** — metadata, Open Graph, Twitter cards, canonical URLs, and JSON-LD structured data
- **Dark / light theme** — persisted in `localStorage`, applied before first paint
- **Client-side navigation** — internal links use the Next.js App Router (no full page reloads)
- **Accessible interactions** — mobile nav, FAQ accordion, partner tabs, scroll progress, and back-to-top
- **Static prerendering** — home and team pages are statically generated at build time

---

## Deployment

No environment variables are required for the public site.

### Vercel (recommended)

1. Connect the repository to [Vercel](https://vercel.com)
2. Set the production domain to `apicon.or.tz`
3. Deploy from the `main` branch

### Hostinger (Node.js Web App)

Hostinger’s build servers run an older Linux (glibc), so this project uses `next.config.mjs` (plain JavaScript) and the SWC WASM fallback instead of the native SWC binary.

In **hPanel → Websites → Node.js Web App**, use:

| Setting | Value |
| --- | --- |
| Node.js version | **20.x** |
| Install command | `npm install` |
| Build command | `npm run build` |
| Start command | `npm run start` |
| App port | Use the port Hostinger assigns (usually via `PORT`) |

Push these changes, then redeploy. You may see a warning about `@next/swc-linux-x64-gnu` and GLIBC — that is expected; Next.js falls back to WASM and the build should continue.

If the build still fails on Hostinger, build locally and upload the output instead:

```bash
npm install
npm run build
```

Then upload the `.next` folder, `public/`, `package.json`, and `package-lock.json`, and run `npm install --omit=dev && npm start` on the server.

### Notes

- The ESLint deprecation warning during `npm install` is harmless and does not block deployment.
- Do **not** use `npm install --no-optional` — Next.js needs optional SWC packages for Linux builds.

---

## Contact

| Purpose | Email |
| --- | --- |
| General support | [support@apicon.or.tz](mailto:support@apicon.or.tz) |
| Partnerships & exhibitors | [partnerships@apicon.or.tz](mailto:partnerships@apicon.or.tz) |
| Speaking | [speakers@apicon.or.tz](mailto:speakers@apicon.or.tz) |

**Phone:** +255 745 289 098

---

## Community

Built by the **APICon Tanzania Community**.

- [LinkedIn](https://www.linkedin.com/company/apicontz)
- [Instagram](https://www.instagram.com/apicontz)
- [X](https://www.x.com/apicontz)

---

## License

© 2026 APICon Tanzania. All rights reserved.
