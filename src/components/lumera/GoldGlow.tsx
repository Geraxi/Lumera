import { cn } from "@/lib/utils";

interface GoldGlowProps {
  className?: string;
  intensity?: "soft" | "medium" | "strong";
}

const intensityMap = {
  soft: "opacity-40",
  medium: "opacity-60",
  strong: "opacity-80",
};

export function GoldGlow({ className, intensity = "medium" }: GoldGlowProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute bg-radial-glow blur-3xl",
        intensityMap[intensity],
        className,
      )}
    />
  );
}
