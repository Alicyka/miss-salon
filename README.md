# MISS Salon

A website for a hair salon specialising in vivid, creative colour, built around an
AI consultant that helps clients decide what they want before they book.

**🔗 Live demo:** https://miss-salon.vercel.app

## What it does

- **Full salon site** — services with pricing, filterable portfolio, before/after
  comparison slider, stylist bio, contact with map
- **AI hair consultant, in 4 steps:**
  1. Upload a photo — compressed in the browser (5 MB → ~150 KB)
  2. Visual analysis — length, texture, colour, condition (Gemini, server-side)
  3. Colour try-on — hair segmentation on-device, the photo never leaves the device
  4. A brief is generated for the stylist and sent over WhatsApp
- **WhatsApp booking** with a pre-filled message per service
- **GDPR-compliant** — cookie consent banner, the Google map only loads after consent

## Tech stack

React · TypeScript · Vite · React Router · MediaPipe Tasks Vision ·
Vercel Functions · Gemini API

## Technical decisions

**On-device segmentation instead of a paid image API.**
The colour try-on runs entirely in the browser (MediaPipe hair segmentation + HSL
pixel manipulation on canvas). It costs nothing, is instant after the first load, and
the client's photo never leaves their device — which also solves the privacy requirement.

**Recolouring in HSL space.**
Only hue and saturation are replaced, keeping each pixel's original luminance. This
preserves strands, shadows and shine instead of producing a flat patch of colour.

**LLM key kept strictly server-side.**
The analysis goes through a serverless function on Vercel. The API key lives in
`process.env`, never in the browser bundle.

**Content separated from code.**
All copy, services, prices and images live in `src/content/`. The site can be
rebranded without touching a single component.

## Known trade-offs

- **SPA, not SSR.** Dynamic meta tags are set with JS, so crawlers that don't run
  JavaScript (Facebook, WhatsApp) only see the tags in `index.html`. For a local
  salon, whose traffic comes from Instagram and Google Maps, this is acceptable.
  Next.js would be the right call at larger scale.
- **The AI response is not schema-validated.** A type assertion is used; in production
  I would add Zod.
- **Segmentation changes colour only**, not length or haircut.

## Running locally

```bash
npm install
npm run dev        # frontend only
vercel dev         # frontend + serverless functions (needed for the consultant)
```

For the AI consultant, create a `.env` file in the project root:

```
GEMINI_API_KEY=your_key
```

Get a free key from Google AI Studio (https://aistudio.google.com).

## Project structure

```
api/                    serverless functions (AI analysis)
src/
  components/           components, grouped by section
  content/              all editable copy and data
  context/              cookie consent
  hooks/                reusable logic
  pages/                one file per route
  styles/               theme → base → layout → components
  utils/                pure functions (image, colour, brief)
```
