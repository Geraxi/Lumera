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
    title: "Products picked for you.",
    body: "A curated shortlist by category, with prices and quick saves — less guessing at the shelf.",
  },
  {
    src: moleAnalysis,
    alt: "Lumera mole analysis screen with face map and tracked moles",
    eyebrow: "Mole Analysis",
    title: "Map and monitor what matters.",
    body: "Track moles on a face map, log size and location, and get clear reminders for when to see a doctor.",
  },
  {
    src: progressV2,
    alt: "Lumera progress page with latest scan and timeline",
    eyebrow: "Progress",
    title: "Every scan, side by side.",
    body: "Front, left, and right captures with breakouts, redness, and texture deltas tied to your routine streaks.",
  },
];

export function PersonalPlanShowcase() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <GoldGlow
        className="left-1/2 top-1/3 h-[700px] w-[900px] -translate-x-1/2"
        intensity="soft"
      />

      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="More inside Lumera"
            title="Personal plan, mole tracking, visible progress."
            subtitle="Three more pieces of the daily routine — calm, specific, and yours."
          />
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="flex flex-col items-center">
                <IPhoneMockup src={item.src} alt={item.alt} size="md" />
                <GlassCard className="mt-8 w-full p-6">
                  <p className="eyebrow mb-2">{item.eyebrow}</p>
                  <h3 className="font-display text-2xl font-light leading-tight text-pearl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </GlassCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
