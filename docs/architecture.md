# architecture.md

## 1. Principles
- **Content separated from code:** buyers edit `site.config.ts`, not components.
- **Server components by default;** client components only where interactivity/3D is needed.
- **3D is progressive enhancement:** page works without it.

## 2. Folder structure
```
depthfolio/
├─ public/
│  ├─ models/            # .glb (compressed)
│  ├─ images/            # og-image.png, project previews, poster.webp
│  └─ favicon.svg
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx      # fonts, metadata, providers
│  │  ├─ page.tsx        # composes sections
│  │  ├─ projects/[slug]/page.tsx
│  │  ├─ sitemap.ts
│  │  ├─ robots.ts
│  │  └─ globals.css     # Tailwind + theme tokens
│  ├─ components/
│  │  ├─ ui/             # Button, Badge, SectionLabel, Card, Marquee
│  │  ├─ layout/         # Navbar, Footer, MobileMenu
│  │  ├─ sections/       # Hero, Skills, Capabilities, Values, Work, Experience, Testimonials, Cta
│  │  └─ three/          # HeroCanvas, HeroScene, Model, Lights, Fallback
│  ├─ content/
│  │  └─ site.config.ts  # ALL editable content
│  ├─ hooks/             # useReducedMotion, useIsMobile, useMouseParallax
│  ├─ lib/               # cn.ts, seo.ts, constants.ts
│  └─ types/             # content.ts (types for site.config)
├─ docs/                 # these md files
├─ AGENTS.md
├─ next.config.ts
├─ tailwind / postcss config
└─ README.md
```

## 3. Data flow
```
site.config.ts ──► page.tsx (server) ──► Section components (props)
                                      └► HeroCanvas (client, dynamic, ssr:false)
```

### `site.config.ts` shape (types in `src/types/content.ts`)
```ts
export interface SiteConfig {
  name: string; role: string; email: string; location: string;
  availability: { label: string; open: boolean };
  hero: { eyebrow: string; titleLines: string[]; subtitle: string;
          primaryCta: Link; secondaryCta: Link };
  skills: string[];                       // marquee
  capabilities: { id: string; title: string; description: string; tag: string }[];
  values: { letter: "A"|"B"|"C"; title: string; description: string; link?: Link }[];
  projects: { slug: string; title: string; summary: string; tags: string[];
              image: string; liveUrl?: string; repoUrl?: string }[];
  experience: { period: string; title: string; org: string; description: string }[];
  socials: { label: string; href: string }[];
  seo: { title: string; description: string; ogImage: string; url: string };
  theme: { accent: string };
}
```

## 4. 3D architecture
- `HeroCanvas` (client): `<Canvas dpr={[1, 1.5]} frameloop="always" gl={{ antialias: true, powerPreference: "high-performance" }}>`
- Loaded via `next/dynamic(() => import(...), { ssr: false, loading: () => <Poster /> })`
- `HeroScene`: lights + `<Environment preset="city" />` + `<Float>` wrapping `<Model />`
- Mouse/scroll state kept in refs (not React state) → updated in `useFrame` to avoid re-renders
- `PerformanceMonitor` lowers DPR on slow devices; render `<Poster />` if `prefers-reduced-motion` or `navigator.hardwareConcurrency <= 2`
- Mount canvas only when hero is in viewport (IntersectionObserver); pause when off-screen

## 5. Animation architecture
- Reveal wrapper component `<Reveal>` (Framer Motion `whileInView`, `once: true`)
- Lenis initialized once in a client `SmoothScroll` provider in `layout.tsx`
- Marquee is pure CSS (no JS)

## 6. Performance budget
| Metric | Target |
|---|---|
| JS (initial, gz) | < 150 KB excluding the lazy 3D chunk |
| 3D chunk (gz) | < 250 KB + model ≤ 1.5 MB |
| LCP | < 2.5 s |
| CLS | < 0.05 |

## 7. SEO
- `metadata` export in `layout.tsx` generated from `site.config.seo`
- Static OG image, `sitemap.ts` includes `/` and `/projects/*`
- JSON-LD `Person` script in layout

## 8. Deployment
Vercel: connect repo → set `NEXT_PUBLIC_SITE_URL` → deploy. No other env vars required.
