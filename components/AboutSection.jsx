"use client";

import Divider from "./Divider";
import SectionHeadline from "./SectionHeadline";

export default function AboutSection() {
  return (
    <div className="bg-background flex flex-col px-4 pb-42 transition-colors duration-500 lg:px-8">
      <Divider />
      <SectionHeadline title={"About"} />
      <div className="w-full self-end sm:w-2/3">
        <h4 className="pb-12">
          Frontend developer student based in Stockholm, originally from
          Germany. I check Awwwards Site of the Day daily and love when a design
          just works perfectly.
          <br />
          <br />
          Currently learning GSAP by recreating award-winning websites like
          Synthetic Theater. Working toward specializing in creative web
          development and interactive design.
        </h4>
      </div>
    </div>
  );
}
