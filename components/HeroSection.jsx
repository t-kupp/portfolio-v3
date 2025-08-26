import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import LandingGeometry from "./LandingGeometry";

gsap.registerPlugin(SplitText);

export default function HeroSection() {
  useGSAP(() => {
    const nameSplit = SplitText.create(".hero-name", {
      type: "chars, words",
      mask: "chars",
    });
    const craftSplit = SplitText.create(".hero-craft", {
      type: "chars, words",
      mask: "chars",
    });

    gsap.from(nameSplit.chars, {
      x: 100,
      stagger: 0.01,
      delay: 3.5,
      duration: 1,
      ease: "power2",
    });

    gsap.from(
      craftSplit.chars,
      {
        x: 100,
        stagger: 0.01,
        duration: 1,
        ease: "power2",
      },
      "<+0.3",
    );
  });

  return (
    <div className="relative -mt-[57px] mb-42 flex h-[100svh] flex-col justify-center p-4 md:h-[95vh] md:p-8">
      <div className="absolute top-0 left-0 h-full w-full">
        <LandingGeometry />
      </div>
      <div className="flex flex-col gap-8 text-[10vw] leading-none text-white uppercase mix-blend-difference lg:gap-0 lg:text-[5vw]">
        <h1 className="hero-name font-medium">Jan-Thorge Kupper</h1>
        <h1 className="hero-craft place-self-end text-right font-medium">
          Frontend Developer
        </h1>
      </div>
      <div className="scroll-indicator absolute bottom-2">
        <p className="">// Scroll to explore</p>
      </div>
    </div>
  );
}
