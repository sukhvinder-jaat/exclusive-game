import React from "react";
import CommonButtonWhite from "./CommonButtonWhite";
import Image from "next/image";

const CommonSlotsCard = (props) => {
  const { image, buttonContent } = props;
  return (
    <div className="relative border hover:border-lightGreen rounded-lg transition-all ease-in-out duration-150">
      <div className="bg-black rounded-lg opacity-0 hover:opacity-60 duration-300 w-full flex justify-center items-center absolute h-full">
        <CommonButtonWhite content={buttonContent} />
      </div>
      <Image width={364} height={265} src={image} alt="slots card" />
    </div>
  );
};

export default CommonSlotsCard;
