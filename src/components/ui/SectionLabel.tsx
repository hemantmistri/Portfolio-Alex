import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
};

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted", className)}>
      <span className="h-px w-12 bg-border" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}
