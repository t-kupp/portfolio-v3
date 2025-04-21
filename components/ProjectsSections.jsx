"use client";

import Divider from "./Divider";
import SectionHeadline from "./SectionHeadline";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

import { projectsData } from "@/util/projectData";
import LinkButton from "./LinkButton";

export default function ProjectsSection() {
  return (
    <div className="bg-background flex flex-col justify-center px-4 pb-42 transition-colors duration-500 lg:px-8">
      <Divider />
      <SectionHeadline title={"Projects"} />
      <div className="flex flex-col gap-16 md:gap-32">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            alignment={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, alignment }) {
  return (
    <div className="flex flex-col justify-between md:flex-row md:gap-8">
      <div
        className={`${alignment == "right" && "md:order-2"} pb-8 md:w-[55%] md:pb-0`}
      >
        <img
          src={`/images/${project.img}`}
          className={`${alignment == "left" && "ml-auto"} w-full rounded-lg`}
          alt=""
        />
      </div>
      <div
        className={`${alignment == "right" && "md:items-end md:text-right"} flex flex-col justify-center md:w-[45%]`}
      >
        <h4>{project.title}</h4>
        <p className="mt-4 !text-[1rem] opacity-85">{project.year}</p>
        <p className="opacity-85">{project.description}</p>
        <div className="mt-8 flex w-full flex-col items-center gap-8 md:flex-row">
          <LinkButton
            title={"Live preview"}
            href={project.hrefLive}
            className={"w-full text-nowrap"}
          />
          <LinkButton
            title={"View on GitHub"}
            href={project.hrefGitHub}
            className={"w-full text-nowrap"}
          />
        </div>
      </div>
    </div>
  );
}
