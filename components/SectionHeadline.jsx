import { Circle } from "lucide-react";

export default function SectionHeadline({ title }) {
  return (
    <div className="flex items-center gap-3 py-3 text-[0.75rem]">
      <div className="bg-foreground h-3 w-3 rounded-full" /> {title}
    </div>
  );
}
