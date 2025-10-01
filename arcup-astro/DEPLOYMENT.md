# Arc^ Website Deployment Guide

## 🚀 Quick Deploy to GitHub Pages

### Option 1: GitHub Actions (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "MVP website with accessibility and SEO improvements"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Source: "GitHub Actions"
   - The workflow will automatically build and deploy

3. **Custom Domain Setup**
   - In repository settings → Pages → Custom domain
   - Enter: `arcup.xbyali.page`
   - Add CNAME file to public folder (already included)

### Option 2: Manual Build & Deploy

1. **Build the site**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

## 🔧 Configuration

### Environment Variables
- `BASE_URL`: Set to `/` for custom domain
- `SITE_URL`: Set to `https://arcup.xbyali.page`

### Build Settings
- **Output**: Static files
- **Base URL**: `/` (for custom domain)
- **Site URL**: `https://arcup.xbyali.page`

## 📱 Features Included

### ✅ Accessibility
- Screen reader support
- Keyboard navigation
- High contrast mode
- Reduced motion support
- Skip-to-content links
- ARIA labels and roles

### ✅ SEO Optimization
- Comprehensive meta tags
- Open Graph and Twitter Cards
- Structured data (JSON-LD)
- Sitemap.xml and robots.txt
- PWA manifest

### ✅ Performance
- Optimized images and fonts
- Error handling and fallbacks
- Network status monitoring
- Graceful degradation

### ✅ Responsive Design
- Mobile-first approach
- Touch-friendly interfaces
- Flexible layouts
- Cross-device compatibility

## 🛠️ Development

### Local Development
```bash
npm run dev
```
Visit: `http://localhost:4321`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📊 SEO Features

### Structured Data
- Organization schema
- Website schema
- Person schema (founder)
- Service/Offer catalogs

### Meta Tags
- Title and description optimization
- Keywords and categories
- Geographic targeting
- Language and locale settings

### Social Media
- Open Graph tags for Facebook/LinkedIn
- Twitter Card optimization
- Social media links in footer

## 🔍 Google Indexing Support

### Files Included
- `robots.txt` - Crawler instructions
- `sitemap.xml` - Site structure
- `manifest.json` - PWA configuration

### SEO Best Practices
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Descriptive link text
- Fast loading times

## 🎯 Target Audience

### Primary Keywords
- Plasma research
- Open science
- Regenerative agriculture
- Environmental restoration
- Community research

### Content Strategy
- Educational content about plasma technology
- Open-source research protocols
- Community building and collaboration
- Environmental impact stories

## 📈 Analytics & Monitoring

### Recommended Tools
- Google Analytics 4
- Google Search Console
- PageSpeed Insights
- Lighthouse audits

### Key Metrics
- Page load speed
- Accessibility score
- SEO performance
- User engagement

## 🚨 Error Handling

### Graceful Failures
- Network error detection
- Image loading fallbacks
- Font loading fallbacks
- Audio playback fallbacks
- Chunk loading error recovery

### User Experience
- Non-intrusive error messages
- Automatic retry mechanisms
- Offline state handling
- Update notifications

## 🔒 Security

### Best Practices
- HTTPS enforcement
- Content Security Policy
- XSS protection
- Secure headers

### Privacy
- No tracking by default
- GDPR compliance ready
- Privacy policy included
- Terms of use available

## 📞 Support

### Contact Information
- Email: ali@arcup.org
- Discord: https://discord.gg/arcup
- YouTube: https://youtube.com/@arcupbyali
- GitHub: https://github.com/arcup

### Documentation
- Code of Conduct
- Terms of Use
- Privacy Policy
- Research Log

---

**Built with ❤️ for regenerative futures**
