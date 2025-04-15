"use client";

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import DotPlain from "@/components/DotPlain";
import HeroSection from "@/components/HeroSection";
import HorizontalScroller from "@/components/HorizontalScroller";
import ProjectsSection from "@/components/ProjectsSections";
import { Parallax } from "react-scroll-parallax";

export default function Home() {
  return (
    <div className="">
      <Parallax
        translateY={[-20, 0]}
        shouldAlwaysCompleteAnimation={true}
        className={`fixed top-0 -z-10 h-[130vh] w-screen opacity-15`}
      >
        <DotPlain />
      </Parallax>
      <HeroSection />
      <HorizontalScroller />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
