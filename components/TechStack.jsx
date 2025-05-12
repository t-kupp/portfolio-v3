import { techStackData } from "@/util/techStackData";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function TechStack() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`${isOpen ? "max-h-[13rem]" : "max-h-[4rem]"} overflow-hidden py-3 transition-[max-height] duration-500`}
    >
      <p
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer items-center justify-between py-1"
        role="button"
      >
        Technologies I work with <span>{isOpen ? <Minus /> : <Plus />}</span>
      </p>
      <div className="mt-3 mb-3">
        <div className="grid grid-cols-3 gap-1">
          <div>
            <p className="mb-1 !text-[1rem] font-medium">Frontend:</p>
            {techStackData.frontend.map((item, index) => (
              <div
                className="text-foreground-muted flex items-center gap-1"
                key={index}
              >
                <i className={item.deviconName + " !text-[1rem]"}></i>
                <p className="!text-[1rem]">{item.name}</p>
              </div>
            ))}
          </div>
          <div>
            <p className="mb-1 !text-[1rem] font-medium">Backend:</p>

            {techStackData.backend.map((item, index) => (
              <div
                className="text-foreground-muted flex items-center gap-1"
                key={index}
              >
                <i className={item.deviconName + " !text-[1rem]"}></i>
                <p className="!text-[1rem]">{item.name}</p>
              </div>
            ))}
          </div>
          <div>
            {" "}
            <p className="mb-1 !text-[1rem] font-medium">Languages:</p>
            {techStackData.languages.map((item, index) => (
              <div
                className="text-foreground-muted flex items-center gap-1"
                key={index}
              >
                <i className={item.deviconName + " !text-[1rem]"}></i>
                <p className="!text-[1rem]">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
