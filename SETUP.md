# Development Setup Guide

This guide is for developers who want to run and modify the portfolio locally.

## Prerequisites

- **Node.js** 16+ and npm/yarn installed
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
npm start
```

Opens at `http://localhost:3000`

## Available Scripts

```bash
npm start          # Development server at http://localhost:3000
npm run build      # Production build
npm test           # Run tests
```

## Environment Variables

### Client (.env)

The contact form uses EmailJS for email delivery. Set these optional environment variables in `client/app/.env`:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

If these are not configured, the contact form will show a fallback message with a direct email link.

## Build for Production

```bash
cd client/app
npm run build
```

Generates optimized build in `build/` directory.

## Troubleshooting

**Port already in use?**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or on Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Dependencies issues?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**CSS/Assets not loading?**
```bash
# Clear browser cache
Cmd+Shift+R (Mac)
Ctrl+Shift+R (Windows/Linux)
```

## Project Structure Details

### Frontend Components
- `Hero` - Animated introduction
- `About` - Professional summary with highlights
- `Experience` - Expandable job timeline
- `Projects` - Featured projects showcase
- `Skills` - Organized skill categories
- `Education` - Academic background
- `Contact` - Email contact form
- `Footer` - Site footer with social links

### Backend Endpoints
- Email submission via Nodemailer
- CORS-enabled for cross-origin requests
- Environment-based configuration

## Deployment

**Frontend (Vercel):**
1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variables (REACT_APP_EMAILJS_*)
4. Deploy with `npm run build` (automatic)

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
