import Link from "next/link";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/content/site.config";

export function Values() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <Reveal>
        <SectionLabel>02 / Why work with me</SectionLabel>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {siteConfig.values.map((value, index) => (
          <Reveal key={value.letter} delay={index * 0.06} className="h-full">
            <article className="flex h-full flex-col rounded-[1.75rem] border border-border bg-bg-elevated p-6">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-5xl font-display text-accent">{value.letter}</span>
                {value.link ? (
                  <Link href={value.link.href} className="text-sm text-muted transition-colors hover:text-text">
                    {value.link.label}
                  </Link>
                ) : null}
              </div>
              <h3 className="mb-4 text-2xl font-display text-text">{value.title}</h3>
              <p className="text-base leading-7 text-muted">{value.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
