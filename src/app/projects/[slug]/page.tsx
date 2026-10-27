import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site.config";

export function generateStaticParams() {
  return siteConfig.projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = siteConfig.projects.find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-12">
      <Link href="/" className="mb-8 inline-flex text-sm text-muted transition-colors hover:text-text">
        ← Back to all work
      </Link>

      <div className="overflow-hidden rounded-[2rem] border border-border bg-bg-elevated">
        <Image src={project.image} alt={project.title} width={1200} height={800} className="h-[420px] w-full object-cover" />
        <div className="space-y-8 p-8 md:p-12">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-border bg-bg-subtle px-2 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-muted">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display text-[clamp(2.6rem,6vw,5rem)] leading-none tracking-[-0.06em] text-text">
            {project.title}
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-muted">{project.summary}</p>

          <div className="flex flex-wrap gap-4">
            {project.liveUrl ? <Button href={project.liveUrl}>Visit live site</Button> : null}
            {project.repoUrl ? (
              <Button href={project.repoUrl} variant="secondary">
                View repository
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}
