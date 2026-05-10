---
name: Architecture Decisions
description: Key product and architecture decisions for the pest control platform
type: project
---

# Decisions Log

## 2026-05-08 — Next.js over React+Vite
Chose Next.js 14 (App Router) for the template.
**Why:** Local SEO is the primary acquisition channel. SSR/SSG means Google indexes content
on first crawl without waiting for JS execution. City-specific pages (/areas/delhi) need to
rank fast. API routes also handle AI + booking without a separate backend.
**Alternative considered:** React + Vite (simpler, but no SSR = SEO penalty for local search).

## 2026-05-08 — Single site.config.ts per client
All per-client customization (name, phone, WhatsApp, colors, cities, calendar ID) lives in
one TypeScript config file. Deployed via Vercel environment variable SITE_CLIENT=aakash-pest-control.
**Why:** Enables <2 hour new client deployment. No code changes needed — only config + assets.

## 2026-05-08 — AI features in v1 (not deferred)
Pest Identifier, Smart Quote, and AI Chat included in v1 template.
**Why:** These are the primary differentiator vs competitors (HiCare, local operators). They
also reduce friction: instant quote removes "fill form and wait" which kills conversion.

## 2026-05-08 — Admin dashboard deferred to v2
Business owner dashboard (bookings view, lead management, calendar) placeholder only in v1.
**Why:** First 3 clients can be managed via WhatsApp + Google Calendar manually. Validate
that clients will pay before building the management layer.

## 2026-05-10 — Netlify over Vercel for hosting
Each client deploys to its own Netlify site, sharing the same GitHub repo, differentiated
by `SITE_CLIENT` env var. `netlify.toml` at repo root sets `base = pest-control-platform/apps/web`.
**Why:** Founder's call — site is static-heavy with light API routes, Netlify is preferred.
**Caveat:** This is a hybrid Next.js app, not a fully static site. Pages render statically;
`/api/*` routes deploy as Netlify Functions. Netlify's Next.js runtime handles this auto.
**Alternative considered:** Vercel — purpose-built for Next.js, lower friction, faster cold
starts on functions. May revisit if Netlify Next.js runtime lags behind Next.js major versions
or if function cold starts become a UX problem.
**How to apply:** New client = new Netlify site, same repo, `SITE_CLIENT=<client-slug>` env var.
