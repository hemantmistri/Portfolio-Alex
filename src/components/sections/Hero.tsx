import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { HeroCanvas } from "@/components/three/HeroCanvas";
import { siteConfig } from "@/content/site.config";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:pb-20 lg:pt-24">
        <div className="flex flex-col justify-center">
          <Reveal className="mb-6">
            <Badge>{siteConfig.hero.eyebrow}</Badge>
          </Reveal>

          <Reveal delay={0.08} className="space-y-4">
            <h1 className="max-w-2xl font-display text-[clamp(3.3rem,8vw,8rem)] leading-[0.9] tracking-[-0.06em] text-text">
              {siteConfig.hero.titleLines.map((line, index) => (
                <span key={`${line}-${index}`} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </Reveal>

          <Reveal delay={0.12} className="max-w-xl">
            <p className="text-lg leading-8 text-muted">{siteConfig.hero.subtitle}</p>
          </Reveal>

          <Reveal delay={0.16} className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={siteConfig.hero.primaryCta.href}>{siteConfig.hero.primaryCta.label}</Button>
            <Button href={siteConfig.hero.secondaryCta.href} variant="secondary">
              {siteConfig.hero.secondaryCta.label}
            </Button>
          </Reveal>

          <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted">
            <span>{siteConfig.location}</span>
            <span className="inline-flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-400" aria-hidden="true" />
              {siteConfig.availability.open ? "Available for work" : "Not available"}
            </span>
          </Reveal>
        </div>

        <Reveal delay={0.14} className="relative flex min-h-[420px] items-center justify-center">
          <div className="absolute inset-10 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
          <div className="relative h-[420px] w-full max-w-[520px] rounded-[2rem] border border-border bg-bg-elevated/75 shadow-[0_0_80px_rgba(124,92,255,0.12)] backdrop-blur-sm">
            <HeroCanvas />
            <div className="absolute inset-6 rounded-[1.5rem] border border-border/60" aria-hidden="true" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
