"use client";

import { ArrowRight } from "lucide-react";
import Divider from "./Divider";
import SectionHeadline from "./SectionHeadline";
import { Parallax } from "react-scroll-parallax";

import { projectsData } from "@/util/projectData";

export default function ProjectsSection() {
  return (
    <div className="bg-background flex flex-col justify-center px-4 pb-42 transition-colors duration-500 lg:px-8">
      <Divider />
      <SectionHeadline title={"Projects"} />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <a
        href={"https://github.com/t-kupp/portfolio-v3"}
        target="_blank"
        className="link hover:bg-foreground hover:text-background group mx-auto mt-42 flex w-full max-w-xl items-center justify-between px-4 py-2"
      >
        <p>View this portfolio project on GitHub</p>
        <ArrowRight className="transition-[translate] duration-200 group-hover:translate-x-1" />
      </a>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <Parallax speed={Math.random() * 5}>
      <a
        href={project.href}
        target="_blank"
        className="border-border bg-background group hover:text-background hover:bg-foreground bg-[{/images/${project.img}}] flex h-[26rem] flex-col rounded border"
      >
        {/* <img
          src={`/images/${project.img}`}
          className="h-[80%] w-full rounded-t object-cover object-top grayscale group-hover:hidden"
          alt=""
        /> */}
        <p className="hidden h-[80%] p-4 group-hover:block">
          {project.description}
        </p>
        <div className="mt-auto h-[20%] p-4">
          <p className="!text-[1rem] !leading-[1]">
            {project.title}
            <br />
            <span className="flex items-center justify-between">
              {project.year}
              <span>
                <ArrowRight className="transition-[translate] duration-200 group-hover:translate-x-1" />
              </span>
            </span>
          </p>
        </div>
      </a>
    </Parallax>
  );
}
