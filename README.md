# SJSU Robotics Website

The official website for SJSU Robotics, built with Next.js.

## Development

```bash
npm install
npm run dev
```

## Structure

- `src/app/page.tsx` - Home page (hero, divisions, sponsors, FAQ)
- `src/app/board/page.tsx` - Leadership page
- `src/app/past-leads/page.tsx` - Past leadership archive
- `src/app/globals.css` - Global styles
- `public/images/leads/` - Leadership photos (PNG format)
- `public/images/sponsors/` - Sponsor logos

## Updating Leadership

1. Add new photos to `public/images/leads/` as `firstname-lastname.png`
2. Update the arrays in `src/app/board/page.tsx`:
   - `executiveBoard` for exec positions
   - `divisions` array for division leads and co-leads

## Deployment

Deployed via GitHub Pages. Push to `main` to trigger deployment.
