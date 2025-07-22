# Hiawui's Blog

Welcome to my personal blog built with Next.js and hosted on GitHub Pages.

## Features

- Modern React-based website using Next.js 14
- Responsive design with Tailwind CSS
- TypeScript for type safety
- Blog posts support
- About, Projects, and Contact pages
- SEO optimized
- Fast performance

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages
- **Build Tool**: Vite (via Next.js)

## Local Development

To run this site locally:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

To build the site for production:

```bash
npm run build
```

The built files will be in the `out` directory.

## Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions. Simply push to the `main` branch and the site will be built and deployed automatically.

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── about/          # About page
│   ├── blog/           # Blog page
│   ├── projects/       # Projects page
│   ├── contact/        # Contact page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
└── components/         # Reusable components
```

## License

MIT License 