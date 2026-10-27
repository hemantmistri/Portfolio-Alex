import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-accent-soft px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-text",
        className,
      )}
    >
      {children}
    </span>
  );
}
