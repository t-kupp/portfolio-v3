import { ChevronRight } from "lucide-react";

export default function SectionHeadline({ title }) {
  return (
    <div className="flex items-center gap-2 pt-3 pb-6 text-[0.75rem]">
      <ChevronRight size={14} className="transition-colors duration-500" />
      {title}
    </div>
  );
}
