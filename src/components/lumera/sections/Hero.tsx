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

        {/* Logo as centerpiece — splash phone flanked by side phones */}
        <div className="relative mt-12 flex h-[520px] w-full items-center justify-center md:h-[620px]">
          <motion.div
            initial={{ opacity: 0, x: 80, rotate: 0 }}
            animate={{ opacity: 1, x: 0, rotate: -10 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute z-10 hidden md:block"
            style={{ left: "calc(50% - 320px)" }}
          >
            <IPhoneMockup
              src={estimate}
              alt="Lumera skin estimate screen showing analysis areas"
              size="md"
              glow={false}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20"
          >
            <IPhoneMockup
              src={splash}
              alt="Lumera app logo on the splash screen with warm gold glow"
              size="lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -80, rotate: 0 }}
            animate={{ opacity: 1, x: 0, rotate: 10 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute z-10 hidden md:block"
            style={{ right: "calc(50% - 320px)" }}
          >
            <IPhoneMockup
              src={plan}
              alt="Lumera personalized plan screen"
              size="md"
              glow={false}
            />
          </motion.div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 font-display text-5xl font-light leading-[0.98] text-pearl sm:text-6xl md:text-7xl"
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
