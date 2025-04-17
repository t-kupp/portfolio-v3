import { ArrowRight } from "lucide-react";
import Divider from "./Divider";
import SectionHeadline from "./SectionHeadline";
import LinkButton from "./LinkButton";

export default function ContactSection() {
  return (
    <div className="bg-background flex flex-col px-4 pb-42 transition-colors duration-500 lg:px-8">
      <Divider />
      <SectionHeadline title={"Contact"} />
      <div className="">
        <h1 className="pb-12">Let's talk.</h1>
        <div className="flex max-w-sm flex-col">
          <LinkButton
            title={"LinkedIn"}
            href={"https://www.linkedin.com/in/jan-thorge-kupper/"}
            className={"bg-transparent"}
          />
          <LinkButton
            title={"GitHub"}
            href={"https://github.com/t-kupp"}
            className={"bg-transparent"}
          />
          <LinkButton
            title={"Email"}
            href={"mailto:kupper.thorge@gmail.com"}
            className={"bg-transparent"}
          />
        </div>
      </div>
    </div>
  );
}
