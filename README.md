# Sean Burt - Portfolio & Blog

A modern, performance-focused portfolio website built with Astro 5, showcasing software engineering projects and technical writing.

## 🚀 Live Site

Visit [sdburt.com](https://www.sdburt.com) to see the portfolio in action.

## ✨ Features

- **Modern Stack**: Astro 5.11 with React 19 and TypeScript
- **Accessible Design**: React Aria Components with comprehensive ARIA support
- **Performance Optimized**: Vanilla CSS design system, image optimization, and Vercel Speed Insights
- **Content Management**: MDX with syntax highlighting, automatic table of contents, and enhanced plugins
- **SEO Ready**: Structured data, Open Graph tags, and automatic sitemap generation
- **Dark Mode**: System preference detection with manual toggle
- **Fast Navigation**: Prefetching and view transitions for smooth UX

## 🛠️ Tech Stack

- **Framework**: [Astro 5.11](https://astro.build) - Static site generator with islands architecture
- **UI Components**: [React 19](https://react.dev) with [React Aria Components](https://react-spectrum.adobe.com/react-aria/)
- **Styling**: Vanilla CSS with custom design system and CSS custom properties
- **Content**: [MDX](https://mdxjs.com) with [Shiki](https://shiki.matsu.io) syntax highlighting
- **Deployment**: [Vercel](https://vercel.com) with edge functions
- **Analytics**: [Vercel Speed Insights](https://vercel.com/docs/speed-insights)
- **Fonts**: Inter (sans-serif), Crimson Text (serif), JetBrains Mono (monospace)

## 📦 Installation & Development

```bash
# Clone the repository
git clone https://github.com/sdburt/astro-portfolio.git
cd astro-portfolio

# Install dependencies (requires Node.js 18+)
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
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # React Aria components
│   │   ├── mdx/           # MDX-specific components
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
├── CLAUDE.md              # AI assistant context
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
- **Image Optimization**: Automatic WebP conversion and responsive sizing

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