import { Sparkles, LineChart, Leaf, FlaskConical } from "lucide-react";
import plan from "@/assets/screens/plan.png";
import progress from "@/assets/screens/progress.png";
import allergies from "@/assets/screens/allergies.png";
import routine from "@/assets/screens/routine.png";
import { IPhoneMockup } from "../IPhoneMockup";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Personalized Skin Plan",
    copy: "Build daily routines around your skin goals, estimated skin balance, and profile preferences.",
    Icon: Sparkles,
    src: plan,
    alt: "Personalized morning and evening routine plan",
  },
  {
    title: "Progress Timeline",
    copy: "Track visible changes, routine consistency, hydration, and milestones over time.",
    Icon: LineChart,
    src: progress,
    alt: "Progress photos timeline with skin score chart",
  },
  {
    title: "Nutrition & Hydration",
    copy: "Log meals and water intake with simple, evidence-led habit guidance.",
    Icon: Leaf,
    src: routine,
    alt: "Routine profile selection screen",
  },
  {
    title: "Product Recommendations",
    copy: "Save skincare recommendations and learn how to use them safely in your routine.",
    Icon: FlaskConical,
    src: allergies,
    alt: "Allergies and sensitivities preferences screen",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Features"
            title="Crafted for the everyday ritual."
            subtitle="Quiet, considered tools that make your skin care feel effortless and intentional."
          />
        </Reveal>

        <div className="mt-24 space-y-32 md:space-y-40">
          {features.map((f, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={f.title}>
                <div
                  className={cn(
                    "grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20",
                    reverse && "lg:[&>div:first-child]:order-2",
                  )}
                >
                  <div className="flex justify-center">
                    <IPhoneMockup src={f.src} alt={f.alt} size="lg" />
                  </div>
                  <div className="max-w-xl">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[color-mix(in_oklab,var(--gold)_25%,transparent)] bg-white/[0.03]">
                      <f.Icon className="h-5 w-5 text-gold" />
                    </span>
                    <h3 className="mt-6 font-display text-3xl font-light leading-tight text-pearl sm:text-4xl md:text-5xl">
                      {f.title}
                    </h3>
                    <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                      {f.copy}
                    </p>
                    <div className="mt-7 h-px gold-hairline" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
