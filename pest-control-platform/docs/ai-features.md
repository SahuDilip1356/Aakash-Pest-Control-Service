# AI Features Guide

## 1. Pest Photo Identifier
- Component: components/ai/PestIdentifier.tsx
- API route: app/api/ai/pest-identify/route.ts
- Library: lib/ai/pest-identifier.ts
- Model: claude-sonnet-4-6 (vision)
- Flow: user uploads photo → base64 encoded → Claude identifies pest + recommends service → booking CTA

## 2. Smart Quote Generator
- Component: components/ai/SmartQuote.tsx
- API route: app/api/ai/quote/route.ts
- Library: lib/ai/quote-generator.ts
- Model: claude-sonnet-4-6
- Flow: user selects property type + pest → Claude generates price range + inclusions → booking CTA

## 3. AI Chat Widget
- Component: components/ai/AIChatWidget.tsx
- API route: app/api/ai/chat/route.ts (streaming)
- Library: lib/ai/chat.ts
- Model: claude-sonnet-4-6 (streaming)
- Flow: user types question → streaming response → handoff to WhatsApp/booking when ready

## API Key
Set ANTHROPIC_API_KEY in .env.local or Vercel environment variables.
Never commit to git.
