import { Copyright } from "lucide-react";
import Divider from "./Divider";

export default function Footer() {
  return (
    <div className="relative h-64">
      <Divider />
      <p className="text-foreground-muted absolute right-2 bottom-2 flex items-center gap-1 !text-[0.75rem]">
        <Copyright size={8} /> 2025 Jan-Thorge Kupper
      </p>
    </div>
  );
}
