---
name: Pest Control Platform Build Plan
description: Full architecture, folder structure, AI features, tech stack, and client deployment plan
type: project
---

# Pest Control Website Platform — Build Plan

**Why:** 75 pest control businesses in Delhi NCR have no website. Build a reusable AI-native
template, deploy per client in <2 hours, starting with Aakash Pest Control (4.9★, 667 reviews).

**How to apply:** Reference this before adding any new section, feature, or client config.

## Tech Stack
- Framework: Next.js 14 (App Router) — SSR for local SEO
- Language: TypeScript
- Styling: Tailwind CSS + shadcn/ui
- Database: PostgreSQL + Prisma
- AI: Claude API (claude-sonnet-4-6) — pest ID, smart quote, chat
- Calendar: Google Calendar API
- Messaging: WhatsApp Business API / wa.link
- Deployment: Vercel (per-client env vars)

## Root: pest-control-platform/

### apps/web/  (Next.js customer-facing site)
- app/layout.tsx — root layout
- app/page.tsx — homepage
- app/services/[slug]/page.tsx — per-pest service pages
- app/booking/ — 3-step booking flow
- app/areas/[city]/page.tsx — city SEO pages
- app/track/page.tsx — service transparency tracker
- app/api/booking/route.ts
- app/api/calendar/route.ts
- app/api/whatsapp/route.ts
- app/api/ai/pest-identify/route.ts
- app/api/ai/quote/route.ts
- app/api/ai/chat/route.ts
- components/sections/ — Hero, PestSelector, TrustStrip, ServicePackages, BookingForm, Reviews, FAQ, ProcessTransparency
- components/ai/ — PestIdentifier, SmartQuote, AIChatWidget
- components/booking/ — BookingSteps, CalendarPicker, TimeSlotGrid, BookingConfirmation
- components/transparency/ — TechnicianCard, ChemicalSafety, TreatmentSteps, WarrantyBadge
- components/common/ — Header, Footer, WhatsAppFloat, CallFloat, SEOMeta
- config/site.config.ts — single file to customize per client
- lib/ai/ — pest-identifier.ts, quote-generator.ts, chat.ts
- lib/ — calendar.ts, whatsapp.ts, db.ts, analytics.ts
- data/ — services.ts, packages.ts, faqs.ts, reviews.ts, areas.ts

### apps/admin/  (v2 — business owner dashboard, placeholder only)

### clients/
- _template/ — config.ts, content.ts, assets/
- aakash-pest-control/ — first pilot client
- [next-client]/ — add new client in <30 min

### database/
- schema.prisma — Booking + Lead models
- migrations/
- seed.ts

### docs/
- client-onboarding.md
- ai-features.md

## AI Features
1. Pest Photo Identifier — photo → Claude Vision → pest name + service rec + price range
2. Smart Quote Generator — property type + pest → instant quote, no callback friction
3. AI Chat Widget — streaming Claude chat → handoff to WhatsApp/booking

## First Client: Aakash Pest Control
- Phone: 099718 59615
- Rating: 4.9★, 667 reviews
- Cities: Delhi, Noida, Ghaziabad
- Status: Pilot — configure after template is built

## Build Phases
- P1: Folder structure + Next.js setup (Day 1)
- P2: Homepage sections Hero→FAQ (Days 2–3)
- P3: AI features (Day 4)
- P4: Booking flow + calendar (Day 5)
- P5: Aakash config + deploy (Day 6)
- P6: 2nd + 3rd client deploys (Day 7)
