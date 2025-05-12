"use client";

import SectionHeadline from "./SectionHeadline";
import Divider from "./Divider";
import TechStack from "./TechStack";

export default function AboutSection() {
  return (
    <div className="bg-background flex flex-col px-4 pb-42 transition-colors duration-500 lg:px-8">
      <Divider />
      <SectionHeadline title={"About"} />
      <div className="w-full self-end sm:w-2/3">
        <h4 className="pb-12">
          Hej! I'm Jan, a Fullstack Developer in the making. After relocating
          from Germany to Sweden in 2023, I now study at Chas Academy,
          specializing in Next.js and React while expanding my backend expertise
          with Express and PostgreSQL to build fullstack solutions.
          <br />
          <br />I believe in two core principles:
          <span className="font-medium"> “Teamwork makes the dream work” </span>
          and
          <span className="font-medium"> “Never stop learning.”</span>
          <br />
          <br />
          For me, great work comes from a balance of collaboration and autonomy,
          anchored by clear communication. I love working in teams and greatly
          value exchanging feedback, while also enjoying the challenge of
          independent problem-solving to deliver results.
          <br />
          <br />
          What excites me most about web development is the perfect intersection
          of creative freedom to craft clean, elegant designs and solving the
          technical puzzles that bring them to life through code.
        </h4>
        <Divider />
        <TechStack />
        <Divider />
      </div>
    </div>
  );
}
