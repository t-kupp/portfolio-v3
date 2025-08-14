import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function LandingGeometry() {
  const SHAPE_COUNT = 2;
  const shapesRef = useRef([]);

  useGSAP(() => {
    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2;

    const moveX = [];
    const moveY = [];

    for (let i = 0; i < SHAPE_COUNT; i++) {
      moveX[i] = gsap.quickTo(shapesRef.current[i], "left", {
        duration: 0.6,
        ease: "power1",
      });
      moveY[i] = gsap.quickTo(shapesRef.current[i], "top", {
        duration: 0.6,
        ease: "power1",
      });
    }

    const handleMouseMove = (e) => {
      for (let i = 0; i < SHAPE_COUNT; i++) {
        const divisor = 14 + i * 3;
        moveX[i](centerX + (e.clientX - centerX) / divisor);
        moveY[i](centerY + (e.clientY - centerY) / divisor);
      }
    };

    const handleResize = () => {
      if (window.innerWidth < 768) return;

      centerX = window.innerWidth / 2;
      centerY = window.innerHeight / 2;

      for (let i = 0; i < SHAPE_COUNT; i++) {
        moveX[i](centerX);
        moveY[i](centerY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {[...Array(SHAPE_COUNT)].map((shape, i) => {
        return (
          <div
            key={i}
            ref={(el) => (shapesRef.current[i] = el)}
            style={{
              width: `calc(min(80vw, 80vh) - max(1vw, 2vh) * ${SHAPE_COUNT + i})`,
              height: `calc(min(80vw, 80vh) - max(1vw, 2vh) * ${SHAPE_COUNT + i})`,
              backgroundColor:
                i % 2 === 0 ? "var(--foreground)" : "var(--background)",
            }}
            className="absolute top-1/2 left-1/2 -translate-1/2 rounded-full transition-colors"
          ></div>
        );
      })}
    </div>
  );
}
