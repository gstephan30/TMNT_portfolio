# TMNT Portfolio Webpage

This repository contains a portfolio webpage about the Teenage Mutant Ninja Turtles (TMNT) from the 1980-1990 era, featuring Konami-style 8-bit pixel art inspired by classic video games.

**Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Repository Status

This repository contains a basic working TMNT portfolio webpage. The following files are already set up:

**Existing Files:**
- `index.html` - Main webpage with 8-bit TMNT styling
- `package.json` - Node.js project configuration with npm scripts
- `vite.config.js` - Vite build tool configuration
- Basic project structure: `src/`, `assets/`, `docs/` directories

**Ready to Use:**
- All development servers work out of the box
- Build system is configured and tested
- 8-bit retro styling is implemented

## Working Effectively

### Prerequisites and Environment Setup
- Ensure Node.js v20+ is installed: `node --version` (should show v20.19.4 or higher)
- Ensure npm v10+ is installed: `npm --version` (should show v10.8.2 or higher)
- Git v2.51+ is available: `git --version`
- Python 3.12+ is available for simple HTTP serving: `python3 --version`

### Initial Project Setup
When starting development for the first time:

1. **Initialize the project structure:**
   ```bash
   npm init -y
   ```
   - Takes: < 5 seconds
   - Creates package.json with basic configuration

2. **Install development dependencies:**
   ```bash
   npm install --save-dev vite @vitejs/plugin-react
   ```
   - Takes: 10-15 seconds. NEVER CANCEL. Set timeout to 30+ seconds.
   - Installs modern build tooling for fast development

3. **Install runtime dependencies (if needed):**
   ```bash
   npm install express
   ```
   - Takes: 1-5 seconds. Set timeout to 15+ seconds.

4. **Create basic project structure:**
   ```bash
   mkdir -p src assets docs
   touch index.html src/main.js src/style.css
   ```

### Development Workflow

#### Quick Start - Simple HTML Development
For rapid prototyping and basic development:

1. **Start simple development server:**
   ```bash
   npm run serve
   # OR manually: python3 -m http.server 8000
   ```
   - Takes: < 2 seconds to start
   - Access at: http://localhost:8000
   - **Manual validation**: Open browser and verify page loads with retro styling

#### Modern Development - Vite Build System (Recommended)
For modern development with hot reloading:

1. **Start Vite development server:**
   ```bash
   npm run dev
   # OR manually: npx vite
   ```
   - Takes: < 5 seconds to start. Set timeout to 15+ seconds.
   - Access at: http://localhost:3000 (configured port)
   - **Manual validation**: Verify hot reload works by editing HTML/CSS files

2. **Build for production:**
   ```bash
   npm run build
   # OR manually: npx vite build
   ```
   - Takes: < 5 seconds. NEVER CANCEL. Set timeout to 30+ seconds.
   - Creates dist/ directory with optimized assets

3. **Preview production build:**
   ```bash
   npm run preview
   # OR manually: npx vite preview
   ```
   - Takes: < 3 seconds to start
   - Preview built app before deployment

### Project Structure
Expected directory layout:
```
TMNT_portfolio/
├── README.md
├── .github/
│   └── copilot-instructions.md
├── package.json
├── vite.config.js (if using Vite)
├── index.html
├── src/
│   ├── main.js
│   ├── style.css
│   └── components/
├── assets/
│   ├── images/
│   ├── sprites/
│   └── audio/
└── docs/
```

## Testing and Validation

### Manual Validation Requirements
**CRITICAL**: After making any changes, always run through these validation scenarios:

1. **Static file serving test:**
   ```bash
   python3 -m http.server 8000
   ```
   - Open http://localhost:8000
   - Verify page loads correctly
   - Check browser console for errors
   - Verify 8-bit styling is applied

2. **Build system test (if using Vite):**
   ```bash
   npx vite build && npx vite preview
   ```
   - Takes: 10-15 seconds total. NEVER CANCEL. Set timeout to 45+ seconds.
   - Verify production build works
   - Test all interactive elements

3. **Cross-browser compatibility:**
   - Test in Chrome/Edge (primary)
   - Verify pixel art rendering works correctly
   - Check responsive design on different screen sizes

### Performance Validation
- **Image optimization**: Ensure pixel art images use PNG format and are properly optimized
- **Asset loading**: Verify all images, fonts, and audio files load correctly
- **Mobile responsiveness**: Test on mobile viewport sizes

## Common Tasks and Commands

### Asset Management
- **Images**: Place in `assets/images/` directory
- **Sprites**: Use `assets/sprites/` for character animations
- **Audio**: Use `assets/audio/` for 8-bit sound effects
- **Optimization**: Use tools like `imagemin` for asset compression

### Styling Guidelines
- **Color palette**: Stick to authentic 8-bit colors
- **Typography**: Use pixel fonts or monospace fonts
- **Layout**: CSS Grid or Flexbox for responsive layouts
- **Animations**: CSS animations for retro game-like effects

### Git Workflow
```bash
git add .
git commit -m "descriptive message"
git push origin [branch-name]
```
- Always commit working changes frequently
- Use descriptive commit messages
- Test builds before pushing

## Troubleshooting

### Common Issues
1. **Port conflicts**: If port 8000 or 3000 is in use, try alternative ports
2. **Node.js version**: Ensure using Node.js v20+
3. **Cache issues**: Clear browser cache and npm cache: `npm cache clean --force`
4. **Build failures**: Delete node_modules and reinstall: `rm -rf node_modules && npm install`

### Development Server Issues
- **Python server**: Kill with `Ctrl+C` or `pkill -f "python3 -m http.server"`
- **Vite server**: Kill with `Ctrl+C` or `pkill -f vite`
- **Port cleanup**: Use `lsof -ti:PORT | xargs kill -9` to force-kill processes

## Timing Expectations
- **npm init**: < 5 seconds
- **npm install basic deps**: 1-5 seconds
- **npm install dev deps**: 2-15 seconds. NEVER CANCEL.
- **npm run dev**: < 5 seconds to start
- **npm run build**: < 5 seconds. NEVER CANCEL.
- **npm run preview**: < 3 seconds to start
- **Python server start**: < 2 seconds

## Key Files and Locations
- **Main entry**: `index.html` (root-level)
- **Styles**: `src/style.css` or `src/styles/`
- **JavaScript**: `src/main.js` or `src/app.js`
- **Assets**: `assets/` directory
- **Build output**: `dist/` (generated by Vite)
- **Config**: `package.json`, `vite.config.js`

Always test your changes by running the development server and manually verifying functionality before committing.