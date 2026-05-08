import plan from "@/assets/screens/plan.png";
import progress from "@/assets/screens/progress.png";
import routine from "@/assets/screens/routine.png";
import capture from "@/assets/screens/capture.png";
import { ParallaxMockup } from "../ParallaxMockup";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { GoldGlow } from "../GoldGlow";

const items = [
  { src: plan, alt: "Personalized daily plan", caption: "Daily plan", offset: 0 },
  { src: progress, alt: "Visible progress over time", caption: "Visible progress", offset: 40 },
  { src: routine, alt: "Personalized routine profile", caption: "Personalized for you", offset: 0 },
  { src: capture, alt: "Capture your face safely", caption: "Capture safely", offset: 40 },
];

export function Gallery() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.06_0.008_70)] py-28 md:py-40">
      <GoldGlow className="-left-40 top-1/4 h-[600px] w-[600px]" intensity="soft" />
      <GoldGlow className="-right-40 bottom-0 h-[600px] w-[600px]" intensity="soft" />
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Inside the app"
            title="A quiet, considered interface."
            subtitle="Every screen is designed to feel calm — so building better habits feels effortless."
          />
        </Reveal>

        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {items.map((item, i) => (
            <div
              key={item.caption}
              className="flex flex-col items-center"
              style={{ marginTop: i % 2 === 1 ? "2.5rem" : 0 }}
            >
              <ParallaxMockup
                src={item.src}
                alt={item.alt}
                size="sm"
                range={item.offset}
                glow={false}
              />
              <p className="mt-6 text-center text-xs uppercase tracking-[0.28em] text-muted-foreground">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
