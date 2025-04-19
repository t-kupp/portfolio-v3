import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <div className="flex min-h-[80vh] flex-col justify-end">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="px-4 py-16 lg:px-8"
      >
        <h1 className="py-10">
          Jan-Thorge
          <br />
          Kupper
        </h1>
      </motion.div>
    </div>
  );
}
