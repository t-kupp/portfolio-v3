import { badges } from "@/util/badgesData";

export default function ProjectBadges({ technologies }) {
  if (!technologies) return;

  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      {technologies.map((tech, index) => (
        <div
          className="text-foreground/90 border-border bg-foreground/3 flex items-center gap-2 rounded-full border px-3 py-0.5 transition-colors duration-500"
          key={index}
        >
          {badges[tech].icon && (
            <span
              className="flex items-center"
              dangerouslySetInnerHTML={{ __html: badges[tech].icon }}
            ></span>
          )}

          {badges[tech].name}
        </div>
      ))}
    </div>
  );
}
