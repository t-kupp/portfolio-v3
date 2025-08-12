import { techStackData } from "@/util/techStackData";
import Image from "next/image";

export default function TechStack() {
  return (
    <div className={`py-3`}>
      <p
        className="flex cursor-pointer items-center justify-between py-1"
        role="button"
      >
        Technologies I work with
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
                {item.deviconName ? (
                  <i className={item.deviconName + " !text-[1rem]"}></i>
                ) : (
                  <div className="aspect-square w-[1rem] opacity-75 mix-blend-difference grayscale invert">
                    <Image
                      className="h-full w-full"
                      width={128}
                      height={128}
                      src={item.alt}
                      alt=""
                    />
                  </div>
                )}
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
