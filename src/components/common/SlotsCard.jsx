import React from "react";
import Image from "next/image";
import WhiteButton from "./button/WhiteButton"; // Importing WhiteButton component

// SlotsCard component
const SlotsCard = (props) => {
  const { image, buttontitle } = props; // Destructuring props

  return (
    <div className="relative border border-transparent hover:border-lightGreen rounded-lg transition-all ease-in-out duration-300">
      <div className="group/items">
        {/* Overlay */}
        <div className="bg-black rounded-lg opacity-0 group-hover/items:opacity-60 duration-300 border-transparent w-full flex justify-center items-center absolute h-full"></div>
        {/* WhiteButton */}
        <div className="absolute top-[50%] start-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover/items:opacity-100 duration-300">
          <WhiteButton title={buttontitle} />
        </div>
      </div>
      {/* Slot image */}
      <Image
        width={364}
        height={265}
        src={image}
        alt="slots card"
        sizes="100vw"
      />
    </div>
  );
};

export default SlotsCard; // Export SlotsCard component
