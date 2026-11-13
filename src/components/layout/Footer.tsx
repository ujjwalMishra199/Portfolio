"use client";

import React, { useState, useEffect } from "react";
import { profile } from "@/data/profile";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Footer() {
  const [localTime, setLocalTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(now);
        setLocalTime(formatted);
      } catch {
        setLocalTime("12:00:00 AM IST");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#050608] pt-16 pb-12 text-zinc-400 font-sans">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/[0.06]">
          {/* Col 1: Identity & Statement */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                07 // PERSISTENCE
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mt-3">
                Ujjwal <span className="font-serif italic bg-[linear-gradient(100deg,var(--accent),var(--accent-2))] text-transparent bg-clip-text">Mishra</span>
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mt-3">
                Full Stack & Backend Developer crafting high-reliability APIs, clean relational schemas, and scalable web architectures.
              </p>
            </div>

            {/* Gurgaon Time Pill */}
            <div className="mt-6 inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--success)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--success)]" />
              </span>
              <span className="font-mono text-[11px] text-zinc-300">
                GURGAON, IN: <span className="text-[var(--accent)] font-medium">{localTime || "IST"}</span>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500 block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5 text-sm font-mono uppercase tracking-wider">
              {["Work", "About", "How I Work", "Skills", "Journey", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-zinc-400 hover:text-[var(--accent)] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500 block mb-4">
                Connect Directly
              </span>
              <div className="space-y-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 text-sm text-zinc-300 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[var(--accent)]" />
                  <span className="group-hover:underline">{profile.email}</span>
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-zinc-300 hover:text-white transition-colors group"
                >
                  <GithubIcon className="w-4 h-4 text-[var(--accent)]" />
                  <span className="group-hover:underline">github.com/ujjwalMishra199</span>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-zinc-300 hover:text-white transition-colors group"
                >
                  <LinkedinIcon className="w-4 h-4 text-[var(--accent)]" />
                  <span className="group-hover:underline">LinkedIn / ujjwal-mishra</span>
                </a>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={scrollToTop}
                type="button"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-[var(--accent)] transition-colors border-b border-transparent hover:border-[var(--accent)] pb-0.5"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p>© 2026 Ujjwal Mishra. Built with intent. Always evolving.</p>
          <p className="text-zinc-600">Next.js · TypeScript · Tailwind CSS · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
