# tasks.md — Build Plan

Work top to bottom. Each task = one small commit. Check off when done. Each phase ends with "Definition of done".

## Phase 0 — Setup
- [x] Create Next.js app (TS, Tailwind, App Router, ESLint, `src/` dir)
- [x] Install: `three @react-three/fiber @react-three/drei framer-motion lenis clsx tailwind-merge lucide-react`
- [x] Configure fonts with `next/font`; add theme tokens to `globals.css`
- [x] Add `cn()` helper, Prettier + Tailwind plugin, path alias `@/`
- [x] Create `types/content.ts` and `content/site.config.ts` with placeholder data
**DoD:** `npm run dev` shows a dark blank page with correct fonts and tokens.

## Phase 1 — UI foundation
- [ ] `Button` (primary/secondary), `Badge`, `SectionLabel`, `Reveal`
- [ ] `Navbar` (sticky, blur, anchor links, mobile menu)
- [ ] `Footer` (columns from config)
- [ ] `SmoothScroll` provider (Lenis)
**DoD:** Navbar + footer responsive, keyboard accessible.

## Phase 2 — Static sections (no 3D yet)
- [ ] Hero text layout + CTAs + meta line
- [ ] Skills `Marquee` (CSS, doubled list, edge fade, pause on hover)
- [ ] Capabilities numbered cards (01–07) with hover glow
- [ ] Values A/B/C blocks
- [ ] Selected Work grid + `ProjectCard`
- [ ] Experience timeline
- [ ] Final CTA section
**DoD:** Full page looks good on mobile + desktop with zero 3D.

## Phase 3 — 3D hero
- [x] `HeroCanvas` with dynamic import + poster fallback
- [x] `HeroScene`: scene lighting, `Float`, and framed model
- [x] Load the hero `.glb` via `useGLTF`
- [x] Mouse parallax + slow rotation (refs + `useFrame`)
- [ ] Scroll-linked camera/rotation tween
- [x] IntersectionObserver to pause when off-screen
- [x] `PerformanceMonitor` + DPR cap; reduced-motion/low-end fallback
**DoD:** 60fps on a mid laptop; mobile loads fast; reduced-motion shows poster.

## Phase 4 — Polish
- [ ] Section reveal + stagger animations
- [ ] Cursor-follow glow on cards
- [ ] Grain overlay, focus rings, hover states
- [ ] Project detail page `/projects/[slug]`
- [ ] 404 page
**DoD:** No janky animations; passes keyboard-only walkthrough.

## Phase 5 — SEO & performance
- [ ] Metadata, OG image, `sitemap.ts`, `robots.ts`, JSON-LD
- [ ] Optimize images (`next/image`), compress model, run bundle analyzer
- [ ] Lighthouse: Perf ≥ 90 (desktop), A11y ≥ 95, SEO 100
**DoD:** Scores recorded in README.

## Phase 6 — Packaging for Gumroad
- [ ] Replace personal data with clear placeholders in `site.config.ts`
- [ ] Write README (5-step setup, how to change content/colors/3D model, deploy)
- [ ] Add LICENSE.txt (single-user commercial use)
- [ ] Remove `node_modules`, `.next`, `.git`; zip
- [ ] Deploy live demo on Vercel
- [ ] Create cover image, 5 screenshots, 30s demo video/GIF
- [ ] Write Gumroad listing (title, bullets, FAQ, "what's included")
- [ ] Publish at $19; share on X, LinkedIn, Reddit (r/webdev, r/reactjs), Dev.to
**DoD:** A stranger can set up the template in under 30 minutes using only the README.

## Backlog (v1.1+)
- Light/dark toggle · Contact form (Resend) · Blog (MDX) · i18n · Second 3D scene variant · Figma file
