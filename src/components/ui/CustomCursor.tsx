"use client";

import React, { useEffect, useState } from "react";
import { useMotion } from "@/components/ui/MotionProvider";

export function CustomCursor() {
  const { shouldAnimate } = useMotion();
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice || !shouldAnimate) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest("a, button, input, textarea, [role='button']");
        setIsPointer(!!interactive);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [shouldAnimate]);

  if (!position || !shouldAnimate) return null;

  return (
    <div
      className="pointer-events-none fixed z-40 transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        className={`rounded-full transition-all duration-200 ${
          isPointer
            ? "w-10 h-10 bg-[var(--accent)]/15 border border-[var(--accent)]/40 scale-125 backdrop-blur-[1px]"
            : "w-5 h-5 bg-white/20 border border-white/40"
        }`}
      />
    </div>
  );
}

