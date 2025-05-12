import { ChevronRight, Dot } from "lucide-react";

export default function SectionHeadline({ title }) {
  return (
    <div className="flex items-center pt-1 pb-6 text-[0.75rem]">
      <Dot size={24} className="transition-colors duration-500" />
      {title}
    </div>
  );
}
