# AXATHAR — Asset Manifest

All imagery in the current build is clean-room generated (CSS gradients + canvas + typography). No reference-site assets are hotlinked or copied.

## Required production assets (to be supplied)

| # | Asset | Spec | Used in |
|---|-------|------|---------|
| 1 | Logo mark (SVG) | `A✦` geometric mark, 1-color + reversed | Header, loader, footer, favicon |
| 2 | Wordmark (SVG) | AXATHAR set in brand grotesk, tight -4% tracking | Header, footer giant word |
| 3 | Favicon set | SVG + 180px PNG + maskable 512px | `app/icon.svg`, manifest |
| 4 | OG image | 1200×630, ink background + lime accent + headline | Metadata `openGraph.images` |
| 5 | Method visuals ×5 | Discover/Diagnose/Design/Deliver/Evolve, 1600×1800 portrait, muted editorial photography or abstract engineering stills | Method sticky visual, method page |
| 6 | Service heroes ×16 | 2000×1250, one per service, consistent grade | Service cards + detail heroes |
| 7 | Case-study covers ×6+ | 2000×1250, anonymized abstract or client-approved | Case cards + detail heroes |
| 8 | Industry covers ×8 | 1600×1000 per industry | Industry index + cards |
| 9 | Blog covers | 1600×900 template with category color system | Blog index + article heroes |
| 10 | Team / culture ×4–6 | Editorial office photography | About page |
| 11 | Tool covers ×3 | Diagnosis / AI visibility / SEO scan | Tools index |
| 12 | WebGL / motion poster | Optional lightweight hero poster for no-JS | Homepage hero fallback |

## Temporary placeholders (current)

- Gradient panels keyed per section (`#0B0B0C → #2B4EFF → #D8FF3E` family)
- Canvas `HeroField` (grid + nodes, pointer parallax, DPR-capped, offscreen-paused)
- Monogram tiles (service initials + index numerals)
- CSS-only marquee, loader numerals, progress rails

## Image rules for production

- AVIF primary, WebP fallback via `next/image`
- Fixed `aspect-ratio` wrappers everywhere (no CLS)
- `sizes` matched to grid breakpoints
- Lazy below fold, priority only on hero
- Alt text: descriptive for content, empty for decoration

## Homepage globe
- `public/data/globe-land.json`: sampled geographic point cloud derived from Natural Earth 1:110m land polygons (public domain), https://www.naturalearthdata.com/. Generated locally from https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_110m_land.geojson.
- Globe rendering and animation implemented locally in `components/webgl/HeroField.tsx`, visually referencing the user-provided September 14 recording.

## AXATHAR brand and service catalogue
- `public/axathar-logo.png` and `app/icon.png`: supplied AXATHAR infinity logo, copied unchanged.
- Service catalogue adapted from `India_CompuTech_Profile_2025_v2.pdf`, pages 1 and 3–8. Seven core service families and three specialist offerings. Only service scope is used; no India CompuTech identity, personnel, contacts, statistics, certifications or performance claims were transferred.
- Homepage, services, service detail pages, navigation and contact service options use this catalogue. Existing service URLs redirect to the new catalogue.

## Portfolio
- Four project URLs supplied by the user; titles and descriptions checked against their rendered pages.
- `public/portfolio/*.png`: local browser captures of those project homepages. No external screenshot service or live iframe dependency.
- 3D glass cards are an original implementation using CSS perspective, independent depth layers, a damped pointer animation and glare. Interaction references: https://ui.aceternity.com/components/3d-card-effect, https://ui.aceternity.com/components/glare-card, https://ui.aceternity.com/components/comet-card. No third-party component source copied or dependency added.
