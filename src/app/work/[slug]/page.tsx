import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, Project } from "@/data/projects";
import { profile } from "@/data/profile";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { GithubIcon } from "@/components/ui/Icons";
import { ArrowLeft, ArrowUpRight, ExternalLink, CheckCircle2, AlertTriangle, Lightbulb, Layers } from "lucide-react";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found | Ujjwal Mishra" };

  return {
    title: `${project.title} — Case Study | Ujjwal Mishra`,
    description: project.problem,
    openGraph: {
      title: `${project.title} — Engineering Case Study`,
      description: project.tagline,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-32 pb-24 text-zinc-300 font-sans">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-cyan-400 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Selected Work</span>
          </Link>
        </div>

        {/* Header Block */}
        <header className="mb-14 pb-12 border-b border-white/10">
          <SectionLabel number={project.number} label={project.category} />

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl text-zinc-300 leading-relaxed font-normal mb-8">
            {project.tagline}
          </p>

          {/* Author byline */}
          <div className="flex items-center gap-2 mb-8">
            <div
              className="relative overflow-hidden shrink-0"
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,.12)",
                background: "linear-gradient(160deg,#0b1220,#12304a)",
              }}
            >
              <Image
                src="/images/ujjwal-cutout.webp"
                alt="Ujjwal Mishra"
                width={28}
                height={28}
                className="object-cover w-full h-full"
                style={{ objectPosition: "50% 18%" }}
              />
            </div>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">By Ujjwal Mishra</span>
          </div>

          {/* Metadata Meta Strip */}
          <div className={`grid grid-cols-2 ${Boolean(project.metricsTarget && !project.metricsTarget.includes("[ADD")) ? "sm:grid-cols-4" : "sm:grid-cols-3"} gap-4 p-5 rounded-2xl border border-white/[0.08] bg-white/[0.015] font-mono text-xs`}>
            <div>
              <span className="text-zinc-500 block uppercase tracking-wider mb-1">Role</span>
              <span className="text-white font-medium">{project.role}</span>
            </div>
            <div>
              <span className="text-zinc-500 block uppercase tracking-wider mb-1">Organization</span>
              <span className="text-white font-medium">{project.company || "Independent"}</span>
            </div>
            <div>
              <span className="text-zinc-500 block uppercase tracking-wider mb-1">Timeline</span>
              <span className="text-white font-medium">{project.timeline}</span>
            </div>
            {Boolean(project.metricsTarget && !project.metricsTarget.includes("[ADD")) && (
              <div>
                <span className="text-zinc-500 block uppercase tracking-wider mb-1">Target Metric</span>
                <span className="text-cyan-400 font-medium">{project.metricsTarget}</span>
              </div>
            )}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            {project.githubUrl && project.githubUrl !== "[ADD GITHUB URL]" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-xs font-mono text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span>View Source on GitHub</span>
              </a>
            )}
            {project.liveUrl && project.liveUrl !== "[ADD LIVE URL]" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-semibold text-xs transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visit Live Platform</span>
              </a>
            )}
          </div>
        </header>

        {/* Section 1: The Problem & Context */}
        <section className="mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 block mb-3">
            01 // CONTEXT &amp; PROBLEM
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-4">
            The Engineering Challenge
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-4">
            {project.overview}
          </p>
          <div className="p-6 rounded-2xl border border-rose-500/20 bg-rose-500/[0.02] text-sm text-zinc-300 leading-relaxed">
            <strong className="text-rose-300 font-mono text-xs uppercase tracking-wider block mb-2">
              Specific Friction Point
            </strong>
            {project.problemDetail}
          </div>
        </section>

        {/* Section 2: Technical Approach */}
        <section className="mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 block mb-3">
            02 // IMPLEMENTATION
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-6">
            Architectural Approach
          </h2>
          <div className="space-y-4">
            {project.approach.map((step, idx) => (
              <div
                key={step}
                className="flex items-start gap-4 p-5 rounded-xl border border-white/[0.06] bg-[#0b0d13]"
              >
                <span className="font-mono text-xs font-bold text-cyan-400 px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 shrink-0">
                  0{idx + 1}
                </span>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: System Architecture Flow */}
        <section className="mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 block mb-3">
            03 // ARCHITECTURE &amp; DATA FLOW
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-4">
            {project.architecture.title}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mb-6">
            {project.architecture.description}
          </p>

          <SpotlightCard className="bg-[#090b10] border-white/10 p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/[0.08]">
              <Layers className="w-5 h-5 text-cyan-400" />
              <span className="font-mono text-xs uppercase tracking-widest text-white font-bold">
                End-to-End Pipeline Steps
              </span>
            </div>

            <div className="space-y-4">
              {project.architecture.flow.map((node, i) => (
                <div key={node} className="relative flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center font-mono text-xs text-cyan-400 shrink-0">
                    {i + 1}
                  </div>
                  <div className="text-sm font-mono text-zinc-200">
                    {node}
                  </div>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </section>

        {/* Section 4: Key Decisions & Tradeoffs */}
        <section className="mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 block mb-3">
            04 // DECISIONS &amp; TRADEOFFS
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-6">
            Engineering Tradeoffs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.keyDecisions.map((kd) => (
              <div
                key={kd.decision}
                className="p-6 rounded-2xl border border-white/[0.08] bg-[#0c0e14] flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[11px] text-cyan-400 uppercase tracking-wider block mb-2">
                    Decision
                  </span>
                  <h3 className="text-base font-semibold text-white mb-3">
                    {kd.decision}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {kd.rationale}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Challenges & Lessons Learned */}
        <section className="mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 block mb-3">
            05 // RETROSPECTIVE
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-6">
            Challenges &amp; Lessons Learned
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-[var(--accent-2)]/25 bg-[var(--accent-2)]/[0.03]">
              <div className="flex items-center gap-2 mb-4 text-[var(--accent-2)]">
                <AlertTriangle className="w-4 h-4" />
                <span className="font-mono text-xs uppercase tracking-wider font-bold">
                  Hurdles Encountered
                </span>
              </div>
              <ul className="space-y-3">
                {project.challenges.map((ch) => (
                  <li key={ch} className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    • {ch}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.02]">
              <div className="flex items-center gap-2 mb-4 text-cyan-400">
                <Lightbulb className="w-4 h-4" />
                <span className="font-mono text-xs uppercase tracking-wider font-bold">
                  Takeaways &amp; Growth
                </span>
              </div>
              <ul className="space-y-3">
                {project.learnings.map((ln) => (
                  <li key={ln} className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    • {ln}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/#work"
            className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-cyan-300 transition-colors"
          >
            ← Back to all projects
          </Link>
          <a
            href={`mailto:${profile.email}?subject=Question regarding ${project.title}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-zinc-950 font-semibold text-xs hover:bg-cyan-300 transition-colors"
          >
            <span>Discuss this architecture</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
