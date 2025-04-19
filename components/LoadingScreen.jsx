"use client";

import { motion } from "motion/react";

export default function LoadingScreen() {
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
        className="fixed top-[100vh] left-0 h-screen w-screen bg-white mix-blend-difference"
      />
    </motion.div>
  );
}
