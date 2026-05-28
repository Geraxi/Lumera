import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/lumera/Header";
import { Footer } from "@/components/lumera/Footer";
import { IPhoneMockup } from "@/components/lumera/IPhoneMockup";
import { Reveal } from "@/components/lumera/Reveal";
import { SectionHeading } from "@/components/lumera/SectionHeading";
import { WaitlistCTA } from "@/components/lumera/sections/WaitlistCTA";
import { GoldGlow } from "@/components/lumera/GoldGlow";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

import capture from "@/assets/screens/capture.png";
import estimate from "@/assets/screens/estimate.png";
import plan from "@/assets/screens/plan.png";
import progress from "@/assets/screens/progress.png";
import allergies from "@/assets/screens/allergies.png";
import routine from "@/assets/screens/routine.png";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Lumera Skincare Wellness" },
      {
        name: "description",
        content:
          "Explore every Lumera feature: photo capture, skin estimates, personalized plans, progress tracking, allergy-aware suggestions, and routine profiles.",
      },
      { property: "og:title", content: "Features — Lumera" },
      {
        property: "og:description",
        content:
          "Photo capture, skin estimates, personalized plans, progress tracking, allergy-aware suggestions, and routine profiles.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: FeaturesPage,
});

const features = [
  {
    title: "Capture",
    src: capture,
    alt: "Capture your face screen with three guided photos",
    bullets: [
      "Three guided photos: left, front, right",
      "Lighting and filter reminders",
      "Step 1 of a calm 7-step intake",
    ],
  },
  {
    title: "Skin Estimate",
    src: estimate,
    alt: "Skin estimate screen highlighting visible patterns",
    bullets: [
      "Visual map of areas you may want to attend to",
      "General categories: pimples, texture, redness, hydration, scars",
      "Wellness overview, never a medical diagnosis",
    ],
  },
  {
    title: "Personalized Plan",
    src: plan,
    alt: "Personalized morning and evening plan with recommended products",
    bullets: [
      "Morning and evening routines tailored to you",
      "Recommended products you can save",
      "Nutrition tips that pair with your goals",
    ],
  },
  {
    title: "Progress",
    src: progress,
    alt: "Progress photos timeline with skin score chart",
    bullets: [
      "Side-by-side photo timeline",
      "Skin score trend with weekly check-ins",
      "Habit consistency tracking",
    ],
  },
  {
    title: "Allergies & Sensitivities",
    src: allergies,
    alt: "Allergy and sensitivity preferences screen",
    bullets: [
      "Pick food allergens and skincare sensitivities",
      "Recommendations adjust automatically",
      "Always paired with patch-test reminders",
    ],
  },
  {
    title: "Routine Profile",
    src: routine,
    alt: "Routine profile selection screen",
    bullets: [
      "Profiles tuned for shaving, makeup, and barrier care",
      "Used alongside your skin estimate",
      "Updates your daily process automatically",
    ],
  },
];

function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background text-pearl">
      <Header />
      <main>
        <section className="relative overflow-hidden pt-40 pb-24">
          <GoldGlow className="left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2" intensity="medium" />
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="eyebrow mb-4">Features</p>
                <h1 className="font-display text-balance text-4xl font-light leading-[1.05] text-pearl sm:text-5xl md:text-6xl">
                  Everything Lumera does for your skin.
                </h1>
                <p className="mt-5 text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
                  A guided, photo-led wellness experience built for daily consistency.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="pb-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="space-y-32">
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
                        <p className="eyebrow mb-4">0{i + 1}</p>
                        <h3 className="font-display text-4xl font-light leading-tight text-pearl sm:text-5xl">
                          {f.title}
                        </h3>
                        <ul className="mt-8 space-y-4">
                          {f.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-3">
                              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-black">
                                <Check className="h-3 w-3" />
                              </span>
                              <span className="text-base leading-relaxed text-muted-foreground">
                                {b}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <WaitlistCTA source="features" />
      </main>
      <Footer />
    </div>
  );
}
