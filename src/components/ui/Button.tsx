import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/cn";

type ButtonProps = {
  variant?: "primary" | "secondary";
  href?: string;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<"button">, "children">;

export function Button({ variant = "primary", href, children, className, ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
    variant === "primary"
      ? "bg-accent text-bg shadow-[0_0_30px_rgba(124,92,255,0.32)] hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(124,92,255,0.42)]"
      : "border border-border bg-transparent text-text hover:bg-bg-subtle",
    className,
  );

  const content = (
    <>
      {children}
      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(classes, "group")}> 
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={cn(classes, "group")} {...props}>
      {content}
    </button>
  );
}
