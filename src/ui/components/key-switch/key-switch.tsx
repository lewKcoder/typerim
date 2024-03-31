"use client";

import { useEffect, useState } from "react";
import { Component } from "./types";

export const KeySwitch: Component = (props) => {
  const { label, isPressed: propIsPressed } = props;
  const [isPressed, setIsPressed] = useState(propIsPressed);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === label || event.key === label.toLowerCase()) {
        setIsPressed(true);

        console.log("Key pressed:", label);
      }
    };

    const handleKeyUp = () => {
      setIsPressed(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <button className="w-14 h-14 bg-black rounded">
      <div
        className={`w-[3.375rem] h-[3.321rem] leading-[3.321rem] text-[1.25rem] bg-[#2B2B2B] rounded translate-x-[1px] text-white font-bold ${
          isPressed ? "translate-y-[1px]" : "translate-y-[-1px]"
        }`}
      >
        {label}
      </div>
    </button>
  );
};
