"use client";

import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  return (
    <div
      className={`bg-background/60 border-border/60 fixed top-0 z-50 grid w-full grid-cols-2 items-center justify-between border-b px-4 py-1 backdrop-blur-md sm:px-8`}
    >
      <div className="mr-auto flex items-center gap-4">
        <ThemeToggleButton />
      </div>

      <div className="ml-auto">
        <AnalogClock />
      </div>
    </div>
  );
}

function ThemeToggleButton() {
  const { toggleTheme, theme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex cursor-pointer items-center gap-4 uppercase"
    >
      <div className="flex items-center gap-0.5">
        <p className="!font-neueMontreal !text-[1rem]">
          {theme === "dark" ? "□" : "■"}
        </p>
        <p className="!text-[1rem]">Light</p>
      </div>
      <div className="flex items-center gap-0.5">
        <p className="!font-neueMontreal !text-[1rem]">
          {theme === "light" ? "□" : "■"}
        </p>
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
      <MapPin className="mr-1" size={"1rem"} />
      <p className="!font-neueMontreal w-[9rem] !text-[1rem]">
        Stockholm, {getStockholmTime(value)}
      </p>
      <Clock
        className={`transition-all duration-500`}
        hourHandWidth={1}
        minuteHandWidth={1}
        size={"3.5rem"}
        value={value}
        renderHourMarks={false}
        renderMinuteMarks={false}
      />
    </div>
  );
}
