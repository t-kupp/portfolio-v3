"use client";

import { motion } from "motion/react";
import { useEffect } from "react";

export default function LoadingScreen() {
  // Robust solution to prevent scrolling during loading screen
  // Extensive code needed to work with smooth-scroll library
  useEffect(() => {
    // Store original body styles
    const originalStyle = window.getComputedStyle(document.body);
    const originalOverflow = originalStyle.overflow;
    const originalPosition = originalStyle.position;
    const originalWidth = originalStyle.width;
    const originalTop = originalStyle.top;
    const originalScrollY = window.scrollY;

    // Disable scrolling when component mounts
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${originalScrollY}px`;

    // Enable scrolling after animation completes
    const timer = setTimeout(() => {
      document.body.style.overflow = originalOverflow;
      document.body.style.position = originalPosition;
      document.body.style.top = originalTop;

      // Restore scroll position
      window.scrollTo(0, originalScrollY);
    }, 2200);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
      document.body.style.position = originalPosition;
      document.body.style.top = originalTop;
      window.scrollTo(0, originalScrollY);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ delay: 1.4, duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 z-[100] flex h-screen w-screen flex-col items-center justify-center bg-black text-white"
    >
      <h4 className="mb-1">Jan-Thorge Kupper</h4>
      <p className="text-gray-400">// Portfolio</p>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
        className="fixed top-[100vh] left-0 h-screen w-screen border-b border-black bg-white mix-blend-difference"
      />
    </motion.div>
  );
}
