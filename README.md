# Alex Rivera — Personal Portfolio

A personal portfolio site for Alex Rivera, a creative developer and designer. Built with TanStack Start, Tailwind CSS v4, and deployed on Netlify.

## Features

- **Home** — Dramatic hero section, stats, featured projects preview, and gallery preview
- **About** — Biography, skills grid, experience timeline, and profile photo served via Netlify Image CDN
- **Gallery** — Masonry-layout photography gallery with category filtering and full-screen lightbox, images optimized on-demand via Netlify Image CDN
- **Projects** — Portfolio of work with status indicators, technology tags, and external links
- **Contact** — Contact form powered by Netlify Forms with social media links

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) (React SSR)
- **Styling**: Tailwind CSS v4 with a custom dark, warm editorial design system
- **Typography**: Playfair Display (serif headings) + Inter (body), via Google Fonts
- **Images**: [Netlify Image CDN](https://docs.netlify.com/image-cdn/) for on-demand optimization and format conversion
- **Forms**: [Netlify Forms](https://docs.netlify.com/forms/setup/) for contact submissions
- **Deployment**: [Netlify](https://netlify.com)

## Running Locally

```bash
# Install dependencies
npm install

# Start the development server (with Netlify emulation)
netlify dev
```

The site runs at `http://localhost:8888`.

## Project Structure

```
src/routes/          # Page routes (TanStack Router file-based)
public/gallery/      # SVG gallery images
src/styles.css       # Global styles + Tailwind CSS config
```
