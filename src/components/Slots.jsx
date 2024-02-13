"use client";
import React from "react";
import { slots } from "./common/Helper"; // Importing slot data from Helper
import SlotsCard from "./common/SlotsCard"; // Importing SlotsCard component
import LinerButton from "./common/button/LinerButton"; // Importing LinerButton component

// Slots component
const Slots = () => {
  return (
    <div className="container max-w-[1140px] mx-auto xl:px-0 px-3" id="slots">
      {/* Title */}
      <h2
        className="font-anton text-5xl text-center font-normal text-darkBlue leading-[112%]"
        data-aos="fade-down"
      >
        Slots
      </h2>
      {/* Description */}
      <div className="flex justify-center mt-4" data-aos="fade-down">
        <p className="font-Inter font-medium md:text-base text-sm text-darkBlue text-center max-w-[900px] leading-[160%]">
          En Exclusive Games, ofrecemos una selección de más de 600 juegos de
          los principales desarrolladores, como Aristocrat, Amatic, EGT,
          Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo trabaja
          incansablemente para innovar y ampliar nuestra oferta de experiencias,
          garantizando la máxima seguridad con operaciones protegidas por
          cifrado SSL de 256 bits.
        </p>
      </div>
      {/* Slot cards */}
      <div className="flex flex-wrap justify-center mt-14 pt-1">
        {slots.map((value, index) => (
          <div
            key={index}
            className="lg:p-3 p-2 md:w-4/12 sm:w-6/12 duration-300 hover:-translate-y-1"
            data-aos="fade-right"
          >
            {/* Rendering each slot card */}
            <SlotsCard image={value.image} buttonTitle="Jugar" />
          </div>
        ))}
      </div>
      {/* Button to show more */}
      <div className="flex justify-center mt-7 mb-5" data-aos="fade-right">
        <LinerButton title="Mostrar más" />
      </div>
    </div>
  );
};

export default Slots; // Exporting Slots component
