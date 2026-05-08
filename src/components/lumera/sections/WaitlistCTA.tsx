import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { WaitlistForm } from "../WaitlistForm";
import { GoldGlow } from "../GoldGlow";

export function WaitlistCTA({ source = "landing" }: { source?: string }) {
  return (
    <section id="waitlist" className="relative overflow-hidden py-28 md:py-40">
      <GoldGlow className="left-1/2 top-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2" intensity="strong" />
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Join the waitlist"
            title="Start building better skin habits."
            subtitle="Be first to try Lumera when it launches on iOS."
          />
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10">
            <WaitlistForm source={source} />
          </div>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-6 text-center text-xs uppercase tracking-[0.28em] text-muted-foreground/70">
            Launching soon on iOS
          </p>
        </Reveal>
      </div>
    </section>
  );
}
