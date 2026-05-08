import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import splash from "@/assets/screens/splash.png";
import estimate from "@/assets/screens/estimate.png";
import plan from "@/assets/screens/plan.png";
import { IPhoneMockup } from "../IPhoneMockup";
import { GoldButton } from "../GoldButton";
import { GoldGlow } from "../GoldGlow";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <GoldGlow className="left-1/2 top-0 h-[700px] w-[900px] -translate-x-1/2" intensity="strong" />
      <GoldGlow className="-right-40 top-1/3 h-[500px] w-[500px]" intensity="soft" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            <span className="eyebrow !mb-0 !tracking-[0.28em]">iOS · Skincare Wellness</span>
          </div>
          <h1 className="mt-7 font-display text-5xl font-light leading-[0.98] text-pearl sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Your Skin,
            <br />
            <span className="bg-gradient-gold bg-clip-text text-transparent">Understood.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Lumera helps you build consistent skincare, hydration, nutrition, and
            progress habits with personalized, photo-guided wellness insights.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#waitlist">
              <GoldButton>
                Join the Waitlist <ArrowRight className="h-4 w-4" />
              </GoldButton>
            </a>
            <a href="#features">
              <GoldButton variant="ghost">Explore Features</GoldButton>
            </a>
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.28em] text-muted-foreground/70">
            Launching soon on iOS · Wellness, not diagnosis
          </p>
        </motion.div>

        <div className="relative h-[640px] w-full">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-12 z-10 hidden md:block"
            style={{ rotate: "-9deg" }}
          >
            <IPhoneMockup src={estimate} alt="Lumera skin estimate screen showing analysis areas" size="md" glow={false} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-0 z-20 -translate-x-1/2"
          >
            <IPhoneMockup src={splash} alt="Lumera splash screen with gold glow logo" size="lg" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-16 z-10 hidden md:block"
            style={{ rotate: "9deg" }}
          >
            <IPhoneMockup src={plan} alt="Lumera personalized plan screen" size="md" glow={false} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
