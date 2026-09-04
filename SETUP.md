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
npm install --workspaces
```

### 2. Start Client

```bash
cd client/app
npm install
npm start
```

Opens at `http://localhost:3000`

### 3. Start Server (Optional)

In a **new terminal**:

```bash
cd server/api
npm install
npm run dev
```

Runs on `http://localhost:5000`

## Available Scripts

### Client
```bash
npm start          # Development server
npm run build      # Production build
npm test           # Run tests
npm run eject      # Eject from Create React App (one-way operation)
```

### Server
```bash
npm run dev        # Development with auto-reload
npm start          # Production start
npm test           # Run tests
```

## Environment Variables

### Server (.env)

Copy `.env.example` to `.env` and configure:

```bash
cp server/api/.env.example server/api/.env
```

Edit `server/api/.env`:
```
PORT=5000
NODE_ENV=development
# Add other variables as needed
```

## Build for Production

### Client
```bash
cd client/app
npm run build
```

Generates optimized build in `build/` directory.

### Server
```bash
cd server/api
npm start
```

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

**Frontend (Vercel/Netlify):**
1. Push to GitHub
2. Connect repository to Vercel/Netlify
3. Deploy with `npm run build`

**Backend (Heroku/Railway/AWS):**
1. Configure environment variables
2. Deploy with `npm start`
3. Set `NODE_ENV=production`

## Contributing

To modify or enhance the portfolio:

1. Create a feature branch
2. Make changes
3. Test locally
4. Commit with clear messages
5. Push and create pull request

## Notes for Developers

- Portfolio content lives in component files (Projects.tsx, Experience.tsx, Skills.tsx, etc.)
- Resume PDF: `client/app/public/Pallavi_Maralla_Satish_Resume.pdf`
- Styling uses CSS modules and CSS-in-JS (Framer Motion)
- Backend uses Express.js with CORS middleware
- Dark theme using CSS variables

---

For more details, see README.md
