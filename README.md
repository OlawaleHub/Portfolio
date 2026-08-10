# Portfolio — Web & Mobile Developer

A mind-blowing, production-ready portfolio built with **Next.js (App Router)**, **Tailwind CSS**, and **lucide-react**. Fully responsive, animated, glassmorphic, and deployable to Vercel with zero config.

## ✨ Features

- Animated aurora/gradient-mesh background
- Scroll-reveal animations (IntersectionObserver, zero deps)
- Typewriter role-rotator in the hero
- Animated stat counters
- Glassmorphic cards with hover glow
- Project cards with hover overlay + tags
- Alternating experience timeline
- Working contact form (mailto fallback — swap for a Server Action)
- Custom scrollbar, gradient text, 404 page
- Mobile nav, sticky blur-on-scroll navbar
- SEO metadata + OpenGraph + Twitter cards

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📝 Customize

Everything lives in **`src/lib/data.js`** — your name, bio, roles, stats, skills, projects, experience, services, and socials. Edit that one file and the whole site updates.

## 🌐 Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Deploy — **no `vercel.json` needed**, Vercel detects Next.js automatically.

## 🧱 Structure

```
src/
├── app/            # layout, page, globals.css, not-found
├── components/     # Navbar, Hero, About, Services, Projects, Skills, Experience, Contact, Footer
└── lib/            # data.js (content), useReveal.js (scroll anim hook)
```

Built with Next.js & Tailwind CSS.
