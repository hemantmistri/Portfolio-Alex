# design.md — Visual & Interaction Design

Reference mood: dark cinematic studio site (getartcraft.com). Recreate the **feeling and structure**, not the assets or wording.
Note: this spec is based on the reference's text structure; verify exact fonts/colors/spacing by opening the site in your browser and use DevTools to fine-tune.

## 1. Design principles
1. **Dark, quiet canvas; one loud accent.** Near-black background, off-white text, a single accent color.
2. **Big type does the heavy lifting.** Huge hero headline, small muted supporting text.
3. **Numbered rhythm.** Sections labeled `01/`, `02/`, cards numbered — gives an editorial, "studio" feel.
4. **Depth over decoration.** 3D object, soft glows, layered cards. No clip-art.
5. **Motion with purpose.** Reveal, parallax, hover. Always respect reduced-motion.

## 2. Color tokens (CSS variables → Tailwind theme)
| Token | Value | Use |
|---|---|---|
| `--bg` | `#0b0b0c` | page background |
| `--bg-elevated` | `#121214` | cards, nav |
| `--bg-subtle` | `#18181b` | hover surfaces |
| `--border` | `rgba(255,255,255,0.08)` | 1px borders |
| `--text` | `#f5f5f4` | primary text |
| `--text-muted` | `#a1a1aa` | secondary text |
| `--accent` | `#7c5cff` (default; buyer-changeable) | CTAs, highlights, glow |
| `--accent-soft` | `rgba(124,92,255,0.15)` | glows, badges |

## 3. Typography
- Display: a bold grotesk (e.g. **Space Grotesk** or **Sora**) via `next/font`
- Body: **Inter**
- Mono (labels, numbers, tags): **JetBrains Mono**
- Scale: Hero `clamp(3rem, 9vw, 8rem)` / tight leading (0.95) / tracking -0.03em; H2 `clamp(2rem,5vw,4rem)`; body 16–18px; labels 12px uppercase tracking 0.12em

## 4. Layout
- Container max-width 1280px, side padding 24px (mobile) / 48px (desktop)
- Section vertical padding 96px mobile / 160px desktop
- 12-col grid; cards use 1 col mobile, 2 col tablet, 3–4 col desktop
- Radius: 16px cards, 999px buttons/badges
- Sticky translucent navbar with backdrop-blur

## 5. Components
- **Button primary:** accent bg, dark text, subtle glow on hover, arrow icon slides 4px
- **Button secondary:** transparent, 1px border, fills on hover
- **Badge:** small mono text, pill, `--accent-soft` bg (e.g. "Open to work")
- **Section label:** `01 / Capabilities` mono, muted, with thin line
- **Feature card:** number top-left, tag top-right, title, description; hover: translateY(-4px) + border brightens + radial glow follows cursor
- **Project card:** 16:10 media, tags, title, arrow; hover scales media 1.03
- **Marquee:** two duplicated rows, `animation: marquee 30s linear infinite`, mask-image fade on left/right edges, pause on hover
- **Lettered blocks (A/B/C):** large letter in accent, title, one sentence, optional link
- **Footer:** 4 columns + giant faint wordmark optional

## 6. Hero (the signature piece)
- Left/center: eyebrow badge → H1 (2 lines) → 1–2 sentence sub → [Primary CTA][Secondary CTA] → tiny meta line ("Based in …  ·  Available for freelance")
- Behind/right: **real-time 3D object** (e.g. floating low-poly torus-knot, abstract crystal, or your own `.glb`) with environment lighting, slow rotation, mouse-parallax tilt, scroll-linked camera move
- Soft radial accent glow behind object, subtle grain overlay (3–4% opacity)
- Mobile: smaller canvas, no mouse parallax, DPR capped at 1.5

## 7. Motion spec
| Element | Animation | Timing |
|---|---|---|
| Hero text | fade-up, stagger by line | 0.8s, ease-out, 0.08s stagger |
| 3D object | slow rotate + mouse tilt (lerp 0.08) | continuous |
| Sections | fade/translate-up on enter viewport | 0.7s, once |
| Cards | stagger 0.06s | on enter |
| Marquee | linear loop | 30s |
| Smooth scroll | Lenis, duration 1.1 | global |
| Reduced motion | disable all above except opacity fades | — |

## 8. Responsive rules
- ≥1024px: full 3D + parallax
- 640–1023px: 3D static-rotation only
- <640px: poster image or very light 3D; stack all grids

## 9. Accessibility
- Contrast ≥ 4.5:1 for text; muted text never below `#a1a1aa` on `#0b0b0c`
- Focus ring: 2px accent outline, 2px offset
- Canvas has `aria-hidden`; meaningful info is duplicated in text
- All media has alt text; buttons have discernible labels
