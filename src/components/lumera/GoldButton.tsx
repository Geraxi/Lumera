import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "gold" | "ghost";

interface GoldButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

export const GoldButton = forwardRef<HTMLButtonElement, GoldButtonProps>(
  ({ variant = "gold", className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 disabled:opacity-60 disabled:pointer-events-none",
          variant === "gold" &&
            "bg-gradient-gold text-[oklch(0.12_0.012_70)] shadow-gold-glow hover:translate-y-[-1px] hover:shadow-[0_30px_80px_-15px_color-mix(in_oklab,var(--gold)_55%,transparent)]",
          variant === "ghost" &&
            "border border-white/10 bg-white/[0.03] text-pearl backdrop-blur-md hover:bg-white/[0.06] hover:border-[color-mix(in_oklab,var(--gold)_30%,transparent)]",
          className,
        )}
      >
        {children}
      </button>
    );
  },
);
GoldButton.displayName = "GoldButton";
