"use client";

import React, { useState } from "react";
import { howIWorkPillars, HowIWorkPillar } from "@/data/howIWork";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { useMotion } from "@/components/ui/MotionProvider";
import { motion, AnimatePresence } from "framer-motion";
import { Server, Database, Sparkles, ArrowRight } from "lucide-react";

export function HowIWork() {
  const { shouldAnimate } = useMotion();
  const [activePillarId, setActivePillarId] = useState<string>("backend");

  const activePillar =
    howIWorkPillars.find((p) => p.id === activePillarId) || howIWorkPillars[0];

  const pillarIcons: Record<string, React.ReactNode> = {
    backend: <Server className="w-4 h-4" />,
    data: <Database className="w-4 h-4" />,
    "ai-product": <Sparkles className="w-4 h-4" />,
  };

  return (
    <section id="how-i-work" className="py-28 sm:py-36 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <SectionLabel number="03" label="HOW I THINK & WORK" />
          <AccentHeading
            plain="How I work."
            accent="From idea to impact."
            as="h2"
          />
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            I don&apos;t jump straight into writing loose endpoints. A reliable system is engineered through strict interface design, schema profiling, and resilient operational pipelines.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex flex-wrap items-center gap-3 mb-10 pb-4 border-b border-white/[0.08]">
          {howIWorkPillars.map((pillar: HowIWorkPillar) => {
            const isActive = activePillarId === pillar.id;

            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                type="button"
                className={`relative flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                  isActive
                    ? "bg-white text-zinc-950 font-bold border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    : "bg-white/[0.02] text-zinc-400 border-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                <span className={isActive ? "text-zinc-950" : "text-[var(--accent)]"}>
                  {pillarIcons[pillar.id]}
                </span>
                <span>{pillar.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Pillar Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar.id}
            initial={shouldAnimate ? { opacity: 0, y: 16 } : false}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldAnimate ? { opacity: 0, y: -16 } : undefined}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {/* Header info */}
            <div className="mb-10 max-w-3xl">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-3">
                {activePillar.headline}
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                {activePillar.summary}
              </p>
            </div>

            {/* 3 Step Process Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {activePillar.steps.map((step, idx) => (
                <SpotlightCard
                  key={step.step}
                  className="bg-[#0b0d13] border-white/10 flex flex-col justify-between"
                >
                  <div>
                    {/* Step Number Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs font-bold text-[var(--accent)] tracking-widest px-2.5 py-1 rounded-md bg-[var(--accent)]/10 border border-[var(--accent)]/20">
                        STAGE {step.step}
                      </span>
                      {idx < 2 && (
                        <ArrowRight className="w-4 h-4 text-zinc-600 hidden md:block" />
                      )}
                    </div>

                    {/* Step Name */}
                    <h4 className="text-lg font-semibold text-white tracking-tight mb-3">
                      {step.name}
                    </h4>

                    {/* Step Detail */}
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </SpotlightCard>
              ))}
            </div>

            {/* Related Tools Pill Strip */}
            <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.015] flex flex-wrap items-center justify-between gap-4">
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                Pillar Stack &amp; Methods:
              </span>
              <div className="flex flex-wrap gap-2">
                {activePillar.chips.map((chip) => (
                  <span
                    key={chip}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-zinc-300 border border-white/10"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

