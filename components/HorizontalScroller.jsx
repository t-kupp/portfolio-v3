import Divider from "./Divider";
import SectionHeadline from "./SectionHeadline";

export default function HorizontalScroller() {
  // Change displayed text here
  let text = "Fullstack.";

  text = text.split("").map((letter, index) => (
    <span
      className="hover:text-background text-foreground text-shadow-foreground cursor-default transition-colors duration-200 hover:text-shadow-[0px_0px_5px_var(--foreground)]"
      key={index}
    >
      {letter}
    </span>
  ));

  return (
    <div className="bg-background flex flex-col transition-colors duration-500">
      <Divider />
      <div className="overflow-hidden whitespace-nowrap">
        <div className="select-none">
          <h1 className="animate-hscroll inline-block pr-32 !text-[20rem] font-medium md:!text-[40rem]">
            {text}
          </h1>
          <h1 className="animate-hscroll inline-block pr-32 !text-[20rem] font-medium md:!text-[40rem]">
            {text}
          </h1>
        </div>
      </div>
    </div>
  );
}
