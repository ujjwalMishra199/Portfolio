"use client";

import React, { useState } from "react";
import { skillCategories, certificationSpotlight, SkillCategory, SkillItem } from "@/data/skills";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Award, CheckCircle, ExternalLink, Sparkles } from "lucide-react";

export function Skills() {
  const [activeItem, setActiveItem] = useState<{ category: string; item: SkillItem } | null>(null);

  return (
    <section id="skills" className="py-28 sm:py-36 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <SectionLabel number="04" label="THE TOOLKIT" />
          <AccentHeading
            plain="Tools I trust."
            accent="Reasons I chose them."
            as="h2"
          />
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Every library and framework has tradeoffs. Hover over any technology to see its exact engineering purpose in my architecture.
          </p>
        </div>

        {/* Featured Credential Spotlight Card: Oracle GenAI */}
        <div className="mb-16">
          <SpotlightCard className="bg-gradient-to-r from-[var(--bg-elev)] via-[#0c0e14] to-[var(--bg-elev)] border-[var(--accent)]/30 p-8 sm:p-10 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30">
                    <Award className="w-3.5 h-3.5 text-[var(--accent)]" />
                    VERIFIED CREDENTIAL
                  </span>
                  <span className="font-mono text-xs text-zinc-400">
                    {certificationSpotlight.issuer} · {certificationSpotlight.date}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                  {certificationSpotlight.title}
                </h3>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl mb-6">
                  {certificationSpotlight.summary}
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {certificationSpotlight.highlights.map((item) => (
                    <div
                      key={item}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-[var(--accent)] border border-white/10"
                    >
                      <Sparkles className="w-3 h-3 text-[var(--accent)]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8">
                <div className="text-left lg:text-right mb-5">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 block mb-1">
                    VERIFY CREDENTIAL
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    Issued by {certificationSpotlight.issuer}
                  </span>
                </div>

                <div className="flex flex-col items-start lg:items-end gap-2.5">
                  <a
                    href={certificationSpotlight.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Verify Oracle Generative AI Professional certification on Oracle (opens in a new tab)"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-zinc-950 font-semibold text-xs tracking-tight hover:bg-[var(--accent)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(92,200,255,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                  >
                    <span>Verify on Oracle</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {Boolean(
                    certificationSpotlight.linkedinUrl &&
                      certificationSpotlight.linkedinUrl.includes("linkedin.com") &&
                      !certificationSpotlight.linkedinUrl.includes("[ADD")
                  ) && (
                    <a
                      href={certificationSpotlight.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View certification on LinkedIn (opens in a new tab)"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-mono text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                    >
                      <span>View on LinkedIn</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Grouped Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((group: SkillCategory) => (
            <SpotlightCard
              key={group.category}
              className="bg-[#0b0d13] border-white/10 p-6 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[11px] font-bold text-[var(--accent)] uppercase tracking-widest block mb-2">
                  {group.category}
                </span>
                <p className="text-xs text-zinc-400 mb-5 leading-relaxed">
                  {group.tagline}
                </p>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item: SkillItem) => {
                    const isHovered =
                      activeItem?.category === group.category && activeItem?.item.name === item.name;

                    return (
                      <button
                        key={item.name}
                        type="button"
                        onMouseEnter={() => setActiveItem({ category: group.category, item })}
                        onMouseLeave={() => setActiveItem(null)}
                        onClick={() => setActiveItem({ category: group.category, item })}
                        className={`group relative px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border text-left ${
                          isHovered
                            ? "bg-[var(--accent)] text-zinc-950 border-[var(--accent)] font-bold shadow-[0_0_15px_rgba(92,200,255,0.4)]"
                            : "bg-white/[0.03] text-zinc-300 border-white/[0.08] hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {item.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Active Inspection Banner */}
        <div className="p-5 rounded-2xl border border-white/10 bg-[#07090e] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
            <div className="text-xs font-mono">
              <span className="text-zinc-500 uppercase tracking-wider mr-2">
                TOOL PROFILE //
              </span>
              <span className="text-white font-bold">
                {activeItem ? activeItem.item.name : "Hover any technology chip above"}
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[var(--accent)]/90 font-mono">
            {activeItem
              ? activeItem.item.usage
              : "Hover or click any skill to view its dedicated architectural role and implementation focus."}
          </p>
        </div>
      </div>
    </section>
  );
}

