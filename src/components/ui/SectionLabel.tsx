import React from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  number: string;
  label: string;
  className?: string;
}

export function SectionLabel({ number, label, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-3 select-none",
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
      <span className="text-[var(--text-muted)]">{number}</span>
      <span className="text-[var(--text-muted)]/60">/</span>
      <span className="text-[var(--text)] font-medium">{label}</span>
    </div>
  );
}
