"use client";

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSections";
import TechnologySection from "@/components/TechnologySection";

export default function Home() {
  return (
    <div id="main" className="hidden">
      <HeroSection />
      <AboutSection />
      <TechnologySection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
