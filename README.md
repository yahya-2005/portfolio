# Yahya Laadam - Portfolio Website

A world-class portfolio website built with Next.js 16, React, TypeScript, and cutting-edge technologies. Showcasing a full-stack developer and UI/UX designer from Casablanca, Morocco.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion, GSAP
- **Smooth Scrolling**: Lenis
- **3D Background**: Unicorn Studio
- **Icons**: Lucide React
- **UI Components**: Custom + Shadcn UI utilities
- **Deployment**: Vercel-ready

## ✨ Features

### Core Sections
- **Hero Section** - Animated introduction with Unicorn Studio background and typing effect
- **About** - Personal bio, quick stats, and language proficiency
- **Skills** - Categorized technical skills with proficiency levels
- **Projects** - Featured projects with filtering by category
- **Services** - Service offerings with detailed features
- **Education** - Timeline of education and certifications
- **Contact** - Contact form with validation and social links
- **Navigation** - Sticky navbar with smooth scrolling

### Advanced Features
- ✅ Smooth scroll animations with Lenis
- ✅ GSAP timeline animations
- ✅ Framer Motion transitions
- ✅ Responsive design (mobile-first)
- ✅ Dark mode optimized
- ✅ SEO optimized metadata
- ✅ Loading screen with animations
- ✅ Glassmorphism design elements
- ✅ Gradient text and borders
- ✅ Scroll-triggered reveals
- ✅ Magnetic button effects

## 📋 Prerequisites

- Node.js 18+ or higher
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yahya-2005/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

4. Run development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page with sections
│   └── globals.css         # Global styles
├── components/
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Skills.tsx      # Skills section
│   │   ├── Projects.tsx    # Projects section
│   │   ├── Services.tsx    # Services section
│   │   ├── Education.tsx   # Education section
│   │   └── Contact.tsx     # Contact section
│   ├── ui/
│   │   └── TypingEffect.tsx # Typing animation
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer
│   ├── HeroBackground.tsx  # Unicorn Studio background
│   ├── SmoothScroll.tsx    # Lenis integration
│   └── LoadingScreen.tsx   # Loading animation
├── data/
│   └── portfolio.ts        # Portfolio content & data
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── package.json
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Customization

### Personal Information
Edit `data/portfolio.ts` to update:
- Personal information (name, email, location, etc.)
- Social links
- Education and certifications
- Skills and proficiency levels
- Projects and case studies
- Services offered

### Colors & Styling
- Tailwind configuration: `tailwind.config.js`
- Global styles: `app/globals.css`
- Theme colors: Emerald/Cyan accent colors (customizable)

### Content Sections
Each section is a reusable component in `components/sections/`:
- Modify component properties
- Add/remove sections
- Change animation timing and effects

## 📦 Build & Deployment

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel auto-deploys on push to main branch

```bash
# Or deploy using Vercel CLI
npm install -g vercel
vercel
```

## 🔧 Configuration

### Unicorn Studio Integration
- Project ID: `YDOiMnYpNLZWBOx4H6IL`
- Configured in: `components/HeroBackground.tsx`
- To change: Update projectId and regenerate

### SEO Metadata
Edit metadata in `app/layout.tsx`:
- Title
- Description
- Keywords
- OpenGraph tags
- Twitter cards

### Analytics (Optional)
Add your analytics in `app/layout.tsx`:
```tsx
// Google Analytics, Plausible, etc.
```

## 🚀 Performance Optimizations

- Image optimization with Next.js Image
- Code splitting and lazy loading
- Dynamic imports for heavy components
- CSS optimization with Tailwind
- Minimal JavaScript bundle
- Fast Core Web Vitals

## ♿ Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Color contrast
- Focus states
- Alt text for images

## 📱 Responsive Design

- Mobile-first approach
- Tailwind breakpoints: sm, md, lg, xl, 2xl
- Optimized for all screen sizes
- Touch-friendly interactions

## 🤝 Contributing

This is a personal portfolio, but feel free to use it as a template for your own!

## 📄 License

MIT License - feel free to use this template for your portfolio.

## 💬 Contact

- **Email**: yahya.laadam@gmail.com
- **GitHub**: https://github.com/yahya-2005
- **LinkedIn**: https://www.linkedin.com/in/yahya-laadam/
- **Location**: Casablanca, Morocco

## 🙏 Acknowledgments

- Unicorn Studio for 3D background
- Framer Motion for smooth animations
- GSAP for advanced animations
- Lenis for smooth scrolling
- Tailwind CSS for utilities
- Next.js for framework

---

**Built with passion by Yahya Laadam** ❤️
