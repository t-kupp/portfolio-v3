"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import ThemeProvider from "@/context/ThemeContext";
import { ReactLenis, useLenis } from "lenis/react";

export function Providers({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1, smoothTouch: true }}>
      <ParallaxProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </ParallaxProvider>
    </ReactLenis>
  );
}
