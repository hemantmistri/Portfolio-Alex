# PRD — DepthFolio (working name)

A premium Next.js + Tailwind **3D portfolio / landing page template**, sold on Gumroad.
Design inspiration: the structure and mood of getartcraft.com (dark, cinematic, numbered sections, marquee ticker, bold type). **Do not copy its text, logo, images, or code — build an original design.**

## 1. Product summary
| Item | Value |
|---|---|
| Product | Single-page 3D portfolio template (+ optional /projects/[slug] pages) |
| Buyer | Freelance developers, designers, students, indie makers who want a standout portfolio |
| Sold via | Gumroad (one-time purchase, lifetime updates) |
| Launch price | $19 (raise to $29–39 after first reviews) |
| Delivery | ZIP of full source + README + 1-page setup guide + live demo link |

## 2. Goals
1. Looks like a $2,000 custom site, customizable in under 30 minutes.
2. Lighthouse: Performance ≥ 90 desktop, ≥ 75 mobile; Accessibility ≥ 95.
3. All user content lives in one config file (no hunting through components).
4. Clean enough code that buyers learn from it (strong word-of-mouth driver).

## 3. Non-goals (v1)
- No CMS, no auth, no database, no payments.
- No Blender pipeline required; ship with free/self-made `.glb` models.
- No multi-language support (v2).

## 4. Target user stories
- As a developer, I replace my name, projects, and links in `site.config.ts` and deploy to Vercel.
- As a designer, I change accent color and fonts from one theme file.
- As a visitor, I scroll through a cinematic hero, see featured work, and contact the owner quickly.
- As a visitor on a phone or low-power device, I still get a fast, good-looking page (3D degrades gracefully).
- As a visitor with reduced-motion enabled, I get no heavy animation.

## 5. Page structure (mirrors the reference's rhythm)
| # | Section | Description |
|---|---|---|
| — | Navbar | Logo, anchor links, "Hire me" button, mobile menu |
| Hero | 3D hero | Huge headline, short sub-line, 2 CTAs (primary/secondary), a real-time 3D object reacting to mouse/scroll, small "Available for work · Location" badges |
| Ticker | Skills marquee | Infinite horizontal loop of skills/tools (doubled list, pauses on hover) |
| 01 | Capabilities | Numbered cards (01–07) with title, short description, small tag; hover lift + glow |
| 02 | Why work with me | 3 lettered blocks (A/B/C): e.g. Open to collaborate, Fast delivery, Clear communication |
| 03 | Selected work | Project grid/cards with image or video preview, tags, links; click opens detail page |
| 04 | Experience / Education | Timeline list |
| 05 | Testimonials (optional toggle) | Quotes or "Made with" proof cards |
| CTA | "Start a project" | Large closing headline, email button, social links |
| Footer | Footer | Short bio line, link columns (Pages, Social, Resources), copyright |

## 6. Functional requirements
- **FR1** All text, links, projects, skills, socials come from `src/content/site.config.ts`.
- **FR2** 3D hero loads lazily (`next/dynamic`, `ssr: false`) with a static poster fallback.
- **FR3** Smooth scroll + scroll-triggered reveal animations.
- **FR4** Contact: `mailto:` CTA in v1; optional form via Formspree/Resend documented.
- **FR5** SEO: metadata, Open Graph image, sitemap, robots, JSON-LD Person schema.
- **FR6** Dark theme default; light-theme tokens prepared (toggle is v1.1).
- **FR7** Detect `prefers-reduced-motion` and low-end devices → disable 3D, show poster.
- **FR8** Fully responsive from 360px to 2560px.

## 7. Non-functional requirements
- 3D model files ≤ 1.5 MB total (Draco/meshopt compressed).
- Largest Contentful Paint < 2.5 s on 4G.
- No layout shift from fonts or canvas (reserve height).
- Keyboard navigable, visible focus states, semantic landmarks, alt text.

## 8. Gumroad package
- `/depthfolio-source.zip` (clean, `node_modules` excluded)
- `README.md` quick start + `DOCS.pdf` (optional)
- Cover image 1280×720, 5 screenshots, 30-second demo video/GIF, live demo URL
- License: single-user commercial use, no resale of the template itself

## 9. Success metrics
- First 10 sales within 60 days; average rating ≥ 4.5
- Refund rate < 5%; support emails per sale < 0.3

## 10. Risks
| Risk | Mitigation |
|---|---|
| 3D hurts performance | Lazy load, DPR cap, poster fallback, small models |
| Looks too similar to reference | Original copy, palette, 3D object, layout details |
| Buyers struggle to set up | One config file, 5-step README, video walkthrough |
