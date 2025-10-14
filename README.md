# Cafe Regina

## Project Overview
Cafe Regina is a marketing site for a Belgian cafe built with Next.js to highlight menus, events, and atmosphere. Visitors can browse dynamic pages such as weekend suggestions or small hunger menus and subscribe to the newsletter for updates.

### Key Features
- Dynamic routes for drinks, suggestions, photos, and events.
- Shared components for navigation, page headers, loaders, and CTAs.
- Newsletter module enhanced with GSAP animations and reusable form UI.

## Tech Stac
- Next.js 15
- React 19
- SCSS modules and Bootstrap 5
- GSAP with @gsap/react and SplitText
- Swiper for carousel experiences

## Installation & Setup
```bash
git clone <repo-url>
cd cafe-regina
npm install
npm run dev
```

The project currently uses static data. If you add environment variables (for example `NEXT_PUBLIC_*` keys or API tokens), create a `.env.local` file and mirror those entries in your hosting environment such as Vercel.

## Project Structure
- `app/` - App Router pages, layouts, and metadata.
- `components/` - Reusable UI blocks (navbar, newsletter, gallery widgets, loaders).
- `data/` - Static content for menus, events, and suggestions.
- `public/` - Images, SVGs, and fonts referenced in the UI.
- `style/` - Global and page-level SCSS styles.

## Available Scripts
- `npm run dev` - Start the development server with Turbopack.
- `npm run build` - Generate the production build.
- `npm run start` - Serve the production build locally.
- `npm run lint` - Run ESLint against the source.

## Testing
Automated tests are not included yet. Add your preferred testing setup (for example Jest or React Testing Library) and document new scripts here when available.

## Contributing
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/name`.
3. Commit and push your changes.
4. Open a pull request for review.

## License
Proprietary - contact the owner for reuse or redistribution.
