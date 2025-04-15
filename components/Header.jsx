"use client";

import "react-clock/dist/Clock.css";
import { useEffect, useState } from "react";
import Clock from "react-clock";
import { useTheme } from "../context/ThemeContext";
import { Minus, Plus } from "lucide-react";
import useScrollPercentage from "@/hooks/useScrollPercent";

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [autoShowNavbar, setAutoShowNavbar] = useState(true);
  const { scrollPercent } = useScrollPercentage();

  useEffect(() => {
    if (scrollPercent > 20 && scrollPercent < 25 && autoShowNavbar) {
      setShowNavbar(true);
      setAutoShowNavbar(false);
    }
  }, [scrollPercent]);

  return (
    <div
      className={`${showNavbar ? "translate-y-0" : "translate-y-[-64px]"} bg-background sticky top-0 z-50 grid min-h-8 w-full grid-cols-3 items-center justify-between px-2 py-1 transition-all duration-500`}
    >
      <div className="mr-auto flex items-center gap-2">
        <ThemeToggle />
      </div>
      <div className="mx-auto">
        <button
          onClick={() => {
            setShowNavbar((prev) => !prev);
            setAutoShowNavbar(false);
          }}
          className={`${showNavbar ? "bg-background text-foreground translate-y-0" : "bg-foreground text-background translate-y-[64px]"} flex transform cursor-pointer items-center gap-1 rounded-full px-3 transition-all duration-500`}
        >
          <p>Menu</p> {showNavbar ? <Minus size={20} /> : <Plus size={20} />}
        </button>
      </div>
      <div className="ml-auto">
        <AnalogClock />
      </div>
    </div>
  );
}

function ThemeToggle() {
  const { toggleTheme, theme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex cursor-pointer items-center gap-2 uppercase"
    >
      <div className="flex items-center gap-0.5">
        <p className="!text-[1rem]">{theme === "dark" ? "□" : "■"}</p>
        <p className="!text-[1rem]">Light</p>
      </div>
      <div className="flex items-center gap-0.5">
        <p className="!text-[1rem]">{theme === "light" ? "□" : "■"}</p>
        <p className="!text-[1rem]">Dark</p>
      </div>
    </button>
  );
}

function AnalogClock() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const getStockholmTime = (date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "Europe/Stockholm",
    });
  };

  return (
    <div className="flex items-center">
      <Clock
        hourHandWidth={1}
        minuteHandWidth={1}
        size={48}
        value={value}
        renderHourMarks={false}
        renderMinuteMarks={false}
      />
      <p className="hidden w-[9rem] !text-[1rem] sm:block">
        Stockholm, {getStockholmTime(value)}
      </p>
    </div>
  );
}
