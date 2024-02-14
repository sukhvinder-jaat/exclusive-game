import React from "react";
import { LinerArrow } from "../Icons";

// LinerButton component takes a 'title' prop and renders a button with a liner arrow icon
const LinerButton = ({ title }) => {
  return (
    <div className="relative group">
      {/* Button with dynamic class based on props */}
      <button
        className={`font-inter font-bold text-base bg-gradient-to-bl from-lightSky to-lightGreen text-darkBlue  rounded-[41px] p-[13px_46px] relative z-10 `}
        aria-label="title"
      >
        {title}
      </button>
      {/* LinerArrow icon displayed on hover */}
      <span className="absolute start-[-7px] bottom-[-7px] group-hover:start-0 group-hover:bottom-0 transition-all ease-in-out duration-300 group-hover:opacity-0">
        <LinerArrow />
      </span>
    </div>
  );
};

export default LinerButton;
