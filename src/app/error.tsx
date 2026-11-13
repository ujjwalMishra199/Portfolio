"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Report or observe error without crashing
  }, [error]);

  return (
    <main className="min-h-[85vh] flex flex-col items-center justify-center px-4 text-center relative overflow-hidden bg-[var(--bg)] text-[var(--text)]">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] rounded-full bg-[radial-gradient(closest-side,rgba(244,63,94,0.15),transparent_70%)] blur-[50px] pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-rose-400 mb-3 inline-block">
          500 // SYSTEM EXCEPTION
        </span>

        <h1 className="font-serif text-5xl sm:text-6xl font-bold tracking-tight text-white mb-4">
          Unexpected <span className="italic font-normal text-rose-300">Failure</span>
        </h1>

        <p className="font-sans text-sm sm:text-base text-[var(--text-muted)] max-w-md mb-8 leading-relaxed">
          An unexpected error occurred during rendering. You can retry the operation or return to the main portfolio.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            type="button"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-950 font-semibold text-xs font-mono uppercase tracking-wider hover:bg-[var(--accent)] transition-all duration-200 hover:-translate-y-0.5 shadow-[0_0_20px_rgba(255,255,255,0.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
          >
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full border border-white/20 bg-white/[0.03] hover:border-[var(--accent)] text-xs font-mono uppercase tracking-wider text-[var(--text)] hover:text-white transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
          >
            <span>Return Home</span>
            <span className="text-[var(--accent)]">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

