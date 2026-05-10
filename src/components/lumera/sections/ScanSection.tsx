import { ShieldCheck } from "lucide-react";
import estimate from "@/assets/screens/estimate.png";
import { IPhoneMockup } from "../IPhoneMockup";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { GoldGlow } from "../GoldGlow";

export function ScanSection() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <GoldGlow className="left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2" intensity="medium" />

      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Photo-Guided Skin Estimates"
            title="Wellness guidance, not a diagnosis."
            subtitle="Lumera helps you organize visual skin observations and routine decisions. It is not a medical device and does not replace professional care."
          />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mt-16 flex justify-center">
            <IPhoneMockup
              src={estimate}
              alt="Lumera skin estimate screen with pimples, texture, moles, redness, scars, and hydration regions"
              size="md"
            />
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mx-auto mt-12 inline-flex w-full max-w-xl items-start gap-3 rounded-2xl border border-[color-mix(in_oklab,var(--gold)_18%,transparent)] bg-white/[0.03] px-5 py-4 backdrop-blur-md">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Lumera supports general wellness habits. For medical questions about
              moles, lesions, persistent redness, or other concerns, consult a
              licensed dermatologist.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
