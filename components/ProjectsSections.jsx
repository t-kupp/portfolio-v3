"use client";

import Divider from "./Divider";
import SectionHeadline from "./SectionHeadline";
import { projectsData } from "@/util/projectData";
import LinkButton from "./LinkButton";
import { motion } from "motion/react";
import { useTheme } from "@/context/ThemeContext";
import { useState, useEffect } from "react";
import ProjectBadges from "./ProjectBadges";

export default function ProjectsSection() {
  return (
    <div className="flex flex-col justify-center px-4 pb-42 transition-colors duration-500 lg:px-8">
      <Divider />
      <SectionHeadline title={"Projects"} />
      <LinkButton
        title={"View this portfolio website on GitHub"}
        href={"https://github.com/t-kupp/portfolio-v3"}
        className={"border-foreground-muted mx-auto my-32 mt-16 border"}
      />
      <div className="flex flex-col gap-16 md:gap-32">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            alignment={index % 2 === 0 ? "left" : "right"}
            comingSoon={project.comingSoon}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, alignment, comingSoon }) {
  const { theme } = useTheme();
  const [imgSrc, setImgSrc] = useState(`/images/${project.img}`);

  useEffect(() => {
    if (theme === "dark") {
      setImgSrc(`/images/${project.img}`);
    } else {
      setImgSrc(`/images/dark_${project.img}`);
    }
  }, [theme]);

  // Load normal picture if no dark version available
  function handleError() {
    if (theme === "light") {
      setImgSrc(`/images/${project.img}`);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="flex flex-col justify-between md:flex-row md:gap-8"
    >
      <div
        className={`${alignment == "right" ? "md:order-2" : ""} pb-8 md:w-[55%] md:pb-0`}
      >
        <img
          onError={handleError}
          src={imgSrc}
          className={`${alignment === "left" ? "ml-auto" : ""} border-border w-full rounded-lg border transition-colors duration-500`}
          alt="Preview image"
        />
      </div>
      <div
        className={`${alignment == "right" ? "md:items-end md:text-right" : ""} flex flex-col justify-center md:w-[45%]`}
      >
        <h4>{project.title}</h4>
        <p className="mt-4 !text-[1rem] opacity-85">{project.year}</p>
        <p className="opacity-85">{project.description}</p>
        <ProjectBadges technologies={project.technologies} />
        <div className="mt-8 flex w-full flex-col items-center gap-8 md:flex-row">
          {comingSoon ? (
            <LinkButton
              href={""}
              title={"Coming soon..."}
              className={
                "pointer-events-none w-full cursor-not-allowed text-nowrap opacity-50"
              }
            />
          ) : (
            <LinkButton
              title={"Live preview"}
              href={project.hrefLive}
              className={"w-full text-nowrap"}
            />
          )}

          <LinkButton
            title={"View on GitHub"}
            href={project.hrefGitHub}
            className={"w-full text-nowrap"}
          />
        </div>
      </div>
    </motion.div>
  );
}
