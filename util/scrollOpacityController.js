"use client";
import { useEffect } from "react";

export default function ScrollOpacityController({
  fadeStartPercent = 0, // When to start fading out
  fadeEndPercent = 50, // When to reach minimum opacity
  fadeInPercent = 70, // When to start fading back in
  startOpacity = 0.3, // Starting opacity
  endOpacity = 0, // Minimum opacity
}) {
  useEffect(() => {
    // Function to update CSS variable based on scroll
    const updateOpacity = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / Math.max(1, docHeight)) * 100;

      let opacity;

      // Calculate the fade range
      const opacityRange = startOpacity - endOpacity;

      if (scrollPercent <= fadeStartPercent) {
        // Before fade out begins
        opacity = startOpacity;
      } else if (scrollPercent <= fadeEndPercent) {
        // During fade out
        const fadeOutProgress =
          (scrollPercent - fadeStartPercent) /
          (fadeEndPercent - fadeStartPercent);
        opacity = startOpacity - opacityRange * fadeOutProgress;
      } else if (scrollPercent <= fadeInPercent) {
        // Stay at minimum opacity
        opacity = endOpacity;
      } else {
        // Fade back in
        const fadeInProgress =
          (scrollPercent - fadeInPercent) / (100 - fadeInPercent);
        opacity = endOpacity + opacityRange * fadeInProgress;
      }

      // Ensure opacity stays within desired range
      opacity = Math.max(endOpacity, Math.min(startOpacity, opacity));

      // Set the CSS variable on document root
      document.documentElement.style.setProperty("--scroll-opacity", opacity);
    };

    // Use requestAnimationFrame for performance
    let rafId;
    let isScrolling = false;

    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;
        rafId = window.requestAnimationFrame(() => {
          updateOpacity();
          isScrolling = false;
        });
      }
    };

    // Initialize
    updateOpacity();
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [
    fadeStartPercent,
    fadeEndPercent,
    fadeInPercent,
    startOpacity,
    endOpacity,
  ]);

  // This component doesn't render anything
  return null;
}
