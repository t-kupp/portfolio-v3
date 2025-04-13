"use client";

import SectionHeadline from "./SectionHeadline";
import Divider from "./Divider";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export default function AboutSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <SectionHeadline title={"About"} />
      <div className="max-w-2xl self-end">
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
          className={`${isOpen ? "h-[271px]" : "h-16"} overflow-hidden py-4 transition-[height] duration-300`}
        >
          <p
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer justify-between"
          >
            Techstack <span>{isOpen ? <Minus /> : <Plus />}</span>
          </p>
          <div className="mt-2">
            <p>Lorem Ipsum </p>
            <p>Lorem Ipsum </p>
            <p>Lorem Ipsum </p>
            <p>Lorem Ipsum </p>
            <p>Lorem Ipsum </p>
            <p>Lorem Ipsum </p>
          </div>
        </div>
        <Divider />
      </div>
    </div>
  );
}
