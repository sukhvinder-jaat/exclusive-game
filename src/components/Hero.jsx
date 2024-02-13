import React from "react";
import LinerButton from "./common/button/LinerButton"; // Importing the LinerButton component

// Hero component
const Hero = () => {
  return (
    <div className="container xl:max-w-[1140px] mx-auto xl:px-0 px-3 flex-grow-[1] flex items-center justify-center">
      <div className="flex flex-col items-center">
        {/* Title */}
        <p className="text-white font-normal lg:text-7xl sm:text-5xl text-3xl uppercase text-center font-anton  leading-[112%]">
          Exclusive Games.
        </p>
        {/* Subtitle */}
        <p className="text-white font-normal lg:text-7xl sm:text-5xl text-3xl uppercase text-center font-anton  leading-[112%]">
          Pasión por ganar
        </p>
        {/* Description */}
        <p className="mt-4 font-inter sm:text-base text-sm font-medium text-center text-white opacity-75 max-w-[730px] md:mb-10 mb-6 leading-[160%]">
          En Exclusive Games somos un equipo apasionado de personas dedicados al
          desarrollo de multiplataformas para juegos de azar. A lo largo de
          nuestra vida consumimos todo tipo de juegos hasta que un día decidimos
          crear los propios.
        </p>
        {/* LinerButton component */}
        <LinerButton title="Empezar" />
      </div>
    </div>
  );
};

export default Hero; // Exporting Hero component
