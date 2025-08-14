import { ArrowRight } from "lucide-react";

export default function LinkButton({ title, href, className }) {
  return (
    <a
      href={href}
      className={
        className +
        " group border-border relative gap-x-2 overflow-hidden border-b px-3 py-1"
      }
    >
      <div className="bg-foreground absolute bottom-0 left-1/2 h-0 w-0 -translate-x-1/2 transition-[height,width] duration-200 ease-in-out group-hover:h-full group-hover:w-full"></div>
      <div
        className={
          (href ? "text-white" : "text-white/50") +
          " flex items-center justify-between gap-x-2 transition-colors"
        }
      >
        <p className="mix-blend-difference">{title}</p>
        {href && (
          <ArrowRight className="mix-blend-difference transition-transform group-hover:translate-x-2" />
        )}
      </div>
    </a>
  );
}
