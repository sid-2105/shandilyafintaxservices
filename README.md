# Fintax Services LLP — Website

A modern, responsive Next.js (App Router) marketing site for a financial
reporting, tax advisory and compliance practice.

## Design direction

- **Palette** — deep ink navy, warm paper off-white, emerald (trust/growth)
  and a muted brass accent (precision, premium), evoking a ledger/statement
  rather than a generic fintech gradient.
- **Type** — Fraunces (display serif) for institutional gravitas, Public
  Sans for body copy, IBM Plex Mono for data, codes and labels — mirroring
  how figures actually appear in financial statements.
- **Signature motif** — "the ledger line": a repeating horizontal rule
  texture, statement-style rows, and journal "entries" used for the process
  timeline, tying every section back to the subject matter.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Assembles all sections
  globals.css         Tailwind base + design tokens
components/
  Header.tsx          Sticky nav with mobile menu
  Hero.tsx            Hero banner with animated statement card
  Counter.tsx          Animated number counter (used in Hero)
  About.tsx           About Company
  Services.tsx        Our Services (11 services, ledger rows)
  WhyChooseUs.tsx      Why Choose Us
  Industries.tsx       Industries We Serve
  Process.tsx          How We Work (5-step journal entries)
  Testimonials.tsx     Client Testimonials
  FAQs.tsx             FAQ accordion
  CTA.tsx              Call to Action banner
  ContactPreview.tsx   Contact info + enquiry form
  Footer.tsx           Footer
```

## Customizing

- Update copy, phone/email/address in `components/ContactPreview.tsx` and
  `components/Footer.tsx`.
- Palette and type scale live in `tailwind.config.ts` under `theme.extend`.
- All sections are individually editable components — reorder or remove
  any of them directly in `app/page.tsx`.

## Deploying

The project deploys as-is to Vercel, Netlify, or any Node hosting that
supports Next.js 14. Run `npm run build` to produce a production build.
