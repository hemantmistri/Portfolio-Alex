import Link from "next/link";

import { siteConfig } from "@/content/site.config";

const CURRENT_YEAR = 2026;

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-elevated/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-12">
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">{siteConfig.name}</p>
          <p className="max-w-sm text-sm leading-7 text-muted">
            {siteConfig.role} based in {siteConfig.location}, crafting premium digital stories for brands and product teams.
          </p>
        </div>

        {siteConfig.footerColumns.map((column) => (
          <div key={column.title}>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-text/80">{column.title}</h2>
            <ul className="space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted transition-colors hover:text-text">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-6 text-sm text-muted sm:px-8 lg:px-12">
          <p>© {CURRENT_YEAR} {siteConfig.name}</p>
          <p>Built for ambitious brands.</p>
        </div>
      </div>
    </footer>
  );
}
