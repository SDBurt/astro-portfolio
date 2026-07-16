# Sean Burt - Portfolio & Blog

A modern, performance-focused portfolio website built with Astro 7, showcasing software engineering projects and technical writing.

## 🚀 Live Site

Visit [sdburt.com](https://sdburt.com) to see the portfolio in action.

## ✨ Features

- **Modern Stack**: Astro 7 with TypeScript and zero client framework runtime
- **Accessible Design**: Semantic Astro components, keyboard navigation, and reduced-motion support
- **Performance Optimized**: Static HTML, vanilla CSS, optimized local assets, and Cloudflare's CDN
- **Content Management**: MDX with syntax highlighting, automatic table of contents, and enhanced plugins
- **SEO Ready**: Structured data, Open Graph tags, and automatic sitemap generation
- **Dark Mode**: System preference detection with manual toggle
- **Fast Navigation**: Prefetching and view transitions for smooth UX

## 🛠️ Tech Stack

- **Framework**: [Astro 7](https://astro.build) - Static site generator with islands architecture
- **UI Components**: Astro components with no client-side framework runtime
- **Styling**: Vanilla CSS with custom design system and CSS custom properties
- **Content**: [MDX](https://mdxjs.com) with [Shiki](https://shiki.matsu.io) syntax highlighting
- **Deployment**: [Cloudflare Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/)
- **Analytics**: [PostHog](https://posthog.com/)
- **Fonts**: Plus Jakarta Sans and JetBrains Mono

## 📦 Installation & Development

```bash
# Clone the repository
git clone https://github.com/sdburt/astro-portfolio.git
cd astro-portfolio

# Install dependencies (requires Node.js 22.12+)
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

# Validate the Workers deployment without publishing
pnpm deploy:dry-run
```

The production build is deployed as an assets-only Cloudflare Worker. Configure a Workers Builds project with:

- Build command: `pnpm build`
- Deploy command: `pnpm wrangler deploy`

Static files are uploaded from `dist/` according to `wrangler.toml`; there is no Worker script or server runtime.

## 📁 Project Structure

```
├── public/                  # Static assets (favicon, images)
├── src/
│   ├── components/         # Reusable UI components
│   │   └── *.astro        # Core site components
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
├── content.config.ts      # Content collections schema
├── wrangler.toml          # Cloudflare Workers Static Assets configuration
└── package.json
```

## 🎨 Design System

The site uses a custom vanilla CSS design system with:

- **Color System**: Primary blue (#3b82f6) with semantic color tokens
- **Typography Scale**: Consistent sizing with rem units
- **Spacing System**: 4px-based spacing scale
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
- `content.config.ts` - Content collection schemas
- `biome.json` - Code formatting and linting rules

## 📊 Performance

- **Lighthouse Score**: 95+ across all categories
- **Core Web Vitals**: Optimized for LCP, CLS, and FID
- **Bundle Size**: Minimal JavaScript with selective hydration
- **Image Optimization**: Astro asset pipeline support for local images

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
- **public/_headers**: Cloudflare static-asset security and cache headers

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
- Secure content delivery via Cloudflare's edge network
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
- **LinkedIn**: [sean-d-burt](https://linkedin.com/in/sean-d-burt)
- **GitHub**: [sdburt](https://github.com/sdburt)

---

Built with ❤️ using [Astro](https://astro.build)
