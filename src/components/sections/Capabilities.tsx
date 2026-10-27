import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/content/site.config";

export function Capabilities() {
  return (
    <section id="capabilities" className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <Reveal>
        <SectionLabel>01 / Capabilities</SectionLabel>
      </Reveal>

      <Reveal delay={0.08} className="mt-8 flex items-end justify-between gap-4">
        <h2 className="max-w-xl font-display text-[clamp(2.2rem,5vw,4rem)] leading-none tracking-[-0.06em] text-text">
          Built to feel premium from the first scroll.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {siteConfig.capabilities.map((capability, index) => (
          <Reveal key={capability.id} delay={index * 0.04} className="group h-full">
            <article className="group relative h-full overflow-hidden rounded-[1.5rem] border border-border bg-bg-elevated p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-white/30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,92,255,0.14),transparent_40%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
              <div className="relative flex h-full flex-col">
                <div className="mb-8 flex items-center justify-between gap-2 text-xs uppercase tracking-[0.16em] text-muted">
                  <span className="font-mono text-text">{capability.id}</span>
                  <span className="rounded-full bg-accent-soft px-2 py-1 text-[0.55rem] tracking-[0.18em] text-text">{capability.tag}</span>
                </div>
                <h3 className="mb-4 text-2xl font-display text-text">{capability.title}</h3>
                <p className="text-base leading-7 text-muted">{capability.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
