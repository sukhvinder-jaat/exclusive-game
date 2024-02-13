import React from "react";
import SlotsCard from "./common/SlotsCard"; // Importing the SlotsCard component
import { ellosCard } from "./common/Helper"; // Importing data for SlotsCard from a helper file

// Ellos component
const Ellos = () => {
  return (
    <div className="container max-w-[1140px] mx-auto xl:px-0 px-3 xl:mb-[170px] md:mb-28 sm:mb-20 mb-16">
      {/* Title */}
      <h2
        className="font-anton md:text-5xl text-3xl text-white text-center font-normal leading-[112%]"
        data-aos="fade-up"
      >
        Ellos eligieron apostar con nosotros
      </h2>
      {/* Card section */}
      <div className="flex flex-wrap justify-center mt-14 pt-1">
        {/* Mapping through ellosCard data */}
        {ellosCard.map((value, index) => (
          <div
            key={index}
            className="p-2 md:w-4/12 sm:w-6/12 duration-300 hover:-translate-y-1"
            data-aos="flip-left"
          >
            {/* SlotsCard component */}
            <SlotsCard image={value.image} buttontitle="Jugar" />
          </div>
        ))}
        {/* Additional text */}
        <div className="flex justify-center mt-9">
          <p
            className="font-Inter font-medium md:text-base text-sm text-white text-center max-w-[900px] leading-[160%]"
            data-aos="fade-up"
          >
            Clientes satisfechos que confiaron en Exclusive Games y han
            disfrutado de emocionantes experiencias de juego. Ahora, la próxima
            apuesta está en tus manos.{" "}
            <span className="md:block">Elige ganar. Elige exclusive game.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ellos; // Exporting Ellos component
