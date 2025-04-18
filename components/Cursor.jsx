"use client";
import { useState, useEffect, useRef } from "react";

export default function Cursor() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [renderedPos, setRenderedPos] = useState({ x: 0, y: 0 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const lastMousePosRef = useRef({ x: 0, y: 0 });

  // Improved clickable detection
  const isClickable = (elements) => {
    const interactiveSelectors = [
      "a[href]",
      "button",
      "input",
      "textarea",
      "select",
      "label",
      '[role="button"]',
      "[onclick]",
      '[style*="cursor: pointer"]',
    ];

    return elements.some((element) => {
      return interactiveSelectors.some((selector) => {
        return element.matches(selector);
      });
    });
  };

  // Check elements under current mouse position
  const checkHoverState = () => {
    const elements = document.elementsFromPoint(
      lastMousePosRef.current.x,
      lastMousePosRef.current.y,
    );
    setIsHoveringClickable(isClickable(elements));
  };

  // Mouse move handler
  useEffect(() => {
    const updateMousePosition = (e) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setMouse(newPos);
      lastMousePosRef.current = newPos;
      checkHoverState();
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      checkHoverState();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation loop
  useEffect(() => {
    const animate = (time) => {
      if (previousTimeRef.current !== undefined) {
        const deltaTime = time - previousTimeRef.current;
        const lerp = (start, end, factor) =>
          start * (1 - factor) + end * factor;
        const lerpFactor = Math.min((0.8 * deltaTime) / 16, 1);

        setRenderedPos((prev) => ({
          x: lerp(prev.x, mouse.x, lerpFactor),
          y: lerp(prev.y, mouse.y, lerpFactor),
        }));
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [mouse]);

  return (
    <div
      style={{
        transform: `translate3d(${renderedPos.x}px, ${renderedPos.y}px, 0px)`,
      }}
      className={`${isHoveringClickable ? "customCursor h-6 w-6 outline-offset-0" : "h-2 w-2 outline-offset-4"} pointer-events-none fixed top-0 left-0 z-[9999] hidden -translate-1/2 rounded-full bg-white mix-blend-difference outline outline-white transition-[width,height,background-color,outline-offset,outline-color] duration-200 sm:block`}
    />
  );
}
