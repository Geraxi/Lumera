import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/5 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="flex items-center gap-2.5 font-display text-xl font-medium tracking-[0.3em] text-gold"
        >
          <svg
            viewBox="0 0 64 64"
            className="h-8 w-8"
            aria-hidden
          >
            <defs>
              <radialGradient id="lumera-corona" cx="50%" cy="50%" r="50%">
                <stop offset="42%" stopColor="#000" stopOpacity="0" />
                <stop offset="48%" stopColor="var(--gold)" stopOpacity="0.95" />
                <stop offset="55%" stopColor="var(--gold)" stopOpacity="0.55" />
                <stop offset="80%" stopColor="var(--gold)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="32" cy="32" r="30" fill="url(#lumera-corona)" />
            <circle cx="32" cy="32" r="14" fill="#000" />
          </svg>
          LUMERA
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/features"
            className="text-sm text-muted-foreground transition hover:text-pearl"
          >
            Features
          </Link>
          <a
            href="/#workflow"
            className="text-sm text-muted-foreground transition hover:text-pearl"
          >
            How it works
          </a>
          <a
            href="/#waitlist"
            className="text-sm text-muted-foreground transition hover:text-pearl"
          >
            Waitlist
          </a>
        </nav>
        <a
          href="/#waitlist"
          className="rounded-full border border-[color-mix(in_oklab,var(--gold)_30%,transparent)] bg-white/[0.03] px-4 py-2 text-xs font-medium text-pearl transition hover:bg-white/[0.06]"
        >
          Join waitlist
        </a>
      </div>
    </header>
  );
}
