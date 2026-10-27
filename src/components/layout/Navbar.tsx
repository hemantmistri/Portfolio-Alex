"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site.config";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link href="#top" className="flex items-center gap-3 text-sm font-medium tracking-[0.16em] text-text uppercase">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg-elevated text-[0.7rem] text-accent font-bold">AR</span>
          <span className="hidden sm:inline">{siteConfig.name}</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted transition-colors hover:text-text">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <span className="text-xs uppercase tracking-[0.18em] text-muted">{siteConfig.availability.label}</span>
          <Button href={siteConfig.hero.primaryCta.href} variant="primary" className="px-4 py-2.5 text-xs uppercase tracking-[0.08em]">
            {siteConfig.hero.primaryCta.label}
          </Button>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-elevated text-text md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      <div className={cn("border-t border-border bg-bg-elevated md:hidden", open ? "block" : "hidden")}>
        <nav aria-label="Mobile navigation" className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4">
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md px-2 py-2 text-sm text-muted transition-colors hover:bg-bg-subtle hover:text-text" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Button href={siteConfig.hero.primaryCta.href} variant="primary" className="mt-2 w-full justify-center">
            {siteConfig.hero.primaryCta.label}
          </Button>
        </nav>
      </div>
    </header>
  );
}
