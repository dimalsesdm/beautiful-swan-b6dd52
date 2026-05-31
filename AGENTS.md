# AGENTS.md

This document describes the architecture and conventions for the Alex Rivera personal portfolio site.

## Project Overview

A personal portfolio site featuring a home/hero page, about page, image gallery, project showcase, and contact form. Built with TanStack Start (React SSR) and deployed on Netlify.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS v4 (custom dark design system) |
| UI Components | Radix UI + custom components |
| Content | Content Collections (type-safe markdown) |
| Images | Netlify Image CDN (`/.netlify/images?url=...`) |
| Forms | Netlify Forms (static HTML skeleton in `public/contact.html`) |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── content/
│   ├── blog/           # Blog posts (not linked in main nav)
│   ├── education/      # Education entries (used on resume page)
│   ├── jobs/           # Work experience (used on resume page)
│   └── projects/       # Project markdown (legacy, projects now hardcoded in route)
├── public/
│   ├── gallery/        # SVG gallery images (arch, portrait, landscape, texture, urban, color)
│   ├── contact.html    # Static Netlify Forms skeleton (must match form fields in contact.tsx)
│   ├── favicon.ico
│   └── headshot-on-white.jpg
├── src/
│   ├── components/ui/  # Radix UI-based primitives (badge, card, checkbox, hover-card, separator)
│   ├── lib/utils.ts    # cn() class merging helper
│   └── routes/
│       ├── __root.tsx      # Root layout: fixed Nav + Footer, wraps all pages
│       ├── index.tsx       # Home: hero, stats bar, featured projects, gallery preview, CTA
│       ├── about.tsx       # About: headshot (Image CDN), bio, skills, experience timeline
│       ├── gallery.tsx     # Gallery: masonry grid, category filter, lightbox overlay
│       ├── projects.tsx    # Projects: card grid with status badges and links
│       ├── contact.tsx     # Contact: Netlify Form + social links sidebar
│       ├── resume.tsx      # Resume page (not in main nav)
│       └── blog/$slug.tsx  # Blog post detail (not in main nav)
├── content-collections.ts  # Zod schemas for blog, jobs, education, projects
├── netlify.toml            # Build config + Image CDN remote_images allowlist
└── src/styles.css          # Tailwind import + full dark design system (CSS variables)
```

## Design System

The site uses a **dark warm editorial** aesthetic — dark charcoal backgrounds with ivory text and amber/gold accent.

CSS variables are defined in `src/styles.css` using `oklch()` color space:
- `--background`: near-black warm charcoal
- `--foreground`: warm ivory
- `--primary`: amber/gold accent (used for CTA buttons, highlights, active nav)
- `--muted-foreground`: warm medium gray for secondary text
- `--card`: slightly lighter dark surface
- `--border`: warm dark border

Typography:
- Headings: **Playfair Display** (Google Fonts, serif, loaded via CSS `@import`)
- Body: **Inter** (Google Fonts, sans-serif)
- Use `font-serif` / `font-sans` Tailwind utilities (mapped to custom CSS vars in `@theme inline`)

## Key Patterns

### Netlify Image CDN
All images pass through `/.netlify/images?url=<encoded-path>&w=...&h=...&fit=...`:
```tsx
<img src={`/.netlify/images?url=${encodeURIComponent('/gallery/arch.svg')}&w=800&q=85`} />
```
Gallery thumbnails use `w=800&q=85`; lightbox uses `w=1200&fit=contain&q=90`; the headshot uses `w=600&h=700&fit=cover&position=top`.

### Netlify Forms
The contact form submits via AJAX to `fetch('/contact.html', ...)`. The `public/contact.html` file must list every field name. The form in `contact.tsx` must include `<input type="hidden" name="form-name" value="contact" />`.

### File-Based Routing (TanStack Router)
Routes in `src/routes/` are auto-discovered. `__root.tsx` uses `shellComponent: RootDocument` where `{children}` renders matched routes. The route tree is generated at build time.

### Navigation
Nav links are defined in the `navLinks` array in `__root.tsx`. Currently: About, Gallery, Work, Contact. Blog and Resume exist but are not in the main nav.

## Content

Gallery images are hardcoded in `src/routes/gallery.tsx` (not content-collections). Projects are hardcoded in `src/routes/projects.tsx`. The portfolio persona is "Alex Rivera."

## Conventions

- **Styling**: Tailwind utility classes, `cn()` helper for conditionals
- **Components**: PascalCase, colocated in route files or `src/components/ui/`
- **Imports**: Use `@/` alias for `src/*`
- **TypeScript**: Strict mode, Zod for validation
- **No comments** unless explaining a non-obvious constraint
