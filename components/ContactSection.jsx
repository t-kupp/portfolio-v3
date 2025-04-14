import { ArrowRight } from "lucide-react";
import Divider from "./Divider";
import SectionHeadline from "./SectionHeadline";

export default function ContactSection() {
  return (
    <div className="bg-background flex flex-col px-4 pb-42 transition-colors duration-500 lg:px-8">
      <Divider />
      <SectionHeadline title={"Contact"} />
      <div>
        <h1 className="pb-12">Let's talk.</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ContactLink title={"LinkedIn"} href={""} />
          <ContactLink title={"GitHub"} href={""} />
          <ContactLink title={"Email"} href={""} />
        </div>
      </div>
    </div>
  );
}

function ContactLink({ title, href }) {
  return (
    <a
      href={href}
      target="_blank"
      className="link hover:bg-foreground hover:text-background group flex items-center justify-between px-4 py-2"
    >
      <p>{title}</p>
      <ArrowRight className="transition-[translate] duration-200 group-hover:translate-x-1" />
    </a>
  );
}
