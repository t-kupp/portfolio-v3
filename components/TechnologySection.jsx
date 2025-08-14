"use client";

import Divider from "./Divider";
import SectionHeadline from "./SectionHeadline";
import TechStack from "./TechStack";

export default function TechnologySection() {
  return (
    <div className="bg-background flex flex-col px-4 pb-42 transition-colors duration-500 lg:px-8">
      <Divider />
      <SectionHeadline title={"Technology"} />
      <div className="w-full self-end sm:w-2/3">
        <TechStack />
      </div>
    </div>
  );
}
