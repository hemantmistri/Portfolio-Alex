# tech-stack.md

Use the **latest stable** versions at build time (`npm view <pkg> version`) and pin them in `package.json`.

## Core
| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js (App Router)** | SEO, file routing, easy Vercel deploy, what buyers expect |
| Language | **TypeScript (strict)** | Quality signal; autocomplete for buyers editing config |
| Styling | **Tailwind CSS** (v4 or latest) | Utility styling, theme tokens via CSS variables |
| Fonts | `next/font` (Space Grotesk, Inter, JetBrains Mono) | No layout shift, self-hosted |

## 3D & motion
| Need | Choice |
|---|---|
| 3D engine | **three** + **@react-three/fiber** |
| 3D helpers | **@react-three/drei** (Environment, Float, useGLTF, PerformanceMonitor, Preload) |
| Post FX (optional) | **@react-three/postprocessing** (bloom only, keep light) |
| Scroll animation | **GSAP + ScrollTrigger** (or Framer Motion / `motion` for simple reveals) |
| Smooth scroll | **lenis** |
| Model compression | `gltf-transform` / `gltfjsx` (Draco or meshopt) |

> Pick ONE animation library for UI reveals (Framer Motion **or** GSAP) to keep the bundle small. Recommended: **Framer Motion for UI**, **GSAP only if scroll-scrubbing the camera**.

## Utilities
- `clsx` + `tailwind-merge` → `cn()` helper
- `lucide-react` icons
- `zod` (optional) to validate `site.config.ts`
- `next-sitemap` or native `sitemap.ts`/`robots.ts`

## Quality tooling
- ESLint (next/core-web-vitals), Prettier + `prettier-plugin-tailwindcss`
- `@next/bundle-analyzer` (dev)
- Lighthouse CI or manual Lighthouse runs before release

## Hosting / delivery
- Deploy demo on **Vercel** (free tier)
- Package source as ZIP for **Gumroad**; optionally add a "Deploy with Vercel" button in README

## Avoid
- Heavy UI kits, Redux, CMS SDKs, unused 3D libs, large `.hdr` files (use drei's presets or a small compressed env)
