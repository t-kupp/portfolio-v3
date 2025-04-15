"use client";

import { useState, useEffect } from "react";

export default function useScrollPercentage() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percent = (scrollTop / docHeight) * 100;
      setScrollPercent(percent);
    };

    window.addEventListener("scroll", handleScroll);

    // Run once on mount in case the user is already scrolled
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollPercent };
}
