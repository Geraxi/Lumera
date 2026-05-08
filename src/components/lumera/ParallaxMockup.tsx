import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IPhoneMockup } from "./IPhoneMockup";
import { cn } from "@/lib/utils";

interface ParallaxMockupProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl";
  rotate?: number;
  range?: number;
  className?: string;
  glow?: boolean;
}

export function ParallaxMockup({
  src,
  alt,
  size,
  rotate,
  range = 60,
  className,
  glow,
}: ParallaxMockupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);

  return (
    <motion.div ref={ref} style={{ y }} className={cn(className)}>
      <IPhoneMockup src={src} alt={alt} size={size} rotate={rotate} glow={glow} />
    </motion.div>
  );
}
