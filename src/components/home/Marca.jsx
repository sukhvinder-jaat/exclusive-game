import React from "react";
import { BottomArrow, TopArrow } from "../common/Icons";
import { marcaCard } from "../common/Helper";

const Marca = () => {
  return (
    <div className="bg-white">
      <div className="container xl:max-w-[1140px] px-3 mx-auto">
        <h2
          className="font-anton text-3xl md:text-5xl text-darkBlue text-center md:mb-14 mb-10"
          data-aos="fade-down-right"
        >
          Nuestros Atributos de Marca
        </h2>
        {/* arrows */}
        <div className="flex md:flex-row flex-col md:gap-0 gap-5 items-center justify-between md:mb-[150px] mb-20 relative">
          <div
            className="absolute  lg:flex hidden w-full xl:max-w-[276px] max-w-[150px] xl:start-[19%] start-[25%] top-0"
            data-aos="fade-down-right"
          >
            <TopArrow />
          </div>
          <div
            className="absolute lg:flex hidden w-full xl:max-w-[276px] max-w-[150px] xl:end-[19%] end-[25%] top-[35%]"
            data-aos="fade-down-right"
          >
            <BottomArrow />
          </div>
          {marcaCard.map((value, index) => (
            <div
              className="flex flex-col justify-start items-center max-w-[263px] mx-4"
              data-aos="fade-down-right"
              key={index}
            >
              {value.icon}
              <p className="text-center font-anton text-darkBlue font-normal text-xl mt-4">
                {value.tittle}
              </p>
              <p className="text-center text-[#334349] leading-[160%] mt-2 font-inter font-medium text-base">
                {value.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marca;
