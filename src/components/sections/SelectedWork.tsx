"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projects, Project } from "@/data/projects";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AccentHeading } from "@/components/ui/AccentHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ArrowUpRight, ExternalLink, ChevronDown, ChevronUp, Layers, CheckCircle } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function SelectedWork() {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const toggleExpand = (slug: string) => {
    setExpandedSlug((prev) => (prev === slug ? null : slug));
  };

  return (
    <section id="work" className="py-28 sm:py-36 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <SectionLabel number="02" label="SELECTED WORK" />
            <AccentHeading
              plain="Ideas are a start."
              accent="This is the work."
              as="h2"
            />
          </div>
          <p className="text-sm font-mono text-zinc-400 max-w-xs">
            Production full-stack platforms, low-latency relational backends, and distributed systems.
          </p>
        </div>

        {/* Featured Large Project Cards */}
        <div className="space-y-12 mb-20">
          {projects.map((project: Project) => {
            const isExpanded = expandedSlug === project.slug;

            return (
              <SpotlightCard
                key={project.slug}
                className="bg-[#0b0d13] border-white/10 hover:border-white/20 p-8 sm:p-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left: Project Number, Metadata & Content */}
                  <div className="lg:col-span-8 flex flex-col justify-between">
                    <div>
                      {/* Top Category & Company badge */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="font-mono text-xs font-bold text-[var(--accent)] tracking-widest uppercase">
                          {project.number} // {project.category}
                        </span>
                        {project.company && (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/[0.04] text-zinc-300 border border-white/10">
                            {project.company}
                          </span>
                        )}
                        <span className="text-[11px] font-mono text-zinc-500">
                          {project.timeline}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 group-hover:text-[var(--accent)] transition-colors">
                        {project.title}
                      </h3>

                      {/* Tagline / Problem */}
                      <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-6 font-normal">
                        {project.tagline}
                      </p>

                      {/* Problem Statement Box */}
                      <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] mb-6">
                        <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">
                          The Core Problem Solved
                        </span>
                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      {/* Metric Target Pill - renders ONLY when a real, non-empty metric exists */}
                      {Boolean(project.metricsTarget && !project.metricsTarget.includes("[ADD")) && (
                        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[var(--accent)]/20 bg-[var(--accent)]/[0.05] text-[var(--accent)] font-mono text-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                          <span>{project.metricsTarget}</span>
                        </div>
                      )}
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-2 pt-2 mb-6">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] text-zinc-300 border border-white/[0.08]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links & Expand Accordion */}
                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/[0.06]">
                      {/* Deep-dive Link */}
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent)] hover:opacity-90 text-black font-semibold text-xs tracking-tight transition-all shadow-[0_0_15px_rgba(92,200,255,0.3)]"
                      >
                        <span>Explore the story</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>

                      {/* Quick Accordion Toggle */}
                      <button
                        onClick={() => toggleExpand(project.slug)}
                        type="button"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/10 hover:border-white/20 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                      >
                        <span>Inside this project</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5 text-[var(--accent)]" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 text-[var(--accent)]" />
                        )}
                      </button>

                      {/* GitHub / Live Links */}
                      {project.githubUrl && project.githubUrl !== "[ADD GITHUB URL]" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      )}

                      {project.liveUrl && project.liveUrl !== "[ADD LIVE URL]" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right: Architecture Snapshot Widget */}
                  <div className="lg:col-span-4 w-full">
                    <div className="rounded-xl border border-white/[0.08] bg-[#07080c] p-5">
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06]">
                        <div className="flex items-center gap-2">
                          <Layers className="w-4 h-4 text-[var(--accent)]" />
                          <span className="font-mono text-xs uppercase tracking-wider text-zinc-200">
                            System Flow
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-500">
                          {project.role}
                        </span>
                      </div>

                      <div className="space-y-3">
                        {project.architecture.flow.map((node, i) => (
                          <div key={node} className="relative flex items-center gap-3">
                            <span className="w-5 h-5 rounded-md bg-white/[0.05] border border-white/10 flex items-center justify-center font-mono text-[10px] text-[var(--accent)] shrink-0">
                              0{i + 1}
                            </span>
                            <span className="text-xs font-mono text-zinc-300 leading-snug">
                              {node}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expandable "Inside This Project" Accordion Drawer */}
                {isExpanded && (
                  <div className="mt-8 pt-8 border-t border-white/10 animate-in fade-in duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-3">
                          Engineering Approach
                        </h4>
                        <ul className="space-y-2">
                          {project.approach.map((step) => (
                            <li key={step} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                              <CheckCircle className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-3">
                          Architectural Decisions &amp; Tradeoffs
                        </h4>
                        <div className="space-y-3">
                          {project.keyDecisions.map((kd) => (
                            <div key={kd.decision} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                              <p className="text-xs font-semibold text-white mb-1">{kd.decision}</p>
                              <p className="text-xs text-zinc-400 leading-relaxed">{kd.rationale}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[var(--accent)] hover:underline underline-offset-4"
                      >
                        Read complete case study →
                      </Link>
                    </div>
                  </div>
                )}
              </SpotlightCard>
            );
          })}
        </div>

        {/* Bottom Explore All CTA */}
        <div className="text-center pt-4">
          <a
            href={projects[0].githubUrl.includes("github.com") ? projects[0].githubUrl : "https://github.com/ujjwalMishra199"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/30 text-xs font-mono uppercase tracking-widest text-zinc-300 hover:text-white transition-all group"
          >
            <span>Explore all repositories on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
