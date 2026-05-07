# Tejashwini Malge — Portfolio

A modern, AI-focused personal portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- Dark theme with glassmorphism cards
- Interactive particle background
- Typing animation in Hero
- Scroll-reveal animations (Framer Motion)
- Responsive for all screen sizes
- Sticky navbar with active section detection
- Gradient accents & glow effects
- Static export for Vercel deployment

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Syne (display) + DM Sans (body) + JetBrains Mono

## 📦 Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🌐 Deploying to Vercel

### Option 1: Vercel CLI (Recommended with GitHub Student Pack)
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Option 2: GitHub + Vercel (Auto-deploy on push)
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click Deploy
5. Done! Your site is live at `your-name.vercel.app`

### Customize your domain (GitHub Student Pack)
- GitHub Student Pack includes a free `.me` domain via Namecheap
- Get it at [education.github.com/pack](https://education.github.com/pack)
- Add your custom domain in Vercel > Project Settings > Domains

## 📝 Customization

Update these files with your real info:
- `src/components/sections/ContactSection.tsx` — email, LinkedIn, GitHub URLs
- `src/components/sections/ProjectsSection.tsx` — GitHub repo links & live demo URLs
- `src/components/sections/HeroSection.tsx` — social profile URLs
- `public/resume.pdf` — add your actual resume PDF

## 🧠 GitHub Student Pack Benefits to Use

| Benefit | How to Use |
|---------|-----------|
| **Vercel** | Free Pro plan for students — unlimited deployments |
| **Namecheap** | Free `.me` domain — `tejashwini.me` |
| **GitHub Pages** | Alternative static hosting |
| **MongoDB Atlas** | Free M0 cluster if you add a backend |
| **Notion** | Document your projects |

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Main page (section assembly)
│   └── globals.css         # Global styles + CSS vars
├── components/
│   ├── ui/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ParticleBackground.tsx
│   │   ├── SectionWrapper.tsx
│   │   └── SectionHeader.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── SkillsSection.tsx
│       ├── ProjectsSection.tsx
│       ├── ExperienceSection.tsx
│       ├── AchievementsSection.tsx
│       └── ContactSection.tsx
└── lib/
    └── utils.ts
```
