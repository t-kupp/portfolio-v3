import Divider from "./Divider";
import SectionHeadline from "./SectionHeadline";

export default function HorizontalScroller() {
  // Change displayed text here
  let text = "Jan-Thorge Kupper";

  text = text.split("").map((letter, index) => (
    <span
      className="hover:text-background text-foreground text-shadow-foreground cursor-default transition-colors duration-200 hover:text-shadow-[0px_0px_5px_var(--foreground)]"
      key={index}
    >
      {letter}
    </span>
  ));

  return (
    <div className="flex flex-col transition-colors duration-500">
      <div className="overflow-hidden py-8 whitespace-nowrap select-none">
        <h1 className="animate-hscroll inline-block pr-24 !text-[10rem] font-bold uppercase md:!text-[15rem]">
          {text}
        </h1>
        <h1 className="animate-hscroll inline-block pr-24 !text-[10rem] font-bold uppercase md:!text-[15rem]">
          {text}
        </h1>
      </div>
    </div>
  );
}
