"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useMotion } from "@/components/ui/MotionProvider";

export function ScrollProgress() {
  const { shouldAnimate } = useMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (!shouldAnimate) return null;

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-[linear-gradient(100deg,var(--accent),var(--accent-2))] origin-left z-50 pointer-events-none shadow-[0_0_8px_var(--accent)]"
    />
  );
}

