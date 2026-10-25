# Mens Outfit

An editorial React fashion storefront for modern everyday menswear. A warm neutral palette, chartreuse accents, oversized typography, campaign photography, and responsive motion establish the brand.

The home page includes essentials, outfit edits, the brand story, and fit information. The collection supports category filters, search, sorting, and favorites. Product overlays and `/products/1` through `/products/6` offer size and color choices, while the shopping bag supports quantity changes and item removal.

## Technology

React 19, TypeScript, TanStack Start and Router, Vite, Tailwind CSS, Lucide icons, and Netlify Image CDN. The original campaign image is saved in `public/img/campaign.png`; supporting editorial and product images come from Unsplash. Fonts load from Google Fonts.

## Local development

Use Node 22.13+ or Node 24 and pnpm. Install dependencies with `pnpm install`. Run `netlify dev --port 8889` to include Netlify Image CDN emulation. The deploy pipeline runs the configured Vite build and publishes `dist/client`.

## Product status

This milestone is an interactive storefront preview with sample products centralized in `src/data/products.ts`. Bag and favorites are held in React state for the current visit and reset on reload. Payments and order placement are not enabled. Color swatches are illustrative and do not swap the product photograph. The full launch roadmap is in `PLAN.md`, beginning with the real catalog and inventory, then accounts, checkout, and fulfillment.

Source changes were reviewed directly; local builds, development servers, and tests were not run. Deployment validation is handled by the platform pipeline.
