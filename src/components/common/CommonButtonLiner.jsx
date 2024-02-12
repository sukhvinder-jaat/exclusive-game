import React from "react";

const CommonButtonLiner = ({ content }) => {
  return (
    <div className=" relative group">
      <button
        className={`font-inter font-bold text-base bg-[linear-gradient(306.99deg,_#51c8ef_-13.72%,_#7af57a_102.02%)] text-darkBlue  rounded-[41px] p-[13px_46px] relative z-10 `}
      >
        {content}
      </button>
      <span className="absolute start-[-7px] bottom-[-7px] group-hover:start-0 group-hover:bottom-0 transition-all ease-in-out duration-200 group-hover:opacity-0">
        <svg
          width="107"
          height="28"
          viewBox="0 0 107 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 1C1.5 15.3594 13.1406 27 27.5 27H105.5"
            stroke="url(#paint0_linear_1706_11)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1706_11"
              x1="134.466"
              y1="25.6913"
              x2="113.531"
              y2="-37.3975"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#51C8EF" />
              <stop offset="1" stopColor="#7AF57A" />
            </linearGradient>
          </defs>
        </svg>
      </span>
    </div>
  );
};

export default CommonButtonLiner;
