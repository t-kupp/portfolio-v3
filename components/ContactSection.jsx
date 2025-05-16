import Divider from "./Divider";
import SectionHeadline from "./SectionHeadline";
import ContactForm from "./ContactForm";
import Copyright from "./Copyright";

export default function ContactSection() {
  return (
    <div className="bg-background relative flex flex-col px-4 pb-42 transition-colors duration-500 lg:px-8">
      <Divider />
      <SectionHeadline title={"Contact"} />

      <h1 className="pb-12">Let's talk.</h1>
      <div className="mb-14 flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/jan-thorge-kupper/"
          target="_blank"
        >
          <i className="devicon-linkedin-plain text-[2rem]"></i>
        </a>
        <a href="https://github.com/t-kupp" target="_blank">
          <i className="devicon-github-original text-[2rem]"></i>
        </a>
      </div>
      <ContactForm />
      <div className="absolute right-2 bottom-1">
        <Copyright />
      </div>
    </div>
  );
}
