import { CopyrightIcon } from "lucide-react";

export default function Copyright() {
  return (
    <div className="text-foreground-muted flex items-center gap-1 !text-[1rem]">
      <CopyrightIcon size={10} /> 2025 Jan-Thorge Kupper
    </div>
  );
}
