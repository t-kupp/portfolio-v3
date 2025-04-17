"use client";

import SectionHeadline from "./SectionHeadline";
import Divider from "./Divider";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { techStackData } from "@/util/techStackData";

export default function AboutSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col px-4 pb-42 transition-colors duration-500 lg:px-8">
      <Divider />
      <SectionHeadline title={"About"} />
      <div className="w-full self-end sm:w-2/3">
        <h4 className="pb-12">
          After relocating from Germany to Sweden in 2023, I'm now dedicated to
          building my future in web development. Currently studying frontend
          development at Chas Academy in Stockholm, where I build modern web
          applications with JavaScript, React, Next.js, and Tailwind.
          <br />
          <br />
          Beyond the frontend, I'm also diving into backend development with
          Next.js API routes, Express.js, and databases like MySQL and Supabase
          (PostgreSQL) to build fullstack solutions.
          <br />
          <br />
          I'm very passionate about web development, always eager to learn more
          and looking for opportunities to improve my skills.
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
