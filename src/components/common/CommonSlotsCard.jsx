import React from "react";
import CommonButtonWhite from "./CommonButtonWhite";
import Image from "next/image";
const CommonSlotsCard = (props) => {
  const { image, buttonContent } = props;
  return (
    <div className="relative border border-transparent hover:border-lightGreen rounded-lg transition-all ease-in-out duration-300">
      <div className=" group">
        <div className="bg-black rounded-lg opacity-0 group-hover:opacity-60 duration-300 border-transparent w-full flex justify-center items-center absolute h-full"></div>
        {/* button import */}
        <div className="absolute top-[50%] start-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 duration-300">
          <CommonButtonWhite content={buttonContent} />
        </div>
      </div>
      <Image width={364} height={265} src={image} alt="slots card" />
    </div>
  );
};

export default CommonSlotsCard;
