import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/content/site.config";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <Reveal>
        <SectionLabel>04 / Experience</SectionLabel>
      </Reveal>

      <div className="mt-12 space-y-8">
        {siteConfig.experience.map((item, index) => (
          <Reveal key={`${item.period}-${item.org}`} delay={index * 0.05}>
            <article className="grid gap-4 rounded-[1.5rem] border border-border bg-bg-elevated p-6 md:grid-cols-[160px_1fr] md:items-start">
              <div className="font-mono text-sm uppercase tracking-[0.16em] text-muted">{item.period}</div>
              <div>
                <h3 className="text-2xl font-display text-text">{item.title}</h3>
                <p className="mt-2 text-base font-medium text-accent">{item.org}</p>
                <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{item.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
