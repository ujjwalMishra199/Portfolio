"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface MotionContextType {
  motionEnabled: boolean;
  toggleMotion: () => void;
  shouldAnimate: boolean;
}

const MotionContext = createContext<MotionContextType>({
  motionEnabled: true,
  toggleMotion: () => {},
  shouldAnimate: true,
});

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const systemReduced = useReducedMotion();
  const [motionEnabled, setMotionEnabled] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("ujjwal_motion_preference");
    if (saved !== null) {
      setMotionEnabled(saved === "true");
    } else if (systemReduced) {
      setMotionEnabled(false);
    }
  }, [systemReduced]);

  const toggleMotion = () => {
    setMotionEnabled((prev) => {
      const next = !prev;
      localStorage.setItem("ujjwal_motion_preference", String(next));
      return next;
    });
  };

  const shouldAnimate = mounted && motionEnabled && !systemReduced;

  return (
    <MotionContext.Provider value={{ motionEnabled, toggleMotion, shouldAnimate }}>
      {children}
    </MotionContext.Provider>
  );
}

export function useMotion() {
  return useContext(MotionContext);
}

