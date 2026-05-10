# Adding a New Client — 30 Minute Checklist

## Step 1: Create client config
cp -r clients/_template/ clients/[new-client-name]/

## Step 2: Fill in config.ts
- name, tagline, phone, whatsapp, address
- rating + reviewCount (from Google Maps)
- primaryColor, accentColor (brand colors)
- cities (service areas)
- googleBusinessUrl, calendarId (add after client setup)

## Step 3: Add content.ts
- heroImage — get from client or use stock
- servicesOffered — which pest types they handle
- customFAQs / customPackages — if different from defaults

## Step 4: Set up Vercel project
- New Vercel project → import this repo
- Set env var: SITE_CLIENT=[new-client-name]
- Set: ANTHROPIC_API_KEY, DATABASE_URL, etc.
- Connect custom domain (e.g. aakashpestcontrol.in)

## Step 5: Go live
- Push → Vercel auto-deploys
- Verify: homepage, booking form, WhatsApp button, city pages
- Add to Google Search Console and submit sitemap

Total time: < 2 hours per new client after first build.
