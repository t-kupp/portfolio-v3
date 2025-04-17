"use client";
import { useEffect } from "react";

export default function ScrollOpacityController({
  maxScrollPercent = 50,
  startOpacity = 0.3,
  endOpacity = 0, // New parameter for minimum opacity
}) {
  useEffect(() => {
    // Function to update CSS variable based on scroll
    const updateOpacity = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / Math.max(1, docHeight)) * 100;

      // Calculate the fade range (from startOpacity to endOpacity)
      const opacityRange = startOpacity - endOpacity;

      // Calculate current opacity based on scroll percentage
      const currentOpacity =
        startOpacity -
        (opacityRange * Math.min(scrollPercent, maxScrollPercent)) /
          maxScrollPercent;

      // Ensure we don't go below endOpacity
      const opacity = Math.max(endOpacity, currentOpacity);

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
  }, [maxScrollPercent, startOpacity, endOpacity]);

  // This component doesn't render anything
  return null;
}
