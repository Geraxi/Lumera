export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background/80">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-display text-lg tracking-[0.3em] text-gold">LUMERA</p>
            <p className="mt-2 max-w-md text-xs leading-relaxed text-muted-foreground">
              Lumera is a wellness companion for everyday skincare habits. It is not
              a medical device and does not provide diagnosis or treatment. Always
              consult a qualified professional for medical concerns.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
            <a href="/features" className="hover:text-pearl transition">
              Features
            </a>
            <a href="/#waitlist" className="hover:text-pearl transition">
              Waitlist
            </a>
            <a href="#" className="hover:text-pearl transition">
              Privacy
            </a>
            <a href="#" className="hover:text-pearl transition">
              Terms
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Lumera. All rights reserved.</p>
          <p className="tracking-widest uppercase text-[10px]">Launching soon on iOS</p>
        </div>
      </div>
    </footer>
  );
}
