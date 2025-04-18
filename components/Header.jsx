"use client";

import "react-clock/dist/Clock.css";
import { useEffect, useState } from "react";
import Clock from "react-clock";
import { useTheme } from "../context/ThemeContext";
import { Minus, Plus } from "lucide-react";

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <div
      className={`${showNavbar ? "translate-y-0" : "translate-y-[-4rem]"} sticky top-0 z-50 grid h-[4rem] w-full grid-cols-3 items-center justify-between !bg-transparent px-4 !text-white mix-blend-difference transition-all duration-500 sm:px-8`}
    >
      <div className="mr-auto flex items-center gap-4">
        <ThemeToggleButton />
        <MonoToggleButton />
      </div>
      <div className="mx-auto">{/* Middle part of the navbar  */}</div>
      <div className="ml-auto">
        <AnalogClock showNavbar={showNavbar} />
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

function MonoToggleButton() {
  const [isMono, setIsMono] = useState(false);

  useEffect(() => {
    const body = document.body;

    if (isMono) {
      body.style.fontFamily = "'Neue Montreal Mono', monospace";
    } else {
      body.style.fontFamily = "";
    }
  }, [isMono]);

  return (
    <button
      onClick={() => setIsMono((prev) => !prev)}
      className="flex cursor-pointer items-center gap-4 uppercase"
    >
      <div className="flex items-center gap-0.5">
        <p className="!font-neueMontreal !text-[1rem]">{isMono ? "■" : "□"}</p>
        <p className="!text-[1rem]">Monospace</p>
      </div>
    </button>
  );
}

function AnalogClock({ showNavbar }) {
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
      <p className="!font-neueMontreal hidden w-[9rem] !text-[1rem] sm:block">
        Stockholm, {getStockholmTime(value)}
      </p>
      <Clock
        className={`${showNavbar ? "translate-y-0" : "translate-y-[4rem]"} transition-all duration-500`}
        hourHandWidth={1}
        minuteHandWidth={1}
        size={"5rem"}
        value={value}
        renderHourMarks={false}
        renderMinuteMarks={false}
      />
    </div>
  );
}
