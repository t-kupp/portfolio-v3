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
        fadeStartPercent={0}
        fadeEndPercent={20}
        fadeInPercent={70}
        startOpacity={0.2}
        endOpacity={0.001}
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
