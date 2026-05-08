# Lumera Landing Page

A dark, luxurious marketing site for the Lumera iOS skincare wellness app. Built around the actual app screenshots (splash, capture, skin estimate, personalized plan, progress, allergies, routine profile) shown inside realistic iPhone frames with warm gold glow on near-black surfaces.

## Routes

- `/` — full landing page with all 8 sections from the brief
- `/features` — deeper feature breakdown, each feature paired with a large mockup and supporting copy; its own SEO metadata
- Shared `Header` (logo + nav: Features, Waitlist) and `Footer` (legal disclaimer, "Launching soon on iOS")

## Design system (`src/styles.css`)

Dark luxury, no purple/blue SaaS gradients.

- **Surfaces**: `--background` near-black `oklch(0.08 0.01 60)`, `--card` charcoal `oklch(0.13 0.012 70)`, glass overlay `oklch(0.18 0.015 70 / 0.5)` with subtle border `oklch(1 0 0 / 0.08)`
- **Foreground**: pearl `oklch(0.97 0.005 80)`; muted `oklch(0.7 0.02 80)`
- **Gold accents** (matched to the app screens):
  - `--gold` `oklch(0.82 0.13 82)` (warm amber)
  - `--gold-soft` `oklch(0.88 0.09 85)`
  - `--gold-deep` `oklch(0.62 0.13 70)`
- **Gradients & shadows as tokens**:
  - `--gradient-gold`: linear soft→deep gold (used on CTA buttons, like the app's "Continue" pill)
  - `--gradient-radial-glow`: radial warm gold glow fading to transparent (hero halo, section accents)
  - `--shadow-gold-glow`: large soft gold drop shadow under iPhone frames and primary CTAs
  - `--shadow-elegant`: deep neutral shadow for cards
- **Radii**: cards 12px, pills full, iPhone frame 44px
- **Type pairing**:
  - Display: `Cormorant Garamond` (serif, light weight) for hero headline + section titles — refined, editorial, distinct from generic SaaS
  - Body/UI: `Inter Tight` for paragraphs and buttons
  - Eyebrow: wide-tracked uppercase Inter Tight for the "CLEAR SKIN. CONFIDENCE." style strips
- All component code uses semantic tokens (`bg-background`, `text-gold`, `shadow-[var(--shadow-gold-glow)]`), never raw hex.

## Assets

Copy all 7 uploaded screenshots into `src/assets/screens/`:
- `splash.png` — Lumera logo splash (used in hero glow stack)
- `capture.png` — Capture Your Face
- `estimate.png` — Skin Estimate (scan section hero)
- `plan.png` — Personalized Plan
- `progress.png` — Track. Improve. Maintain.
- `allergies.png` — Allergies & sensitivities
- `routine.png` — Routine Profile

Imported as ES6 modules; descriptive alt text on every `<img>`.

## Reusable components (`src/components/lumera/`)

- `IPhoneMockup` — rounded 44px frame, dynamic-island notch, subtle inner border, gold-glow drop shadow; props: `src`, `alt`, `size` (sm/md/lg), `glow` (on/off), `rotate` (deg). Uses native `<img loading="lazy">`.
- `GoldGlow` — absolutely-positioned radial gradient layer for backgrounds/halos.
- `GlassCard` — charcoal surface, 1px gold-tinted border, subtle inner highlight, 12–16px radius.
- `GoldButton` / `GhostButton` — primary CTA matches the app's gold pill; ghost matches the app's dark "Log In" pill.
- `SectionHeading` — eyebrow + serif h2 + muted subline.
- `WaitlistForm` — email input + submit, Zod validation, calls server fn, success/error states with toast (sonner).
- `ParallaxMockup` — wraps `IPhoneMockup` with framer-motion `useScroll` + `useTransform` for gentle Y translation.
- `Reveal` — framer-motion fade-up on scroll for sections.

## Page structure (`/`)

1. **Header** — Lumera wordmark (gold serif) left; nav + "Join Waitlist" CTA right; transparent over hero, glass-on-scroll.
2. **Hero** — near-full viewport. Background: black + large radial gold glow + subtle film grain. Left: eyebrow "iOS · Skincare Wellness", H1 (serif) "Your Skin, Understood.", supporting copy, primary `Join the Waitlist` (anchor to waitlist), secondary `Explore Features` (anchor to features section / link to /features). Right: layered stack of 3 iPhones — center `splash.png` (largest, slight gold halo), `estimate.png` behind-left rotated -8°, `plan.png` behind-right rotated +8°, all with parallax.
3. **Trust strip** — 4 small gold icons + label row: Photo-guided insights · Personalized routines · Progress tracking · Nutrition & hydration. Thin gold hairline dividers.
4. **Features (4 blocks)** — alternating left/right layout, each with one large iPhone mockup + GlassCard copy block:
   - Personalized Skin Plan → `plan.png`
   - Progress Timeline → `progress.png`
   - Nutrition & Hydration → uses `plan.png` cropped detail callout + custom copy (no separate screen provided)
   - Product Recommendations → `allergies.png`
5. **Photo-Guided Skin Estimates** — full-bleed dark section, large `estimate.png` centered with gold halo behind. Headline + careful wellness-not-diagnosis copy. Small disclaimer chip beneath.
6. **3-step workflow** — horizontal connected timeline (gold hairline with gold dots): "Capture your skin" (`capture.png` thumbnail), "Get a personalized routine" (`routine.png` thumbnail), "Track progress and habits" (`progress.png` thumbnail). Stacks vertically on mobile with vertical connector.
7. **App preview gallery** — large dark section, 3–4 iPhones in staggered grid using best remaining screens with short captions ("Daily plan", "Visible progress", "Personalized for you", "Capture safely").
8. **Trust & safety** — calm GlassCard grid: General wellness guidance · Patch-test reminders · Allergy-aware suggestions · Not a medical diagnosis. Soft gold icons, no alarming styling.
9. **Waitlist CTA** — centered, gold radial glow background, serif H2 "Start building better skin habits.", `WaitlistForm`, footnote "Launching soon on iOS."
10. **Footer** — wordmark, small links (Privacy, Terms placeholders), © Lumera, disclaimer line.

## `/features` page

Same header/footer. Hero with eyebrow "Features", serif H1 "Everything Lumera does for your skin." Then 6 alternating mockup+copy blocks (one per real screen): Capture, Skin Estimate, Personalized Plan, Progress, Allergies & Sensitivities, Routine Profile. Each with bullet list of what the screen lets the user do. Closes with the same waitlist CTA component. Own `head()` meta (title, description, og:title, og:description, og:image = `estimate.png`).

## SEO / head

Per route via `head()` — distinct title and description for `/` and `/features`. Single H1 per page. Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`). Alt text on every screenshot describing the screen content. Viewport meta already present in `__root.tsx`.

## Animations

- Framer Motion: fade-up on section enter (stagger children), gentle parallax on hero + gallery iPhones, scale-in on glass cards, hover lift + gold glow on CTAs and feature cards.
- Smooth scroll via `scrollRestoration` (already on) + `behavior: smooth` for in-page anchors.
- Subtle pulsing gold glow behind hero phone (CSS keyframes, ~6s ease-in-out).

## Waitlist backend (Lovable Cloud)

- Enable Lovable Cloud.
- Migration: `waitlist_signups (id uuid pk default gen_random_uuid(), email text not null unique, source text default 'landing', created_at timestamptz default now())`.
- RLS: enabled. Policy: anonymous `INSERT` allowed (`with check (true)`); no `SELECT` policy → public cannot read emails.
- Server function `joinWaitlist` in `src/lib/waitlist.functions.ts`: `createServerFn({ method: 'POST' })` with Zod validator (`email().trim().max(255)`) and handler using `supabaseAdmin` to insert. Handles duplicate-email error gracefully (returns `{ ok: true, alreadyJoined: true }`).
- `WaitlistForm` calls it via `useServerFn`, shows sonner toast + persistent inline success state.

## Responsiveness

- Desktop: side-by-side hero, alternating feature rows, 4-up galleries.
- Tablet: 2-up galleries, stacked feature rows from md breakpoint.
- Mobile: single-column, iPhones scale to ~280–320px wide and stack with generous vertical spacing; sticky header collapses CTA to icon+short label; trust strip wraps to 2x2.

## Content & compliance guardrails

All copy uses the brief's wording. No medical claims, no acne/mole/cancer detection language, no fake ratings/awards/testimonials, no "guaranteed results." Scan section explicitly states: "Lumera helps you organize visual skin observations and routine decisions. It is not a medical device and does not replace professional care." Same disclaimer echoed in footer.

## File-level changes

New:
- `src/routes/features.tsx`
- `src/components/lumera/Header.tsx`, `Footer.tsx`, `IPhoneMockup.tsx`, `GoldGlow.tsx`, `GlassCard.tsx`, `GoldButton.tsx`, `SectionHeading.tsx`, `Reveal.tsx`, `ParallaxMockup.tsx`, `WaitlistForm.tsx`
- `src/components/lumera/sections/Hero.tsx`, `TrustStrip.tsx`, `Features.tsx`, `ScanSection.tsx`, `Workflow.tsx`, `Gallery.tsx`, `Safety.tsx`, `WaitlistCTA.tsx`
- `src/lib/waitlist.functions.ts`
- `src/assets/screens/*.png` (7 files)
- Supabase migration for `waitlist_signups`

Modified:
- `src/styles.css` — add gold tokens, gradients, shadow tokens, font imports
- `src/routes/__root.tsx` — update default head meta to Lumera; keep shell
- `src/routes/index.tsx` — replace placeholder with composed sections + per-route head meta

Install: `framer-motion`, `zod` (verify), Google Fonts via `<link>` in `__root.tsx` head.

Dependencies on Lovable Cloud being enabled before the waitlist server fn ships.