"use client";

import React, { useState } from "react";
import Image from "next/image";
import { profile } from "@/data/profile";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { useMotion } from "@/components/ui/MotionProvider";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, ShieldCheck, Cpu, CheckCircle2 } from "lucide-react";

type PerspectiveKey = "build" | "secure" | "scale";

export function About() {
  const { shouldAnimate } = useMotion();
  const [activeTab, setActiveTab] = useState<PerspectiveKey>("build");

  const perspective = profile.perspectives[activeTab];

  const tabs: { key: PerspectiveKey; label: string; icon: React.ReactNode }[] = [
    { key: "build", label: "Build", icon: <Layers className="w-4 h-4" /> },
    { key: "secure", label: "Secure", icon: <ShieldCheck className="w-4 h-4" /> },
    { key: "scale", label: "Scale", icon: <Cpu className="w-4 h-4" /> },
  ];

  return (
    <section id="about" className="py-28 sm:py-36 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <SectionLabel number="01" label="THE PERSON BEHIND THE CODE" />
          <AccentHeading
            plain="Backend is where I think."
            accent="Product is why I build."
            as="h2"
          />
        </div>

        {/* 2 Column Editorial Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-6 space-y-6 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            {/* Identity card using cutout portrait */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="relative shrink-0 overflow-hidden hover:shadow-[0_0_20px_rgba(92,200,255,0.25)] transition-shadow"
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  border: "1px solid var(--border)",
                  background: "linear-gradient(160deg,#0b1220,#12304a)",
                }}
              >
                <Image
                  src="/images/ujjwal-cutout.webp"
                  alt="Ujjwal Mishra"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                  style={{ objectPosition: "50% 18%" }}
                />
                <span
                  className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full border-2"
                  aria-label="Open to work"
                  style={{
                    background: "var(--success)",
                    borderColor: "var(--bg)",
                  }}
                />
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: "var(--accent)" }}>Ujjwal Mishra</p>
                <p className="font-mono text-[11px] uppercase tracking-[.14em] mt-0.5" style={{ color: "var(--text-muted)" }}>Full Stack · Backend · Gurgaon</p>
              </div>
            </div>
            <p className="text-zinc-100 font-medium leading-relaxed">
              Based in Gurgaon, Haryana, I am a Full Stack Developer with hands-on production experience building scalable web applications and high-throughput RESTful APIs with Node.js, Express.js, React, TypeScript, MongoDB, and MySQL.
            </p>
            <p className="text-zinc-400">
              My engineering sweet spot is the backend architecture: architecting clean schemas, tuning aggregation pipelines, and making token authentication with JWT and OAuth bulletproof. I enjoy turning complex data flows into predictable, low-latency API contracts.
            </p>
            <p className="text-zinc-400">
              Outside pure backend, I deploy containerized microservices to AWS EC2 and S3 using Docker and CI/CD pipelines, and hold the <span className="text-[var(--accent)]">Oracle Cloud Infrastructure 2025 Certified Generative AI Professional</span> credential.
            </p>
          </div>

          {/* Core Strengths Callout Box */}
          <div className="lg:col-span-6">
            <SpotlightCard className="bg-[#0b0d13] border-white/10">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] block mb-3">
                CORE PHILOSOPHY
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-4">
                Architecture that respects both the database and the end user.
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Code should be predictable under pressure. Clean schemas prevent data corruption; atomic pipelines prevent stale states; and thoughtful APIs make frontend engineers smile.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10">
                {[
                  "Deterministic API contracts with shared TypeScript typings",
                  "Deep MongoDB aggregation & relational MySQL normalization",
                  "Zero-trust authentication: JWT rotation, RBAC, and secure cookies",
                  "Practical AI integration backed by verified Oracle certification",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </div>
        </div>

        {/* Interactive "Choose a Perspective" Tabs */}
        <div className="pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/[0.08]">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                EXPLORE BY PERSPECTIVE
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mt-1">
                How I approach different engineering layers
              </h3>
            </div>

            {/* Tab Pill Buttons */}
            <div className="inline-flex p-1.5 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md self-start sm:self-auto">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    type="button"
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                      isActive ? "text-zinc-950 font-bold" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 bg-[var(--accent)] rounded-lg shadow-[0_0_15px_rgba(92,200,255,0.4)] z-0" />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      {tab.icon}
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Perspective Swapping Content */}
          <div className="min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={shouldAnimate ? { opacity: 0, y: 12 } : false}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldAnimate ? { opacity: 0, y: -12 } : undefined}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 rounded-2xl border border-white/10 bg-white/[0.015]"
              >
                <div className="lg:col-span-8">
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] block mb-2">
                    Perspective // {activeTab.toUpperCase()}
                  </span>
                  <h4 className="text-2xl font-semibold text-white tracking-tight mb-2">
                    {perspective.title}
                  </h4>
                  <p className="text-sm text-[var(--accent)]/90 font-mono mb-4">
                    {perspective.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-3xl">
                    {perspective.description}
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500 mb-3 block">
                    Specialized Stack
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {perspective.chips.map((chip) => (
                      <span
                        key={chip}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

