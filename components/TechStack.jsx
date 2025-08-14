import { techStackData } from "@/util/techStackData";
import Image from "next/image";

export default function TechStack() {
  return (
    <div className={`py-3`}>
      <div className="mt-3 mb-3">
        <div className="grid grid-cols-2 gap-x-1 gap-y-10 lg:grid-cols-3">
          {/* Frontend  */}
          <div className="flex flex-col gap-1">
            <h4 className="mb-4">Frontend</h4>
            {techStackData.frontend.map((item, index) => (
              <div
                className="text-foreground-muted flex items-center gap-2"
                key={index}
              >
                {item.deviconName ? (
                  <i className={item.deviconName + " !text-[1.25rem]"}></i>
                ) : (
                  <div className="aspect-square w-[1.25rem] opacity-75 mix-blend-difference grayscale invert">
                    <Image
                      className="h-full w-full"
                      width={128}
                      height={128}
                      src={item.alt}
                      alt=""
                    />
                  </div>
                )}
                <p className="!text-[1.25rem]">{item.name}</p>
              </div>
            ))}
          </div>
          {/* Backend  */}
          <div className="flex flex-col gap-1">
            <h4 className="mb-4">Backend</h4>

            {techStackData.backend.map((item, index) => (
              <div
                className="text-foreground-muted flex items-center gap-1"
                key={index}
              >
                <i className={item.deviconName + " !text-[1.25rem]"}></i>
                <p className="!text-[1.25rem]">{item.name}</p>
              </div>
            ))}
          </div>
          {/* Languages  */}
          <div className="flex flex-col gap-1">
            <h4 className="mb-4">Languages</h4>
            {techStackData.languages.map((item, index) => (
              <div
                className="text-foreground-muted flex items-center gap-1"
                key={index}
              >
                <i className={item.deviconName + " !text-[1.25rem]"}></i>
                <p className="!text-[1.25rem]">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
