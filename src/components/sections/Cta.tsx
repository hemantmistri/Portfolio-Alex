import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/content/site.config";

export function Cta() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <Reveal>
        <SectionLabel>05 / Start a project</SectionLabel>
      </Reveal>

      <Reveal delay={0.07} className="mt-12 rounded-[2rem] border border-border bg-bg-elevated p-8 md:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-muted">Let’s build something memorable</p>
            <h2 className="mt-4 max-w-lg font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.96] tracking-[-0.06em] text-text">
              Bring a sharper story to the web.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={siteConfig.hero.primaryCta.href}>Book a call</Button>
            <Button href={siteConfig.socials[0]?.href ?? "#top"} variant="secondary">
              Follow along
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
