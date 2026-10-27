import type { SiteConfig } from "@/types/content";

export const siteConfig: SiteConfig = {
  name: "Alex Rivera",
  role: "Creative developer",
  email: "hello@alexrivera.dev",
  location: "Lisbon, PT",
  availability: {
    label: "Open for freelance",
    open: true,
  },
  navigation: [
    { label: "Capabilities", href: "#capabilities" },
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Portfolio / 2026",
    titleLines: ["Design with", "real depth."],
    subtitle:
      "I build cinematic product sites and interactive experiences for studios and independent teams who care about craft.",
    primaryCta: { label: "Hire me", href: "mailto:hello@alexrivera.dev" },
    secondaryCta: { label: "See selected work", href: "#work" },
    modelPath: "/models/hero-model.glb",
    posterPath: "/images/hero-poster.svg",
  },
  skills: [
    "Next.js",
    "TypeScript",
    "WebGL",
    "Three.js",
    "Motion design",
    "Figma",
    "Tailwind",
    "GSAP",
    "Blender",
    "Vercel",
  ],
  capabilities: [
    {
      id: "01",
      title: "Product sites",
      description:
        "Launch pages with a clear story, sharp type, and motion that supports the product instead of competing with it.",
      tag: "Web",
    },
    {
      id: "02",
      title: "Interactive 3D",
      description:
        "Lightweight scenes that load fast, respect reduced motion, and still feel premium on a phone.",
      tag: "WebGL",
    },
    {
      id: "03",
      title: "Design systems",
      description:
        "Token-based UI kits so your marketing site and product UI stay on the same visual language.",
      tag: "UI",
    },
    {
      id: "04",
      title: "Motion language",
      description:
        "Scroll, hover, and entrance timing that feels intentional — never noisy, always on-brand.",
      tag: "Motion",
    },
    {
      id: "05",
      title: "Front-end architecture",
      description:
        "App Router, typed content, and a codebase a future teammate can actually ship from.",
      tag: "Code",
    },
    {
      id: "06",
      title: "Performance",
      description:
        "Budgets for LCP, JS, and 3D so the site still feels instant on mid-range hardware.",
      tag: "Speed",
    },
    {
      id: "07",
      title: "Launch support",
      description:
        "Copy polish, SEO metadata, and a calm handoff so you can deploy without a second contractor.",
      tag: "Ship",
    },
  ],
  values: [
    {
      letter: "A",
      title: "Open to collaborate",
      description:
        "I work with founders, design studios, and in-house teams. Clear briefs, async-friendly, no ego.",
      link: { label: "Start a project", href: "mailto:hello@alexrivera.dev" },
    },
    {
      letter: "B",
      title: "Fast, honest delivery",
      description:
        "Scoped milestones, weekly cuts, and no surprise scope. You see the site taking shape early.",
    },
    {
      letter: "C",
      title: "Clear communication",
      description:
        "Written updates, recorded walkthroughs, and decisions documented so nothing lives only in Slack.",
    },
  ],
  projects: [
    {
      slug: "northline",
      title: "Northline",
      summary:
        "A dark, editorial marketing site for a climate-data studio — numbered chapters and a live globe.",
      tags: ["Next.js", "Three.js", "Brand"],
      image: "/images/projects/northline.svg",
      liveUrl: "https://example.com/northline",
      repoUrl: "https://github.com/example/northline",
    },
    {
      slug: "kiln",
      title: "Kiln",
      summary:
        "Portfolio and case-study system for a ceramics atelier, built around slow scroll and large type.",
      tags: ["Design", "Motion"],
      image: "/images/projects/kiln.svg",
      liveUrl: "https://example.com/kiln",
    },
    {
      slug: "orbit-os",
      title: "Orbit OS",
      summary:
        "Product landing page for a spatial-computing toolkit, with a lazy-loaded device scene.",
      tags: ["Product", "WebGL"],
      image: "/images/projects/orbit-os.svg",
      liveUrl: "https://example.com/orbit-os",
      repoUrl: "https://github.com/example/orbit-os",
    },
    {
      slug: "atelier-index",
      title: "Atelier Index",
      summary:
        "Searchable archive of independent studios, designed as a quiet catalog rather than a dashboard.",
      tags: ["Next.js", "Content"],
      image: "/images/projects/atelier-index.svg",
    },
  ],
  experience: [
    {
      period: "2023 — Now",
      title: "Independent creative developer",
      org: "Studio Rivera",
      description:
        "Lead design-engineering for product launches, brand sites, and interactive exhibits.",
    },
    {
      period: "2021 — 2023",
      title: "Front-end engineer",
      org: "Harbor & Co.",
      description:
        "Shipped marketing systems and motion libraries for venture-backed consumer brands.",
    },
    {
      period: "2019 — 2021",
      title: "B.A. Interaction Design",
      org: "Lisbon School of Design",
      description:
        "Focused on spatial interfaces, typography, and prototyping in the browser.",
    },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/example" },
    { label: "LinkedIn", href: "https://linkedin.com/in/example" },
    { label: "Dribbble", href: "https://dribbble.com/example" },
    { label: "Email", href: "mailto:hello@alexrivera.dev" },
  ],
  footerColumns: [
    {
      title: "Pages",
      links: [
        { label: "Home", href: "#top" },
        { label: "Capabilities", href: "#capabilities" },
        { label: "Work", href: "#work" },
        { label: "Experience", href: "#experience" },
      ],
    },
    {
      title: "Social",
      links: [
        { label: "GitHub", href: "https://github.com/example" },
        { label: "LinkedIn", href: "https://linkedin.com/in/example" },
        { label: "Dribbble", href: "https://dribbble.com/example" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Email", href: "mailto:hello@alexrivera.dev" },
        { label: "Project brief", href: "mailto:hello@alexrivera.dev?subject=Project%20brief" },
        { label: "Read the work", href: "#work" },
      ],
    },
  ],
  seo: {
    title: "Alex Rivera — Creative developer",
    description:
      "Cinematic product sites and interactive 3D experiences. Available for freelance in Lisbon and remotely.",
    ogImage: "/images/og-image.svg",
    url: "https://alexrivera.dev",
  },
  theme: {
    accent: "#7c5cff",
  },
};
