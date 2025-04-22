"use client";

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import DotPlain from "@/components/DotPlain";
import HeroSection from "@/components/HeroSection";
import HorizontalScroller from "@/components/HorizontalScroller";
import ProjectsSection from "@/components/ProjectsSections";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2.5,
          duration: 0.6,
        }}
      >
        {/* <DotPlain /> */}
      </motion.div>
      <HeroSection />
      <HorizontalScroller />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
