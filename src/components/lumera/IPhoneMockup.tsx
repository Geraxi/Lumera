import { cn } from "@/lib/utils";

type Size = "sm" | "md" | "lg" | "xl";

const sizeClasses: Record<Size, string> = {
  sm: "w-[200px]",
  md: "w-[260px]",
  lg: "w-[320px]",
  xl: "w-[380px]",
};

interface IPhoneMockupProps {
  src: string;
  alt: string;
  size?: Size;
  glow?: boolean;
  className?: string;
  rotate?: number;
}

export function IPhoneMockup({
  src,
  alt,
  size = "md",
  glow = true,
  className,
  rotate = 0,
}: IPhoneMockupProps) {
  return (
    <div
      className={cn("relative", sizeClasses[size], className)}
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
    >
      {glow && (
        <div
          aria-hidden
          className="absolute -inset-10 -z-10 bg-radial-glow opacity-70 blur-2xl animate-gold-pulse"
        />
      )}
      <div
        className={cn(
          "relative aspect-[9/19.5] rounded-[2.6rem] p-[6px]",
          "bg-gradient-to-b from-[oklch(0.22_0.012_70)] via-black to-[oklch(0.18_0.012_70)]",
          "shadow-gold-glow",
        )}
      >
        {/* inner bezel */}
        <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] bg-black ring-1 ring-white/5">
          {/* dynamic island */}
          <div
            aria-hidden
            className="absolute left-1/2 top-2 z-20 h-[22px] w-[88px] -translate-x-1/2 rounded-full bg-black"
          />
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="block h-full w-full object-cover"
          />
          {/* subtle inner highlight */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[2.2rem] ring-1 ring-inset ring-white/5"
          />
        </div>
      </div>
    </div>
  );
}
