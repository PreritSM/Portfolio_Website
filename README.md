# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
Personal_Website/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Pages deployment
├── public/
│   └── favicon.svg
├── src/
│   ├── components/           # React components
│   │   ├── About.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Icons.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── data/
│   │   └── portfolio.ts      # ⭐ EDIT THIS FILE TO UPDATE CONTENT
│   ├── styles/
│   │   └── globals.css
│   ├── types/
│   │   └── portfolio.ts
│   ├── utils/
│   │   └── scrollToId.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── vite.config.ts
```

## ✏️ Customization

### Update Your Information

All content is centralized in **`src/data/portfolio.ts`**. Edit this single file to update:

- **Name & Bio**: Your introduction
- **Social Links**: LinkedIn, GitHub, Twitter, etc.
- **Skills**: Technical skills with percentages
- **Tools**: Tools & platforms you use
- **Certifications**: Professional certifications
- **Projects**: Your portfolio projects
- **Experience**: Work experience
- **Education**: Academic background
- **Contact**: Contact information

### Add Profile Image

Replace the placeholder by:
1. Add your image to `public/profile.jpg`
2. Update `profileImage` in `portfolio.ts`

### Add Project Images

1. Add images to `public/projects/`
2. Update the `image` field in each project

## 🎨 Styling

The site uses Tailwind CSS with a custom dark theme. Key colors:
- **Primary**: Blue (#3b82f6)
- **Background**: Dark slate (#0f172a)
- **Text**: Light gray shades

To customize colors, edit `tailwind.config.js`.

## 🚀 Deployment

### GitHub Pages (Automatic)

1. Push to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Enable GitHub Pages in Settings → Pages → Source: GitHub Actions

### Manual Deployment

```bash
npm run build
# Deploy the `dist` folder to any static host
```

## 📜 License

MIT License - Feel free to use this template for your own portfolio!
