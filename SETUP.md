# Development Setup Guide

This guide is for developers who want to run and modify the portfolio locally.

## Prerequisites

- **Node.js** 18+ and npm/yarn installed
- **Git** for version control
- A terminal/command line

## Quick Start

### 1. Clone & Install

```bash
cd portfolio
cd client/app
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Opens at `http://localhost:3000` with HMR (Hot Module Replacement)

## Available Scripts

```bash
npm run dev          # Development server at http://localhost:3000
npm run build        # Production build
npm run preview      # Preview production build locally at http://localhost:4173
```

## Environment Variables

### Client (.env)

The contact form uses EmailJS for email delivery. Set these optional environment variables in `client/app/.env`:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

If these are not configured, the contact form will show a fallback message with a direct email link.

## Build for Production

```bash
cd client/app
npm run build
npm run preview      # Test the production build
```

Generates optimized build in `dist/` directory.

## Troubleshooting

**Port already in use?**
```bash
# Kill process on port 3000 (dev) or 4173 (preview)
lsof -ti:3000 | xargs kill -9
lsof -ti:4173 | xargs kill -9

# Or on Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Dependencies issues?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**HMR (Hot Module Replacement) not working?**
```bash
# Restart the dev server
npm run dev
```

## Project Structure Details

### Frontend Components
- `Hero` - Animated introduction with typewriter effect
- `About` - Professional summary with highlights
- `Experience` - Expandable job timeline
- `Projects` - Featured projects showcase
- `Skills` - Organized skill categories
- `Education` - Academic background
- `Contact` - EmailJS contact form
- `Footer` - Site footer with social links

### Build System
- **Build Tool:** Vite (fast ESM-based bundler)
- **React:** 19.x with TypeScript 5.x
- **Styling:** CSS Modules + Framer Motion
- **Animations:** Respects prefers-reduced-motion

## Deployment

**Frontend (Vercel):**
1. Push to GitHub
2. Connect repository to Vercel
3. **Environment variables** (VITE_EMAILJS_*):
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. **Framework preset:** Vite
5. **Output directory:** `dist`
6. Deploy with `npm run build` (automatic)

## Contributing

To modify or enhance the portfolio:

1. Create a feature branch
2. Make changes
3. Test locally
4. Commit with clear messages
5. Push and create pull request

## Notes for Developers

- Portfolio content lives in `src/data/` (jobs.ts, projects.ts, skills.ts, education.ts, highlights.ts, etc.)
- Components in `src/components/sections/` use data from `src/data/`
- Custom hooks in `src/hooks/` (useTypewriter, useActiveSection, useContactForm, usePrefersReducedMotion)
- UI components in `src/components/ui/` (Icon, SectionHeader, Tag, Card)
- Motion utilities in `src/lib/motion.ts` for consistent Framer Motion variants
- Contact form uses EmailJS service wrapper in `src/services/contact.ts`
- Resume PDF: `client/app/public/Pallavi_Maralla_Satish_Resume.pdf`
- Styling uses CSS Modules and CSS-in-JS (Framer Motion)
- Dark theme using CSS variables in `src/index.css`

---

For more details, see README.md
