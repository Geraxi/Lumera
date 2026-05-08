import { Heart, FlaskConical, ShieldAlert, Stethoscope } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { GlassCard } from "../GlassCard";

const items = [
  {
    Icon: Heart,
    title: "General wellness guidance",
    copy: "Lumera supports daily habits like cleansing, hydration, sleep, and consistency.",
  },
  {
    Icon: FlaskConical,
    title: "Patch-test reminders",
    copy: "Gentle prompts to test new products on a small area before regular use.",
  },
  {
    Icon: ShieldAlert,
    title: "Allergy-aware suggestions",
    copy: "Tell us your sensitivities and we tailor recommendations to avoid them.",
  },
  {
    Icon: Stethoscope,
    title: "Not a medical diagnosis",
    copy: "For medical concerns, please consult a licensed dermatologist or physician.",
  },
];

export function Safety() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Built responsibly"
            title="Built for everyday skincare habits."
            subtitle="A calm companion that respects your time, your skin, and your privacy."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <GlassCard className="h-full">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[color-mix(in_oklab,var(--gold)_25%,transparent)] bg-white/[0.03]">
                  <item.Icon className="h-5 w-5 text-gold" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-light text-pearl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.copy}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
