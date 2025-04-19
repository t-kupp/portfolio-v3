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
      <DotPlain />
      <HeroSection />
      <HorizontalScroller />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
