# Quick Start Guide - Portfolio Website

## 🚀 Getting Started

You've successfully created a world-class portfolio website! Here's how to get started:

### 1. **Install Dependencies** (Already Done)
All npm packages have been installed. The project includes:
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- GSAP
- Lenis (smooth scrolling)
- Unicorn Studio (3D background)
- React Icons (for GitHub, LinkedIn icons)

### 2. **Run Development Server**
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to see your portfolio in action.

### 3. **Build for Production**
```bash
npm run build
npm start
```

## 📝 Customization

### Update Personal Information
Edit `data/portfolio.ts` to update:
- Name, email, phone, location
- Social media links
- Education details
- Skills and proficiency levels
- Projects and descriptions
- Services offered

### Update Contact Information
Edit `components/sections/Contact.tsx` to modify:
- Contact form fields
- Email validation
- Form submission handling

### Modify Styling
- **Colors**: Edit `tailwind.config.js` to change accent colors
- **Custom Classes**: Edit `app/globals.css` for component styles
- **Animations**: Adjust animation timing in component files

## 🌐 Deployment

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Other Hosting Options
- **Netlify**: Push to GitHub and connect to Netlify
- **AWS Amplify**: Deploy using AWS CLI
- **Digital Ocean**: Deploy using Docker

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/
│   ├── sections/         # Page sections
│   ├── Navbar.tsx        # Navigation
│   ├── Footer.tsx        # Footer
│   └── ui/               # UI components
├── data/
│   └── portfolio.ts      # All content data
├── lib/
│   └── utils.ts          # Utility functions
├── public/               # Static assets
└── package.json
```

## ✨ Key Features

- ✅ Smooth scrolling with Lenis
- ✅ Advanced animations (Framer Motion + GSAP)
- ✅ 3D Unicorn Studio background
- ✅ Responsive design
- ✅ SEO optimized
- ✅ Dark mode (only)
- ✅ Contact form
- ✅ Project filtering
- ✅ Skills showcase

## 🎨 Customization Tips

### Change Accent Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  emerald: { ... },  // Change to your primary color
  cyan: { ... },     // Change to your secondary color
}
```

### Add New Sections
1. Create a new component in `components/sections/`
2. Add it to the main page in `app/page.tsx`
3. Add navigation link in `components/Navbar.tsx`

### Update Unicorn Studio Background
1. Visit [Unicorn Studio](https://unicornstudio.com)
2. Create your own 3D scene
3. Replace projectId in `components/HeroBackground.tsx`

## 🔍 SEO Optimization

Update metadata in `app/layout.tsx`:
- Title
- Description
- Keywords
- OpenGraph tags
- Twitter card data

## 📱 Responsive Design

The portfolio is fully responsive:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🐛 Troubleshooting

### Build Fails
```bash
npm run build
```

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### CSS Not Applying
Clear Next.js cache:
```bash
rm -rf .next
npm run dev
```

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://gsap.com/docs/)
- [Lenis](https://github.com/darkroom-engineering/lenis)

## 🎯 Next Steps

1. **Customize Content**: Update `data/portfolio.ts` with your information
2. **Add Your Logo**: Add image files to `public/`
3. **Update Links**: Ensure all social links are correct
4. **Test Locally**: Run `npm run dev` and test all features
5. **Deploy**: Push to Vercel or your hosting provider
6. **Monitor Performance**: Check Core Web Vitals

## 💡 Pro Tips

- Use `npm run lint` to check code quality
- Test on mobile devices before deploying
- Optimize images for better performance
- Keep content updated regularly
- Monitor analytics and user feedback
- Test form submission thoroughly

## 🤝 Support

For issues or questions:
1. Check the project's `.next/build` folder for build errors
2. Review console logs in browser DevTools
3. Check terminal output for warnings
4. Consult Next.js documentation

---

**Happy coding! Your portfolio is ready to impress.** 🚀
