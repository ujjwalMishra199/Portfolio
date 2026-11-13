"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useMotion } from "@/components/ui/MotionProvider";

interface AccentHeadingProps {
  plain: string;
  accent: string;
  accentTrailing?: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export function AccentHeading({
  plain,
  accent,
  accentTrailing,
  className,
  as: Component = "h2",
}: AccentHeadingProps) {
  const { shouldAnimate } = useMotion();

  const content = (
    <>
      <span className="font-sans font-semibold tracking-[-0.03em] text-zinc-100">
        {plain}{" "}
      </span>
      <span className="font-serif italic font-normal tracking-[-0.01em] bg-clip-text text-transparent bg-[linear-gradient(100deg,var(--accent),var(--accent-2))] drop-shadow-[0_2px_14px_rgba(92,200,255,0.25)]">
        {accent}
      </span>
      {accentTrailing ? (
        <span className="font-sans font-semibold tracking-[-0.03em] text-zinc-100">
          {" "}{accentTrailing}
        </span>
      ) : null}
    </>
  );

  if (!shouldAnimate) {
    return (
      <Component
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-balance",
          className
        )}
      >
        {content}
      </Component>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Component
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-balance",
          className
        )}
      >
        {content}
      </Component>
    </motion.div>
  );
}

