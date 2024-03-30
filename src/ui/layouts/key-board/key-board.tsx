"use client";

import { KeySwitch } from "@/ui/components/key-switch";
import { Component } from "./types";

const keyBoardLabels = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

export const KeyBoard: Component = () => {
  return (
    <div className="grid gap-1 grid-flow-row relative">
      <div className="gradient absolute w-[800px] h-80 top-[-34px] left-2/4 translate-x-[-50%] blur-2xl rounded-[160px] z-[-1]" />

      {keyBoardLabels.map((labels, index) => (
        <div
          key={index}
          className={`grid gap-1 grid-flow-col justify-center ${
            (index === 0 || index === 3) && "translate-x-[-28px]"
          }`}
        >
          {labels.map((label) => (
            <KeySwitch
              key={label}
              label={label}
              onClick={() => console.log("Do sound")}
            />
          ))}
        </div>
      ))}

      <style jsx>{`
        .gradient {
          background: linear-gradient(
            150deg,
            rgba(255, 0, 0, 0.2) 0%,
            rgba(255, 143, 0, 0.2) 10%,
            rgba(255, 250, 0, 0.2) 20%,
            rgba(0, 255, 1, 0.2) 30%,
            rgba(0, 255, 169, 0.2) 40%,
            rgba(0, 239, 255, 0.2) 50%,
            rgba(0, 89, 255, 0.2) 60%,
            rgba(83, 0, 255, 0.2) 70%,
            rgba(237, 0, 255, 0.2) 80%,
            rgba(255, 0, 161, 0.2) 90%,
            rgba(255, 0, 0, 0.2) 100%
          );
        }
      `}</style>
    </div>
  );
};
