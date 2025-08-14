"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const loadingScreen = useRef(null);
  const progressRef = useRef(null);
  const leftLine = useRef(null);
  const rightLine = useRef(null);
  const topHalf = useRef(null);
  const bottomHalf = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        const main = document.getElementById("main");
        main.classList.remove("hidden");
        loadingScreen.current.classList.add("hidden");
      },
    });

    const lines = gsap.to([leftLine.current, rightLine.current], {
      scaleX: 1,
      ease: "power2.out",
      duration: 3,
      onUpdate: () => {
        const easedProgress = gsap.parseEase("power2.out")(lines.progress());
        setProgress(Math.round(easedProgress * 100));
      },
    });
    tl.add(lines);
    tl.to(
      [leftLine.current, rightLine.current, progressRef.current],
      { opacity: 0, duration: 0.25, filter: "blur(3px)" },
      ">",
    );

    tl.to(
      topHalf.current,
      { yPercent: -100, ease: "expo.in", duration: 0.5 },
      "<",
    );

    tl.to(
      bottomHalf.current,
      { yPercent: 100, ease: "expo.in", duration: 0.5 },
      "<",
    );
  });

  return (
    <div
      ref={loadingScreen}
      className="fixed top-0 left-0 z-[9999] h-screen w-screen"
    >
      <div ref={topHalf} className="h-1/2 w-full bg-black"></div>
      <div className="absolute top-1/2 flex w-full -translate-y-1/2 items-center gap-4">
        <div className="w-full">
          <div
            ref={leftLine}
            className="h-[2px] origin-right scale-x-0 bg-white"
          ></div>
        </div>
        <p
          ref={progressRef}
          className="font-neueMontreal-mono !text-7xl text-white"
        >
          {progress}
        </p>
        <div className="w-full">
          <div
            ref={rightLine}
            className="h-[2px] origin-left scale-x-0 bg-white"
          ></div>
        </div>
      </div>
      <div ref={bottomHalf} className="h-1/2 w-full bg-black"></div>
    </div>
  );
}
