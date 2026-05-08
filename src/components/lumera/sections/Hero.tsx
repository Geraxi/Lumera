import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { GoldButton } from "../GoldButton";
import { GoldGlow } from "../GoldGlow";
import { IPhoneMockup } from "../IPhoneMockup";
import estimate from "@/assets/screens/estimate.png";
import splash from "@/assets/screens/splash.png";
import plan from "@/assets/screens/plan.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-36 md:pb-32">
      <GoldGlow
        className="left-1/2 top-[18%] h-[900px] w-[1100px] -translate-x-1/2 animate-pulse"
        intensity="strong"
      />
      <GoldGlow className="-right-40 top-1/3 h-[500px] w-[500px]" intensity="soft" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 backdrop-blur-md"
        >
          <Sparkles className="h-3.5 w-3.5 text-gold" />
          <span className="eyebrow !mb-0 !tracking-[0.28em]">iOS · Skincare Wellness</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-display text-5xl font-light leading-[0.98] text-pearl sm:text-6xl md:text-7xl"
        >
          Your Skin
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          Lumera helps you build consistent skincare, hydration, nutrition, and
          progress habits with personalized, photo-guided wellness insights.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#waitlist">
            <GoldButton>
              Join the Waitlist <ArrowRight className="h-4 w-4" />
            </GoldButton>
          </a>
          <a href="/features">
            <GoldButton variant="ghost">Explore Features</GoldButton>
          </a>
        </motion.div>

        <p className="mt-6 text-xs uppercase tracking-[0.28em] text-muted-foreground/70">
          Launching soon on iOS · Wellness, not diagnosis
        </p>
      </div>
    </section>
  );
}
