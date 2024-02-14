import React from "react";
import SlotsCard from "./common/SlotsCard"; // Importing the SlotsCard component
import { ezukoCard } from "./common/Helper"; // Importing data for SlotsCard from a helper file

// Ezuko component
const Ezuko = () => {
  return (
    <div className="relative">
      {/* Background circle */}
      <div className="absolute bg-gradient-to-bl from-lightSky to-lightGreen w-[484px] h-[484px] rounded-full blur-[208px] bottom-[-60%] end-[-30%] translate-y-[-50%] pointer-events-none"></div>
      {/* Container */}
      <div className="container max-w-[1140px] mx-auto xl:px-0 px-3">
        {/* Title */}
        <p
          className="relative z-10 font-anton font-normal text-white xl:text-5xl text-3xl text-center leading-[118%] xl:mb-[60px] mb-10"
          data-aos-offset="100"
          data-aos="fade-down-right"
        >
          Juegos en vivo
        </p>
        {/* Card section */}
        <div className="flex flex-wrap justify-center relative z-10">
          {/* Mapping through ezukoCard data */}
          {ezukoCard.map((value, index) => (
            <div
              key={index}
              className="p-2 md:w-4/12 sm:w-6/12 duration-300 hover:-translate-y-1"
              data-aos-offset="100"
              data-aos="flip-left"
            >
              {/* SlotsCard component */}
              <SlotsCard image={value.image} buttonTitle="Reproducir ahora" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ezuko; // Exporting Ezuko component
