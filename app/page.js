"use client";

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import DotPlain from "@/components/DotPlain";
import HeroSection from "@/components/HeroSection";
import HorizontalScroller from "@/components/HorizontalScroller";
import ProjectsSection from "@/components/ProjectsSections";
import ScrollOpacityController from "@/util/scrollOpacityController";
import { Parallax } from "react-scroll-parallax";

export default function Home() {
  return (
    <div className="">
      {/* Opacity controller for DotPlain */}
      <ScrollOpacityController
        maxScrollPercent={20}
        startOpacity={0.2}
        endOpacity={0.00001} // Important to not be 0 to avoid lag on rerender when scrolling up
      />

      <DotPlain />

      <HeroSection />
      <HorizontalScroller />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
