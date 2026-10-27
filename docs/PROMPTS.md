# PROMPTS.md — Copy-paste prompts for Claude Code / Cursor / any AI agent

## 0. Kickoff (run once)
```
Read AGENTS.md and everything in /docs. Summarize the project in 8 bullet points, list any
ambiguities, then wait for my "go". Do not write code yet.
```

## 1. Setup
```
Execute Phase 0 from docs/tasks.md. Create the Next.js app (TypeScript, Tailwind, App Router, src dir),
install the packages listed, configure fonts and theme tokens from docs/design.md, and create
site.config.ts with realistic placeholder content matching the shape in docs/architecture.md.
Stop when the Phase 0 definition of done is met and show me how to verify.
```

## 2. UI foundation + static sections
```
Execute Phases 1 and 2 from docs/tasks.md. Build Navbar, Footer, Button, Badge, SectionLabel, Reveal,
and every static section (Hero text, Marquee, Capabilities 01-07, Values A/B/C, Work grid,
Experience, CTA). Follow docs/design.md exactly for tokens, type scale, spacing and hover states.
All copy comes from site.config.ts. No 3D yet.
```

## 3. 3D hero
```
Execute Phase 3. Build HeroCanvas with react-three-fiber: dynamic import (ssr:false) with a Poster
fallback, drei Environment + Float, a placeholder torus-knot with a premium material (metalness/roughness,
accent-tinted), mouse parallax and slow rotation via refs + useFrame, scroll-linked rotation,
IntersectionObserver pause, PerformanceMonitor with DPR cap 1.5, and reduced-motion / low-end fallback.
Add a comment block explaining how to swap in a .glb with useGLTF.
```

## 4. Polish
```
Execute Phase 4. Add staggered reveals, cursor-follow glow on cards, subtle grain overlay,
project detail pages at /projects/[slug], and a 404 page. Then audit keyboard navigation and focus states
and fix issues.
```

## 5. SEO + performance
```
Execute Phase 5. Add metadata from site.config.seo, OG image, sitemap.ts, robots.ts, JSON-LD Person.
Run the bundle analyzer, report the largest chunks, and reduce anything over the budget in
docs/architecture.md. Give me a Lighthouse checklist to run manually.
```

## 6. Packaging
```
Execute Phase 6. Replace personal data with obvious placeholders, write a beginner-friendly README
(5-step setup; how to change content, colors, fonts, and the 3D model; how to deploy on Vercel),
add LICENSE.txt for single-user commercial use, and give me a ZIP checklist.
```

## 7. Gumroad listing writer
```
Write my Gumroad listing for "DepthFolio — Next.js + Tailwind 3D Portfolio Template":
a punchy title, a 2-line hook, 8 benefit bullets, a "what's included" list, a short FAQ
(license, updates, support, refunds), 3 pricing options, and 5 tweet-length launch posts.
```

## 8. Design-from-reference prompt (use with screenshots)
```
I'm attaching screenshots of a reference website. Describe its layout, section order, spacing rhythm,
typography feel, color usage and motion patterns. Then propose an ORIGINAL design that keeps the same
cinematic dark mood and numbered-section structure but uses different copy, a different accent color,
and a different 3D hero object. Output as a design spec I can paste into docs/design.md.
```

## 9. Debug helper
```
The page drops below 40fps on mobile. Profile the 3D scene: check DPR, geometry/material count,
shadows, post-processing, texture sizes, and re-renders. Propose fixes ordered by impact and apply the safest ones.
```
