"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

export default function Cursor() {
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const cursorRef = useRef(null);

  // Clickable detection
  function isClickable(elements) {
    const interactiveSelectors = [
      "a[href]",
      "button",
      "select",
      '[role="button"]',
      "[onclick]",
      '[style*="cursor: pointer"]',
    ];

    return elements.some((element) => {
      return interactiveSelectors.some((selector) => {
        return element.matches(selector);
      });
    });
  }

  useGSAP(() => {
    function handleMouseMove(e) {
      let offsetY = 13;

      const targetElements = document.elementsFromPoint(e.clientX, e.clientY);

      const targetIsClickable = isClickable(targetElements);
      setIsHoveringClickable(targetIsClickable);

      if (targetIsClickable) {
        offsetY = 0;
      }

      moveMouseX(e.clientX);
      moveMouseY(e.clientY - offsetY);
    }

    const moveMouseX = gsap.quickTo(cursorRef.current, "left", {
      duration: 0.2,
      ease: "power1",
    });

    const moveMouseY = gsap.quickTo(cursorRef.current, "top", {
      duration: 0.2,
      ease: "power1",
    });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <div
      ref={cursorRef}
      className={`${isHoveringClickable ? "h-0 w-0" : "h-2 w-2"} pointer-events-none fixed top-0 left-0 z-[9999] hidden -translate-x-2.5 rounded-full bg-white mix-blend-difference transition-[width,height] duration-200 md:block`}
    />
  );
}
