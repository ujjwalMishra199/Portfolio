"use client";

import React from "react";
import { journeyTimeline, JourneyItem } from "@/data/journey";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Briefcase, GraduationCap, Award, Compass, CheckCircle2 } from "lucide-react";

export function Journey() {
  const getIcon = (type: JourneyItem["type"]) => {
    switch (type) {
      case "work":
        return <Briefcase className="w-4 h-4 text-[var(--accent)]" />;
      case "education":
        return <GraduationCap className="w-4 h-4 text-[var(--accent-2)]" />;
      case "certification":
        return <Award className="w-4 h-4 text-[var(--accent)]" />;
      case "next":
        return <Compass className="w-4 h-4 text-[var(--success)]" />;
    }
  };

  return (
    <section id="journey" className="py-28 sm:py-36 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <SectionLabel number="05" label="STILL BECOMING" />
          <AccentHeading
            plain="Started with code."
            accent="Kept asking why."
            as="h2"
          />
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            From academic foundations and nationwide engineering certifications to production backend systems handling live users.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {journeyTimeline.map((item: JourneyItem, index: number) => {
            const isPresent = item.year === "PRESENT";
            const isNext = item.type === "next";

            return (
              <div key={item.period + item.role} className="relative group">
                {/* Node Dot On Vertical Line */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border flex items-center justify-center transition-transform group-hover:scale-110 ${
                    isPresent
                      ? "bg-cyan-500/20 border-cyan-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]"
                      : isNext
                      ? "bg-emerald-500/20 border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
                      : "bg-[#0c0e14] border-white/20"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isPresent
                        ? "bg-cyan-400 animate-pulse"
                        : isNext
                        ? "bg-emerald-400"
                        : "bg-zinc-400"
                    }`}
                  />
                </div>

                {/* Timeline Card */}
                <SpotlightCard
                  className={`p-6 sm:p-8 ${
                    isPresent
                      ? "border-cyan-500/30 bg-gradient-to-r from-blue-950/10 via-[#0c0e14] to-transparent"
                      : isNext
                      ? "border-emerald-500/30 bg-gradient-to-r from-emerald-950/10 via-[#0c0e14] to-transparent"
                      : "bg-[#0b0d13] border-white/10"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      {getIcon(item.type)}
                      <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold">
                        {item.period}
                      </span>
                    </div>

                    {item.location && (
                      <span className="font-mono text-[11px] text-zinc-500">
                        {item.location}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1">
                    {item.role}
                  </h3>

                  <p className="text-sm font-mono text-zinc-400 mb-4">
                    {item.organization}
                  </p>

                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Bullet achievements if present */}
                  {item.achievements && item.achievements.length > 0 && (
                    <ul className="space-y-2 mb-5 pt-3 border-t border-white/[0.06]">
                      {item.achievements.map((ach) => (
                        <li key={ach} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-1" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Badges */}
                  {item.badges && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.badges.map((badge) => (
                        <span
                          key={badge}
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/[0.04] text-zinc-300 border border-white/10"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </SpotlightCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

