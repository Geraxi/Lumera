import products from "@/assets/screens/products.png";
import moleAnalysis from "@/assets/screens/mole-analysis.png";
import progressV2 from "@/assets/screens/progress-v2.png";
import { IPhoneMockup } from "../IPhoneMockup";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { GoldGlow } from "../GoldGlow";
import { GlassCard } from "../GlassCard";

const items = [
  {
    src: products,
    alt: "Lumera personal plan products tab with curated cleansers, serums, and moisturizers",
    eyebrow: "Your Personal Plan",
    title: "Products picked for your routine.",
    body: "A curated shortlist by category — cleanser, serum, moisturizer — with prices and quick saves, so you spend less time guessing at the shelf.",
  },
  {
    src: moleAnalysis,
    alt: "Lumera mole analysis screen with face map, tracked moles list, and risk indicators",
    eyebrow: "Mole Analysis",
    title: "Map and monitor what matters.",
    body: "Track moles over time on a face map, log size and location, and get clear reminders for when it's worth seeing a doctor.",
  },
  {
    src: progressV2,
    alt: "Lumera progress page showing latest scan, breakouts, redness, texture metrics and timeline entries",
    eyebrow: "Progress",
    title: "Every scan, side by side.",
    body: "Front, left, and right captures with breakouts, redness, and texture deltas — plus a timeline of milestones tied to your routine streaks.",
  },
];

export function PersonalPlanShowcase() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <GoldGlow
        className="left-1/2 top-1/3 h-[700px] w-[900px] -translate-x-1/2"
        intensity="soft"
      />

      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="More inside Lumera"
            title="Personal plan, mole tracking, visible progress."
            subtitle="Three more pieces of the daily routine — designed to feel calm, specific, and yours."
          />
        </Reveal>

        <div className="mt-20 space-y-28 md:space-y-36">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={0.1}>
              <div
                className={`flex flex-col items-center gap-12 md:gap-16 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="flex flex-1 justify-center">
                  <IPhoneMockup src={item.src} alt={item.alt} size="lg" />
                </div>
                <div className="flex-1">
                  <GlassCard className="p-8 md:p-10">
                    <p className="eyebrow mb-3">{item.eyebrow}</p>
                    <h3 className="font-display text-3xl font-light leading-tight text-pearl sm:text-4xl">
                      {item.title}
                    </h3>
                    <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                      {item.body}
                    </p>
                  </GlassCard>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
