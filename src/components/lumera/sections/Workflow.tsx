import capture from "@/assets/screens/capture.png";
import routine from "@/assets/screens/routine.png";
import progress from "@/assets/screens/progress.png";
import { IPhoneMockup } from "../IPhoneMockup";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const steps = [
  { n: "01", title: "Capture your skin", copy: "Three quick photos under good light. No filters.", src: capture, alt: "Capture your face screen with left, front, right photos" },
  { n: "02", title: "Get a personalized routine", copy: "A morning and evening plan tailored to your profile.", src: routine, alt: "Routine profile selection screen" },
  { n: "03", title: "Track progress and habits", copy: "See your photos, skin score, and consistency over time.", src: progress, alt: "Track and improve progress timeline" },
];

export function Workflow() {
  return (
    <section id="workflow" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="Three steps. One quiet ritual."
          />
        </Reveal>

        <div className="relative mt-20">
          {/* connector */}
          <div className="absolute left-1/2 top-[180px] hidden h-px w-[70%] -translate-x-1/2 gold-hairline lg:block" />

          <div className="grid grid-cols-1 gap-14 lg:grid-cols-3 lg:gap-10">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <span className="absolute -top-2 left-1/2 z-30 -translate-x-1/2 -translate-y-full font-display text-sm tracking-[0.4em] text-gold">
                      {s.n}
                    </span>
                    <div className="absolute left-1/2 top-[180px] z-20 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-gold shadow-gold-glow lg:block" />
                    <IPhoneMockup src={s.src} alt={s.alt} size="md" />
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-light text-pearl sm:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                    {s.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
