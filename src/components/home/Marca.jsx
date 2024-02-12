import React from "react";
import { BottomArrow, LightGreenBuld, TopArrow } from "../common/Icons";
import { marcaCard } from "../common/Helper";

const Marca = () => {
  return (
    <div className=" bg-white">
      <div className=" container xl:max-w-[1140px] px-3 mx-auto">
        <h2 className=" font-anton text-3xl md:text-5xl text-black text-center md:mb-14 mb-10">
          Nuestros Atributos de Marca
        </h2>
        <div className=" flex md:flex-row flex-col md:gap-0 gap-5 items-center justify-between mb-[150px] relative">
          <div className="absolute  md:flex hidden w-full xl:max-w-[276px] max-w-[150px] start-[19%] top-[20%]">
            <TopArrow />
          </div>
          <div className="absolute  md:flex hidden w-full xl:max-w-[276px] max-w-[150px] end-[19%] top-[35%]">
            <BottomArrow />
          </div>
          {marcaCard.map((value, index) => (
            <div
              className=" flex flex-col justify-center items-center max-w-[263px]"
              key={index}
            >
              {value.icon}
              <p className=" text-center font-anton font-medium text-xl mt-4">
                {value.tittle}
              </p>
              <p className=" text-center font-inter font-medium text-base">
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
