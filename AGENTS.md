# AGENTS.md — Instructions for AI coding agents

You are building **DepthFolio**, a premium Next.js + Tailwind 3D portfolio template to be sold on Gumroad.
Read these first, in order: `docs/PRD.md` → `docs/design.md` → `docs/architecture.md` → `docs/tech-stack.md` → `docs/tasks.md`.

## Ground rules
1. **Follow `docs/tasks.md` in order.** Do one task (or one small group) at a time. Tick it off when done.
2. **Original work only.** The design is *inspired by* getartcraft.com's structure and mood. Never copy its text, logo, images, or code.
3. **All editable content lives in `src/content/site.config.ts`.** Never hardcode names, links, or copy inside components.
4. **TypeScript strict.** No `any`. Export types from `src/types`.
5. **Server components by default.** Add `"use client"` only for 3D, animation hooks, and interactive UI.
6. **3D is progressive enhancement.** Lazy-load with `next/dynamic` (`ssr: false`), show a poster fallback, respect `prefers-reduced-motion`, cap DPR at 1.5, pause when off-screen.
7. **Don't re-render in animation loops.** Use refs + `useFrame` for mouse/scroll values.
8. **Accessibility is required:** semantic HTML, visible focus, alt text, 4.5:1 contrast, keyboard navigation.
9. **Tailwind only** for styling; colors come from CSS variable tokens defined in `globals.css`. No inline hex values in components.
10. **Keep dependencies minimal.** Ask before adding a new package; justify its bundle cost.

## Code style
- File names: `PascalCase.tsx` for components, `camelCase.ts` for hooks/lib, `kebab-case` for folders.
- Small components (< 150 lines). Extract helpers to `lib/` and hooks to `hooks/`.
- Prefer composition over props explosion. Use `cn()` for conditional classes.
- Comments explain *why*, not *what*. Add a short header comment to each 3D file explaining how to swap the model.

## Commands
```bash
npm run dev        # local dev
npm run build      # must pass before every phase ends
npm run lint       # must pass
```

## Definition of done (every task)
- Builds and lints clean, no console errors/warnings
- Responsive at 360 / 768 / 1280 / 1920 px
- Works with reduced motion
- No hardcoded content outside `site.config.ts`
- Matches `docs/design.md` tokens

## When unsure
Choose the simpler option, leave a `// TODO(decision):` comment, and mention it in your summary. Do not invent features outside the PRD.

## Output format after each task
1. What you changed (files)
2. How to verify it
3. Any decisions or trade-offs
4. The next task from `tasks.md`
