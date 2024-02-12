"use client";
import React from "react";
import CommonButtonLiner from "../common/CommonButtonLiner";

const Hero = () => {
  return (
    <div className="container xl:max-w-[1140px] mx-auto xl:px-0 px-3 flex-grow-[1] flex items-center justify-center">
      <div className=" flex flex-col items-center">
        <p className=" text-white font-normal lg:text-7xl sm:text-5xl text-3xl text-center font-anton  leading-[112%]">
          <span className=" block">Exclusive Games.</span> Pasión por ganar
        </p>
        <p className="mt-4 font-inter sm:text-base text-sm font-medium text-center text-white opacity-75 max-w-[730px] md:mb-10 mb-6">
          En Exclusive Games somos un equipo apasionado de personas dedicados al
          desarrollo de multiplataformas para juegos de azar. A lo largo de
          nuestra vida consumimos todo tipo de juegos hasta que un día decidimos
          crear los propios.
        </p>
        <CommonButtonLiner content="Empezar" />
      </div>
    </div>
  );
};

export default Hero;
