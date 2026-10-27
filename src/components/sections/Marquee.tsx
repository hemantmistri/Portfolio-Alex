import { siteConfig } from "@/content/site.config";

export function Marquee() {
  const skills = [...siteConfig.skills, ...siteConfig.skills];

  return (
    <section aria-label="Skills marquee" className="overflow-hidden border-y border-border bg-bg-elevated/50 py-6">
      <div className="mask-fade relative flex min-h-16 w-full overflow-hidden">
        <div className="marquee-track flex min-w-max gap-6 whitespace-nowrap px-4 text-sm uppercase tracking-[0.18em] text-muted">
          {skills.map((skill, index) => (
            <span key={`${skill}-${index}`} className="inline-flex items-center gap-4">
              <span>{skill}</span>
              <span aria-hidden="true" className="text-accent">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
