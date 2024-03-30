"use client";

import { Component } from "./types";

export const KeySwitch: Component = (props) => {
  const { label, onClick } = props;

  return (
    <button onClick={onClick} className="w-14 h-14 bg-black rounded">
      <div className="w-[3.375rem] h-[3.321rem] leading-[3.321rem] text-[1.25rem] bg-[#2B2B2B] rounded translate-x-[1px] translate-y-[-1px] text-white font-bold">
        {label}
      </div>
    </button>
  );
};
