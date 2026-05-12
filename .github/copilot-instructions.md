# CV Showcase Website - Project Instructions

This is a React-based CV showcase website built with Vite for fast performance and excellent developer experience.

## Project Overview

A modern, component-based CV/resume website with the following features:
- Professional header with name and title
- Work experience section with highlights
- Skills organized by category
- Education section
- Contact information and links
- Responsive design with gradient styling
- Fast development with Vite HMR

## Technology Stack
- React 18
- Vite for fast builds
- CSS3 with responsive design
- Component-based architecture

## Project Structure
```
src/
├── components/
│   ├── Header.jsx & Header.css
│   ├── Experience.jsx & Experience.css
│   ├── Skills.jsx & Skills.css
│   ├── Education.jsx & Education.css
│   ├── Contact.jsx & Contact.css
├── App.jsx & App.css
├── main.jsx
└── index.css
```

## Getting Started

### Development Server
Run `npm run dev` to start the development server at http://localhost:5173

The development server includes:
- Hot Module Replacement (HMR) for instant updates
- Fast refresh on file changes
- No page reload needed for most changes

### Build for Production
Run `npm run build` to create an optimized production build in the `dist/` folder

### Deployment
The `dist/` folder can be deployed to:
- Vercel
- Netlify  
- GitHub Pages
- Traditional web hosting

## Customization Guide

### Update Your Information
Each section can be customized by editing the corresponding component:

1. **Header** - `src/components/Header.jsx`
   - Your name
   - Professional title
   - Professional summary

2. **Experience** - `src/components/Experience.jsx`
   - Job positions (add/remove as needed)
   - Company names and dates
   - Key achievements and highlights

3. **Skills** - `src/components/Skills.jsx`
   - Skill categories (e.g., Technical, Professional, Tools)
   - Individual skills in each category

4. **Education** - `src/components/Education.jsx`
   - Degrees and certifications
   - School/university names
   - Graduation years

5. **Contact** - `src/components/Contact.jsx`
   - Email address
   - LinkedIn profile
   - GitHub profile
   - Phone number

### Styling
- Each component has its own CSS file for easy customization
- Main color scheme: Purple gradient (#667eea to #764ba2)
- Modify colors, fonts, and spacing in individual component CSS files
- Global styles in `src/index.css` and `src/App.css`

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build

## Notes
- The project uses Vite's React plugin with Oxc for fast transformation
- All components are functional components with hooks
- CSS is scoped to components via separate CSS files
- The design is mobile-responsive
