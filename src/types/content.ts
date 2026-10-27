export interface Link {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterColumn {
  title: string;
  links: Link[];
}

export interface Availability {
  label: string;
  open: boolean;
}

export interface HeroContent {
  eyebrow: string;
  titleLines: string[];
  subtitle: string;
  primaryCta: Link;
  secondaryCta: Link;
  modelPath: string;
  posterPath: string;
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  tag: string;
}

export interface ValueBlock {
  letter: "A" | "B" | "C";
  title: string;
  description: string;
  link?: Link;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface ExperienceItem {
  period: string;
  title: string;
  org: string;
  description: string;
}

export interface SeoConfig {
  title: string;
  description: string;
  ogImage: string;
  url: string;
}

export interface ThemeConfig {
  accent: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  email: string;
  location: string;
  availability: Availability;
  navigation: Link[];
  hero: HeroContent;
  skills: string[];
  capabilities: Capability[];
  values: ValueBlock[];
  projects: Project[];
  experience: ExperienceItem[];
  socials: Link[];
  footerColumns: FooterColumn[];
  seo: SeoConfig;
  theme: ThemeConfig;
}
