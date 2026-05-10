---
name: Brand System
description: Canonical brand colors, logo files, and rules for the pest control platform — first applied to Aakash Pest Control
type: project
---

# Brand System

**Decided:** 2026-05-10 — Logo 1 (magnifying glass + bug) chosen over hexagon-mosquito alternatives.

**Why:** Magnifier+bug is universally readable as "pest control" across all 5 services (cockroach, termite, bedbug, mosquito, rodent), prints clean for vehicle stickers/uniforms, and works on light + dark backgrounds. Hexagon options were mosquito-only and used a glow effect that fails on print/B&W.

**How to apply:** Reference these tokens before adding any color, logo placement, or per-client config.

## Brand colors (single source of truth)

| Token | Hex | Use |
|---|---|---|
| `brand.green` | `#22c55e` | Primary green — wordmark "Aakash" + "Pest", CTAs, accents (Tailwind green-500) |
| `brand.greenDark` | `#0a3d1f` | Bug body fill at large sizes, hover states, dark wordmark variant |
| `brand.brown` | `#8B5A3C` | Magnifier ring + handle only |
| `accentColor` | `#f97316` | CTA orange — reserved, used sparingly |

**Rule:** Two colors max in any wordmark. No pink. No olive in the wordmark (olive was Logo 1's third color — dropped).

## Logo files

Per-client paths live in `clients/[client]/config.ts` under `logo`:
- `logo.icon` — `/images/logo-icon.svg` — 32×32 SVG, magnifier+bug only, no text. For favicon, app icons, social avatars, Header at small breakpoints.
- `logo.fullSvg` — `/images/logo-full.svg` — Vector wordmark for retina-sharp web display.
- `logo.full` — `/images/logo-full.png` — Raster fallback (3× export recommended).
- `logo.favicon` — `/favicon.ico` — Multi-size .ico (16, 32, 48).

The hand-coded `logo-icon.svg` already lives in `public/images/`. Wordmark PNG/SVG are pending Path A (DIY recolor in Figma/Canva).

## Path A handoff checklist (pending)

User is recoloring Logo 1 wordmark in Figma/Canva:
1. "Aakash" → `#22c55e` (currently dark green, keep)
2. "Pest" → `#22c55e` (currently pink — change)
3. "Control Service" → `#22c55e` or `#0a3d1f` (currently olive — pick one)
4. Tagline "SAFE. EFFECTIVE. RELIABLE." → `#8B5A3C` (brown, unchanged)
5. Export as `logo-full.svg` and `logo-full.png` @3×
6. Drop into `pest-control-platform/apps/web/public/images/`

After drop, Header auto-picks up via `siteConfig.logo`. No code changes needed.

## Per-client override

Future clients (URBAN AIDER, High Secure, etc.) can override `brand.green` in their own `config.ts`. The codebase always reads from `siteConfig.brand.*`, never hard-codes. The `_template/config.ts` already includes the brand block as the default.
