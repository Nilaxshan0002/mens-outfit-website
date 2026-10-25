# Mens Outfit architecture

Read `PLAN.md` before continuing product development. Milestone 1 is the branded shopping surface. Subsequent milestones add the real catalog, persistence, accounts, and commerce.

- `src/routes/index.tsx` renders the storefront.
- `src/components/Storefront.tsx` owns the home/collection/saved views, search, filters, sort, product modal, bag drawer, and information dialogs. State is intentionally scoped to the visit; there is no persistence or payment flow yet.
- `src/data/products.ts` is the single sample-product module and exports the Netlify Image CDN URL helper. Prices are illustrative USD amounts.
- `src/routes/products/$productId.tsx` loads sample product data and opens the shared detail view. Unknown IDs use the route's not-found component.
- `src/routes/__root.tsx` contains page and social metadata.
- `src/styles.css` contains the palette, typography, responsive grids, interaction states, and reduced-motion overrides.
- `public/img/campaign.png` is generated editorial imagery. Remote Unsplash sources are allowlisted in `netlify.toml`.

Use typed React components, semantic buttons, meaningful image alt text, and labeled icon controls. Browser APIs belong in effects or event handlers to preserve server rendering. Dialogs support Escape, focus restoration, keyboard focus containment, and scroll locking. Keep backend data authoritative when commerce is implemented. Never represent an unverified payment as a completed order.

Use Netlify Database for structured persistent data, Netlify Blobs for uploaded assets, and Netlify Identity for customer accounts. Keep credentials server-side. Run local emulation with `netlify dev --port 8889` when allowed. The platform pipeline performs build validation; do not commit generated build output.
