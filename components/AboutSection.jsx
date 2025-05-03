"use client";

import SectionHeadline from "./SectionHeadline";
import Divider from "./Divider";
import { useState } from "react";
import { Dot, Minus, Plus } from "lucide-react";
import { techStackData } from "@/util/techStackData";

export default function AboutSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-background flex flex-col px-4 pb-42 transition-colors duration-500 lg:px-8">
      <Divider />
      <SectionHeadline title={"About"} />
      <div className="w-full self-end sm:w-2/3">
        <h4 className="pb-12">
          I believe in two core principles:
          <br />
          <br />
          <div className="flex flex-col gap-1">
            <span className="flex items-center italic">
              <Dot size={32} /> "Teamwork makes the dream work"
            </span>
            <span className="flex items-center italic">
              <Dot size={32} /> "Never stop learning"
            </span>
          </div>
          <br />
          For me, great work comes from a balance of collaboration and autonomy,
          anchored by clear communication. I'm always trying to learn as much as
          possible in a collaborative environment and greatly value receiving
          and providing feedback, while also enjoying the challenge of
          independent problem-solving to deliver results.
          <br />
          <br />
          What I love about web development is the combination of creative
          freedom to develop clean, elegant design while simultaneously being
          able to solve logic-based challenges through coding.
        </h4>
        <Divider />
        <div
          className={`${isOpen ? "max-h-[10rem]" : "max-h-[4rem]"} overflow-hidden py-3 transition-[max-height] duration-500`}
        >
          <p
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer items-center justify-between py-1"
            role="button"
          >
            Technologies I work with{" "}
            <span>{isOpen ? <Minus /> : <Plus />}</span>
          </p>
          <div className="mt-3 mb-3">
            <div className="grid grid-cols-3">
              {techStackData.map((item, index) => {
                return (
                  <div
                    className="text-foreground-muted flex items-center gap-1"
                    key={index}
                  >
                    <i className={item.deviconName + " !text-[1rem]"}></i>
                    <p className="!text-[1rem]">{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Divider />
      </div>
    </div>
  );
}
