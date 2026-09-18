# Sean Burt - Portfolio & Blog

A modern, performance-focused portfolio website built with Astro, showcasing software engineering projects and technical writing.

## 🚀 Live Site

Visit [sdburt.com](https://www.sdburt.com) to see the portfolio in action.

## ✨ Features

- **Modern Stack**: Astro 7 with TypeScript and no UI framework
- **Accessible Design**: Native disclosure patterns with focus management and proper ARIA state
- **Performance Optimized**: Vanilla CSS design system, image optimization, and Vercel Speed Insights
- **Content Management**: MDX with syntax highlighting and enhanced plugins
- **SEO Ready**: Structured data, Open Graph tags, and automatic sitemap generation
- **Dark Mode**: System preference detection with manual toggle
- **Fast Navigation**: Prefetching and view transitions for smooth UX

## 🛠️ Tech Stack

- **Framework**: [Astro 7](https://astro.build) - Static site generator with content collections and view transitions
- **Interactivity**: Vanilla TypeScript progressive enhancement
- **Styling**: Vanilla CSS with custom design system and CSS custom properties
- **Content**: [MDX](https://mdxjs.com) with [Shiki](https://shiki.matsu.io) syntax highlighting
- **Deployment**: [Vercel](https://vercel.com)
- **Analytics**: [Vercel Speed Insights](https://vercel.com/docs/speed-insights)
- **Fonts**: Inter (sans-serif), Crimson Text (serif), JetBrains Mono (monospace)

## 📦 Installation & Development

```bash
# Clone the repository
git clone https://github.com/sdburt/astro-portfolio.git
cd astro-portfolio

# Install dependencies (requires Node.js 22+)
pnpm install

# Start development server
pnpm dev
```

Visit `http://localhost:4321` to see your site.

## 🏗️ Building & Deployment

```bash
# Type check and build for production
pnpm build

# Preview production build locally
pnpm preview

# Format code with Biome
pnpm format

# Lint code with Biome
pnpm lint
```

The site is automatically deployed to Vercel on pushes to the main branch.

## 📁 Project Structure

```
├── public/                  # Static assets (favicon, images)
├── src/
│   ├── components/         # Reusable UI components (Astro)
│   ├── content/           # Content collections
│   │   ├── blog/          # Blog posts (MDX)
│   │   ├── projects/      # Project showcases
│   │   └── work/          # Work experience
│   ├── layouts/           # Page layouts
│   ├── pages/             # File-based routing
│   ├── styles/            # CSS design system
│   ├── lib/               # Utility functions
│   └── config/            # Site configuration
├── astro.config.mjs       # Astro configuration
└── package.json
```

## 🎨 Design System

The site uses a custom vanilla CSS design system with:

- **Color System**: Bone paper and forest ink with matcha accents, as semantic color tokens
- **Typography Scale**: Consistent sizing with rem units
- **Spacing System**: rem-based spacing scale
- **Component Classes**: Semantic CSS classes for consistency
- **Dark Mode**: CSS custom properties with system preference detection

## 📝 Content Management

Content is managed through Astro's content collections:

- **Blog Posts**: Written in MDX with frontmatter metadata
- **Projects**: Showcase work with descriptions, tech stacks, and links
- **Work Experience**: Professional history with structured data

### Adding New Content

```bash
# Create a new blog post
touch src/content/blog/my-new-post.mdx

# Create a new project
touch src/content/projects/my-project.md
```

## 🔧 Configuration

Key configuration files:

- `src/config/site.ts` - Site metadata, navigation, and social links
- `astro.config.mjs` - Astro framework configuration
- `src/content.config.ts` - Content collection schemas
- `biome.json` - Code formatting and linting rules

## 📊 Performance

- **Lighthouse Score**: 95+ across all categories
- **Core Web Vitals**: Optimized for LCP, CLS, and FID
- **Bundle Size**: Minimal JavaScript, static HTML with progressive enhancement
- **Image Optimization**: Automatic WebP conversion and responsive sizing

## 🔐 Security

This portfolio implements comprehensive security measures:

### Security Headers
- **Content Security Policy (CSP)**: Prevents XSS and injection attacks
- **Strict Transport Security (HSTS)**: Forces HTTPS connections
- **X-Frame-Options**: Prevents clickjacking attacks
- **X-Content-Type-Options**: Prevents MIME sniffing attacks
- **Referrer Policy**: Controls referrer information sharing

### Security Files
- **robots.txt**: Blocks crawlers from sensitive paths
- **security.txt**: RFC 9116 compliant security disclosure information
- **vercel.json**: Server-level security header configuration

### Security Monitoring
```bash
# Run security audit
pnpm run security:audit

# Check for outdated dependencies
pnpm run security:outdated

# Update dependencies
pnpm run security:update
```

### Security Best Practices
- No user authentication or sensitive data storage
- Static site generation for minimal attack surface
- Dependency vulnerability scanning
- Secure content delivery via Vercel edge network
- Regular security updates and monitoring

## 🤝 Contributing

This is a personal portfolio, but feedback and suggestions are welcome:

1. Check existing issues or create a new one
2. Fork the repository
3. Create a feature branch
4. Make your changes
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: seandburt@gmail.com
- **LinkedIn**: [seandburt](https://www.linkedin.com/in/seandburt)
- **GitHub**: [sdburt](https://github.com/sdburt)

---

Built with ❤️ using [Astro](https://astro.build)