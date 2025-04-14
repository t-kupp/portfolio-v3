import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import DotPlain from "@/components/DotPlain";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSections";

export default function Home() {
  return (
    <div className="">
      <DotPlain />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
