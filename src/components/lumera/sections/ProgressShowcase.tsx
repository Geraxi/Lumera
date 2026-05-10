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
    title: "A calm starting point, every day.",
    body: "Greet your routine with a clear skin score, today's focus, and the streak you're building this week.",
  },
  {
    src: trackOnboarding,
    alt: "Lumera onboarding screen titled Track. Improve. Maintain. with progress photos and skin score chart",
    eyebrow: "Track. Improve. Maintain.",
    title: "Watch consistency turn into change.",
    body: "Track your progress, stay consistent, and adjust habits over time — with side-by-side photos and a clear score trend.",
  },
  {
    src: progressDetail,
    alt: "Lumera progress page with latest scan, breakouts, redness, texture metrics and timeline",
    eyebrow: "Progress",
    title: "Scan history and visible change.",
    body: "See breakouts, redness, and texture trend across your latest scans, with milestones marking the routine streaks behind each shift.",
  },
];

export function ProgressShowcase() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <GoldGlow
        className="left-1/2 top-1/3 h-[700px] w-[900px] -translate-x-1/2"
        intensity="soft"
      />

      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Inside Lumera"
            title="Built around the habits that move the needle."
            subtitle="A daily home, a clear story of progress, and the visible change that keeps you going."
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
