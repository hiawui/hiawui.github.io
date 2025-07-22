# Images Directory

This directory contains static images for the website.

## RePostman Logo

To add the RePostman logo:

1. Place your PNG logo file in this directory
2. Name it `repostman-logo.png`
3. Recommended size: 200x200 pixels or larger
4. The logo will be automatically optimized by Next.js

## File Structure

```
public/images/
├── repostman-logo.png    # RePostman logo (PNG format)
└── README.md            # This file
```

## Supported Formats

- JPG/JPEG
- PNG
- WebP
- GIF
- SVG

## Optimization

Next.js automatically optimizes images using the `next/image` component:
- Automatic WebP conversion
- Responsive sizing
- Lazy loading
- Blur placeholder 