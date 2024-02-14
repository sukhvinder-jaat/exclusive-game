import React from "react";
import { BottomArrow, TopArrow } from "./common/Icons"; // Importing arrow icons
import { marcaCard } from "./common/Helper"; // Importing data for brand attributes

// Marca component
const Marca = () => {
  return (
    <div className="bg-white">
      {/* Container */}
      <div className="container xl:max-w-[1140px] px-3 mx-auto">
        {/* Title */}
        <h2
          className="font-anton text-3xl md:text-5xl text-darkBlue text-center md:mb-14 mb-10"
          data-aos-offset="100"
          data-aos="fade-down-right"
        >
          Nuestros Atributos de Marca
        </h2>
        {/* Arrows */}
        <div className="flex md:flex-row flex-col md:gap-0 gap-5 items-center justify-between md:mb-[150px] mb-20 relative">
          {/* Top arrow */}
          <div
            className="absolute  lg:flex hidden w-full xl:max-w-[276px] max-w-[150px] xl:start-[19%] start-[25%] top-0"
            data-aos-offset="100"
            data-aos="fade-down-right"
          >
            <TopArrow />
          </div>
          {/* Bottom arrow */}
          <div
            className="absolute lg:flex hidden w-full xl:max-w-[276px] max-w-[150px] xl:end-[19%] end-[25%] top-[35%]"
            data-aos-offset="100"
            data-aos="fade-down-right"
          >
            <BottomArrow />
          </div>
          {/* Displaying brand attributes */}
          {marcaCard.map((value, index) => (
            <div
              className="flex flex-col justify-start items-center max-w-[263px] mx-4"
              data-aos-offset="100"
              data-aos="fade-down-right"
              key={index}
            >
              {/* Icon */}
              {value.icon}
              {/* Title */}
              <p className="text-center font-anton text-darkBlue font-normal text-xl mt-4">
                {value.title}
              </p>
              {/* Description */}
              <p className="text-center text-darkSky leading-[160%] mt-2 font-inter font-medium text-base">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marca; // Exporting Marca component
