# 🔐 ALEX CIPHER — Cyberpunk Portfolio

A futuristic, dark-themed personal portfolio for developers and cybersecurity enthusiasts. Built with Next.js 14, Tailwind CSS, and Framer Motion.

---

## ✨ Features

- **Cyberpunk dark theme** with glassmorphism + neon glow effects
- **Animated custom cursor** with follower ring
- **Particle network** canvas in the hero section
- **Glitch text effects** on the name/logo
- **Typing role rotator** in the hero
- **Fullscreen loading screen** with progress bar
- **Sticky animated navbar** with active section tracking
- **Smooth scroll** navigation
- **Project filter** by category (All / Security / Fullstack)
- **Animated timeline** for experience
- **Skill progress bars** with scroll-triggered animation
- **Contact form** wired to EmailJS (or swap for any backend)
- **Resume download** button
- **Social links** in footer
- **Fully responsive** — mobile-first
- **SEO optimized** with Open Graph metadata

---

## 📁 Folder Structure

```
src/
├── app/
│   ├── globals.css         # Global styles, animations, CSS vars
│   ├── layout.tsx          # Root layout + metadata
│   └── page.tsx            # Main page entry
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky nav with smooth scroll + mobile menu
│   │   └── Footer.tsx      # Footer with social links
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx       # Particle canvas, glitch name, typing effect
│   │   ├── AboutSection.tsx      # Bio, terminal snippet, progress bars
│   │   ├── SkillsSection.tsx     # Categorized skill bars + badge cloud
│   │   ├── ProjectsSection.tsx   # Filtered card grid with hover effects
│   │   ├── ExperienceSection.tsx # Animated vertical timeline
│   │   └── ContactSection.tsx    # Contact form + info panel + resume download
│   │
│   └── ui/
│       ├── CustomCursor.tsx    # Dot + ring custom cursor
│       ├── LoadingScreen.tsx   # Boot sequence loading animation
│       └── SectionWrapper.tsx  # Reusable fade-in wrapper
│
├── hooks/
│   ├── useScrollSpy.ts       # Active section tracking
│   └── useMousePosition.ts   # Mouse position tracker
│
└── lib/
    └── utils.ts              # cn() helper (clsx + tailwind-merge)
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔧 Configuration & Customization

### Personal Info
Edit the following files to replace placeholder content with your own:

| File | What to change |
|------|---------------|
| `src/app/layout.tsx` | Page title, description, OG tags |
| `src/components/sections/HeroSection.tsx` | Name, stats (years exp, projects, CVEs) |
| `src/components/sections/AboutSection.tsx` | Bio paragraphs, terminal text |
| `src/components/sections/ProjectsSection.tsx` | Project cards (title, desc, tech, links) |
| `src/components/sections/ExperienceSection.tsx` | Job history |
| `src/components/sections/SkillsSection.tsx` | Skill names and levels |
| `src/components/sections/ContactSection.tsx` | Email, location, social links |
| `src/components/layout/Footer.tsx` | Social media links |

### Resume
Place your resume PDF at:
```
public/resume.pdf
```

### EmailJS Setup (Contact Form)

1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. Create a **service** (Gmail, Outlook, etc.)
3. Create an **email template** with variables: `{{name}}`, `{{email}}`, `{{message}}`
4. Get your **Service ID**, **Template ID**, and **Public Key**
5. Install EmailJS:
   ```bash
   npm install @emailjs/browser
   ```
6. Update `ContactSection.tsx`:
   ```typescript
   import emailjs from "@emailjs/browser";

   // Inside handleSubmit, replace the simulation with:
   await emailjs.send(
     "YOUR_SERVICE_ID",
     "YOUR_TEMPLATE_ID",
     { name: form.name, email: form.email, message: form.message },
     "YOUR_PUBLIC_KEY"
   );
   ```

### Color Customization
Edit CSS variables in `src/app/globals.css`:
```css
:root {
  --neon-cyan:   #00f5ff;  /* Primary accent */
  --neon-green:  #39ff14;  /* Success / available badge */
  --neon-purple: #bf00ff;  /* Secondary accent */
  --neon-pink:   #ff006e;  /* Glitch effect */
  --dark-950:    #020408;  /* Page background */
  --dark-900:    #060d14;  /* Card background */
  --dark-800:    #0a1628;  /* Border/glass tint */
}
```

---

## 📦 Build for Production

```bash
npm run build
npm run start
```

---

## 🌐 Deploy to Vercel

### Option A — Vercel CLI (fastest)

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Next.js.

### Option B — GitHub + Vercel Dashboard

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Leave all settings as default (Vercel auto-detects Next.js)
5. Click **Deploy**

Your site is live in ~2 minutes. Vercel provides:
- Automatic HTTPS
- Global CDN
- Preview deployments for every branch
- Custom domain support

### Option C — Environment Variables on Vercel

If using EmailJS or any API keys, add them in:
**Vercel Dashboard → Project → Settings → Environment Variables**

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Then reference in code as `process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID`.

---

## 🧩 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Particles | Canvas API (custom) |
| Icons | Lucide React |
| Fonts | Orbitron, Share Tech Mono, Rajdhani (Google Fonts) |
| Contact | EmailJS |
| Deployment | Vercel |

---

## 📄 License

MIT — feel free to use, fork, and customize.

---

*Built with obsession by a developer who writes code and breaks things — ethically.*
