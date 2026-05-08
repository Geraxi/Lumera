import { Camera, Sparkles, LineChart, Droplets } from "lucide-react";
import { Reveal } from "../Reveal";

const items = [
  { Icon: Camera, label: "Photo-guided insights" },
  { Icon: Sparkles, label: "Personalized routines" },
  { Icon: LineChart, label: "Progress tracking" },
  { Icon: Droplets, label: "Nutrition & hydration" },
];

export function TrustStrip() {
  return (
    <section className="relative border-y border-white/5 bg-background/40">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <Reveal>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4">
            {items.map(({ Icon, label }) => (
              <li
                key={label}
                className="flex items-center justify-center gap-3 text-sm text-pearl/90"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[color-mix(in_oklab,var(--gold)_25%,transparent)] bg-white/[0.03]">
                  <Icon className="h-4 w-4 text-gold" />
                </span>
                <span className="tracking-wide">{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
