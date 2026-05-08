import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function GlassCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 shadow-card transition-all duration-500 hover:border-[color-mix(in_oklab,var(--gold)_22%,transparent)] hover:shadow-gold-glow",
        className,
      )}
    >
      {children}
    </div>
  );
}
