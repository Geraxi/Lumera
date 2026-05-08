import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/lumera/Header";
import { Footer } from "@/components/lumera/Footer";
import { Hero } from "@/components/lumera/sections/Hero";
import { TrustStrip } from "@/components/lumera/sections/TrustStrip";
import { Features } from "@/components/lumera/sections/Features";
import { ScanSection } from "@/components/lumera/sections/ScanSection";
import { Workflow } from "@/components/lumera/sections/Workflow";
import { Gallery } from "@/components/lumera/sections/Gallery";
import { Safety } from "@/components/lumera/sections/Safety";
import { WaitlistCTA } from "@/components/lumera/sections/WaitlistCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumera — Your Skin, Understood." },
      {
        name: "description",
        content:
          "Lumera helps you build consistent skincare, hydration, nutrition, and progress habits with personalized, photo-guided wellness insights. Launching soon on iOS.",
      },
      { property: "og:title", content: "Lumera — Your Skin, Understood." },
      {
        property: "og:description",
        content:
          "A premium iOS skincare wellness companion. Personalized routines, photo-guided insights, progress tracking.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-pearl">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Features />
        <ScanSection />
        <Workflow />
        <Gallery />
        <Safety />
        <WaitlistCTA source="landing" />
      </main>
      <Footer />
    </div>
  );
}
