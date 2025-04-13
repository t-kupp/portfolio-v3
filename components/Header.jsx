import { Linkedin } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-background sticky top-0 z-50 grid min-h-8 w-full grid-cols-3 items-center justify-between px-2 py-1">
      <div className="mr-auto"></div>
      <div className="mx-auto">
        <ThemeToggle />
      </div>
      <div className="ml-auto flex items-center gap-2">
        <a href="" className="flex items-center">
          <i class="devicon-linkedin-plain"></i>
        </a>
        <a href="" className="flex items-center">
          <i class="devicon-github-original"></i>
        </a>
      </div>
    </div>
  );
}

function ThemeToggle() {
  const appliedTheme = "dark";

  return (
    <button className="flex items-center gap-2 uppercase">
      <div className="flex items-center gap-0.5">
        <p className="!text-[1rem]">{appliedTheme === "dark" ? "□" : "■"}</p>
        <p className="!text-[1rem]">Light</p>
      </div>
      <div className="flex items-center gap-0.5">
        <p className="!text-[1rem]">{appliedTheme === "light" ? "□" : "■"}</p>
        <p className="!text-[1rem]">Dark</p>
      </div>
    </button>
  );
}
