import React from "react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { HowIWork } from "@/components/sections/HowIWork";
import { Skills } from "@/components/sections/Skills";
import { Journey } from "@/components/sections/Journey";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* 01 // PRESENCE */}
      <Hero />

      {/* 01 // THE PERSON BEHIND THE CODE */}
      <About />

      {/* 02 // SELECTED WORK */}
      <SelectedWork />

      {/* 03 // HOW I THINK & WORK */}
      <HowIWork />

      {/* 04 // THE TOOLKIT */}
      <Skills />

      {/* 05 // STILL BECOMING */}
      <Journey />

      {/* 06 // THE NEXT CHAPTER */}
      <Contact />
    </>
  );
}
