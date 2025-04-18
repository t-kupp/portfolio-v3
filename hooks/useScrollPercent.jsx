"use client";
import { useEffect } from "react";

export default function ScrollOpacityController({
  maxScrollPercent = 50,
  startOpacity = 0.3,
}) {
  useEffect(() => {
    // Function to update CSS variable based on scroll
    const updateOpacity = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / Math.max(1, docHeight)) * 100;

      // Calculate opacity (starting at startOpacity, fading to 0 at maxScrollPercent)
      const opacity = Math.max(
        0,
        startOpacity - (startOpacity * scrollPercent) / maxScrollPercent,
      );

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
  }, [maxScrollPercent, startOpacity]);

  // This component doesn't render anything
  return null;
}
