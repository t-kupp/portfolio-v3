import { ArrowRight } from "lucide-react";

export default function LinkButton({ title, href, className }) {
  return (
    <a
      target="_blank"
      className={
        className +
        " group text-foreground hover:bg-foreground hover:text-background border-border group flex items-center justify-between gap-2 border-b px-3 py-1 transition-[background-color,color,border-color] duration-500 hover:!duration-200"
      }
      href={href}
    >
      <p>{title}</p>
      <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  );
}
