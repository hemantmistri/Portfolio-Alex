import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/content/site.config";

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <Reveal>
        <SectionLabel>03 / Selected work</SectionLabel>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {siteConfig.projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.05} className="group h-full">
            <article className="group h-full overflow-hidden rounded-[1.5rem] border border-border bg-bg-elevated transition-all duration-300 hover:-translate-y-1 hover:border-white/25">
              <div className="overflow-hidden border-b border-border bg-bg-subtle">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="h-[240px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border bg-bg-subtle px-2 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-display text-text">{project.title}</h3>
                  <Link href={`/projects/${project.slug}`} aria-label={`Open ${project.title}`} className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-bg-subtle text-text transition-colors hover:bg-accent-soft">
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
                <p className="mt-4 text-base leading-7 text-muted">{project.summary}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
