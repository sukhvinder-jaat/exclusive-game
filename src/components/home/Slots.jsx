"use client";
import React from "react";
import { slots } from "../common/Helper";
import CommonSlotsCard from "../common/CommonSlotsCard";
import CommonButtonLiner from "../common/CommonButtonLiner";
const Slots = () => {
  return (
    <div className="container max-w-[1152px] mx-auto px-3" id="slots">
      <h2 className=" font-anton text-5xl text-center font-normal leading-[112%]">
        Slots
      </h2>
      <div className="flex justify-center mt-4">
        <p className="font-Inter font-medium md:text-base text-sm text-darkBlue opacity-70 text-center max-w-[900px]">
          En Exclusive Games, ofrecemos una selección de más de 600 juegos de
          los principales desarrolladores, como Aristocrat, Amatic, EGT,
          Novomatic, IGT, Playtech, Igrosoft y Tom Horn. Nuestro equipo trabaja
          incansablemente para innovar y ampliar nuestra oferta de experiencias,
          garantizando la máxima seguridad con operaciones protegidas por
          cifrado SSL de 256 bits.
        </p>
      </div>
      <div className="flex flex-wrap justify-center mt-14 pt-1">
        {slots.map((value, index) => (
          <div
            key={index}
            className="p-2 md:w-4/12 sm:w-6/12 duration-300 hover:-translate-y-1"
          >
            <CommonSlotsCard image={value.image} buttonContent="Jugar" />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10 mb-5">
        <CommonButtonLiner content="Mostrar más" />
      </div>
    </div>
  );
};
export default Slots;
