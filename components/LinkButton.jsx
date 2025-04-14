import { ArrowRight } from "lucide-react";

export default function LinkButton({ title, href, className }) {
  return (
    <a
      target="_blank"
      className={
        className +
        " group bg-background text-foreground hover:bg-foreground hover:text-background border-border flex items-center justify-between gap-2 border-b px-2 py-1 transition-[background-color,color,border-color] duration-500 hover:!duration-200"
      }
      href={href}
    >
      <p>{title}</p>
      <ArrowRight />
    </a>
  );
}
