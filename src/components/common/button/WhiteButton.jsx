"use client";
import React from "react";
import { WhiteArrow } from "../Icons";

// WhiteButton component takes a 'title' prop and renders a button with a white arrow icon
const WhiteButton = ({ title }) => {
  return (
    <div className="relative group">
      {/* Button with dynamic class based on props */}
      <button
        className={`font-inter font-bold text-base bg-transparent text-white text-nowrap border-white border  rounded-[41px] p-[13px_46px] relative z-10 `}
      >
        {title}
      </button>
      {/* WhiteArrow icon displayed on hover */}
      <span className="absolute start-[-7px] bottom-[-7px] group-hover:start-0 group-hover:bottom-0 transition-all ease-in-out duration-300 group-hover:opacity-0">
        <WhiteArrow />
      </span>
    </div>
  );
};

export default WhiteButton;
