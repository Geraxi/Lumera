import home from "@/assets/screens/home.png";
import trackOnboarding from "@/assets/screens/track-onboarding.png";
import progressDetail from "@/assets/screens/progress-detail.png";
import { IPhoneMockup } from "../IPhoneMockup";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { GoldGlow } from "../GoldGlow";
import { GlassCard } from "../GlassCard";

const items = [
  {
    src: home,
    alt: "Lumera home dashboard with skin score, today's focus, and weekly streak",
    eyebrow: "Daily Home",
    title: "A calm starting point.",
    body: "A clear skin score, today's focus, and the streak you're building this week.",
  },
  {
    src: trackOnboarding,
    alt: "Lumera onboarding screen titled Track. Improve. Maintain.",
    eyebrow: "Track. Improve. Maintain.",
    title: "Consistency, made visible.",
    body: "Side-by-side photos and a clear score trend turn small daily habits into change you can see.",
  },
  {
    src: progressDetail,
    alt: "Lumera progress page with latest scan and timeline",
    eyebrow: "Progress",
    title: "Scan history at a glance.",
    body: "Breakouts, redness, and texture trends across your latest scans, with milestones along the way.",
  },
];

export function ProgressShowcase() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <GoldGlow
        className="left-1/2 top-1/3 h-[700px] w-[900px] -translate-x-1/2"
        intensity="soft"
      />

      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Inside Lumera"
            title="Built around the habits that move the needle."
            subtitle="A daily home, a clear story of progress, and the visible change that keeps you going."
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
