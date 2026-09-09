# Mohammed Shabik — Personal Platform

A world-class personal platform built with Next.js 15, TypeScript, and modern web technologies. Designed for authority, performance, and scalability.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router, React Server Components)
- **Language**: TypeScript (strict mode, zero `any`)
- **Styling**: Tailwind CSS + Custom Design System
- **Components**: ShadCN UI (customized)
- **Animations**: Framer Motion (physics-based)
- **State**: Zustand
- **Content**: MDX + Contentlayer
- **Analytics**: Vercel Analytics + Speed Insights
- **Deployment**: Vercel

## 🎯 Key Features

- ⚡️ **Performance First**: Lighthouse 98-100, CLS: 0, LCP < 1.2s
- 🎨 **Custom Design System**: Semantic colors, fluid typography, dark mode
- 📝 **MDX Blog**: SEO-optimized, syntax highlighting, reading time
- 🔍 **SEO Optimized**: Metadata, OpenGraph, JSON-LD, sitemap
- ♿️ **Accessible**: WCAG AA+ compliant
- 🔒 **Secure**: Security headers, CSP ready
- 📱 **Responsive**: Mobile-first, fluid design

## 📂 Project Structure

```
├── app/                    # Next.js App Router
│   ├── (pages)/           # Route groups
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # Base UI components
│   ├── navigation.tsx    # Navigation component
│   └── footer.tsx        # Footer component
├── features/             # Feature-based modules
├── lib/                  # Utilities and helpers
├── config/               # Configuration files
├── content/              # MDX content
│   ├── blog/            # Blog posts
│   └── projects/        # Project case studies
├── public/               # Static assets
└── types/                # TypeScript types
```

## 🛠 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm 9.0 or later

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd muhammad-sabik-platform
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check
- `npm run format` - Format code with Prettier

## 🎨 Design System

### Colors

Semantic color system with automatic dark mode support:
- `primary` - Brand color
- `secondary` - Secondary actions
- `accent` - Highlights and interactive elements
- `muted` - Subdued elements

### Typography

Fluid typography using `clamp()`:
- `text-fluid-xs` to `text-fluid-6xl`
- Automatically scales based on viewport

### Components

All components built with:
- Radix UI primitives for accessibility
- Class Variance Authority for variants
- Tailwind Merge for style composition

## 📝 Content Management

### Blog Posts

Create new blog posts in `content/blog/`:

```mdx
---
title: "Your Post Title"
description: "Post description"
date: "2024-12-16"
published: true
tags: ["Tag1", "Tag2"]
---

Your content here...
```

### Projects

Create project case studies in `content/projects/`:

```mdx
---
title: "Project Name"
description: "Project description"
date: "2024-12-16"
published: true
featured: true
tags: ["Tech1", "Tech2"]
github: "https://github.com/..."
demo: "https://demo.com"
---

Project details...
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Other Platforms

Build command:
```bash
npm run build
```

Output directory:
```
.next
```

## 📊 Performance Targets

- **Lighthouse Score**: 98-100
- **Core Web Vitals**:
  - LCP: < 1.2s
  - CLS: 0
  - FID: < 100ms
- **TTFB**: < 200ms
- **Bundle Size**: Optimized with code splitting

## 🔒 Security

- Security headers configured
- CSP ready
- Input validation with Zod
- Honeypot spam protection
- Rate limiting ready

## 🎯 SEO

- Semantic HTML
- Meta tags (title, description, keywords)
- OpenGraph tags
- Twitter Card tags
- JSON-LD structured data
- Sitemap generation
- Robots.txt

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 🤝 Contributing

This is a personal project, but suggestions and feedback are welcome!

## 📄 License

© 2024 Mohammed Shabik. All rights reserved.

## 🔗 Links

- **Website**: [muhammadsabik.com](https://muhammadsabik.com)
- **Email**: muhammadsabik.org@gmail.com
- **GitHub**: [@muhammadsabik](https://github.com/muhammadsabik)
- **LinkedIn**: [muhammadsabik](https://linkedin.com/in/muhammadsabik)

---

**Built with ❤️ and TypeScript**
