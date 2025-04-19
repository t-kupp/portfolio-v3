"use client";

import { motion } from "motion/react";

export default function Divider() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{
        delay: 1.8,
        duration: 0.5,
      }}
      className="bg-border h-[1px] w-full transition-colors duration-500"
    ></motion.div>
  );
}
