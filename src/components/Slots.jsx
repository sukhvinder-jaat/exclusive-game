"use client";
import React from "react";
import { slots } from "./common/Helper";
import SlotsCard from "./common/card/SlotsCard";
import LinerButton from "./common/button/LinerButton";
const Slots = () => {
  return (
    <div className="container max-w-[1140px] mx-auto xl:px-0 px-3" id="slots">
      <h2
        className="font-anton text-5xl text-center font-normal text-darkBlue leading-[112%]"
        data-aos="fade-down"
      >
        Slots
      </h2>
      <div className="flex justify-center mt-4">
        <p
          className="font-Inter font-medium md:text-base text-sm text-darkBlue text-center max-w-[900px] leading-[160%]"
          data-aos="fade-down"
        >
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
            className="lg:p-3 p-2 md:w-4/12 sm:w-6/12 duration-300 hover:-translate-y-1"
            data-aos="fade-right"
          >
            <SlotsCard image={value.image} buttonTittle="Jugar" />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-7 mb-5" data-aos="fade-right">
        <LinerButton tittle="Mostrar más" />
      </div>
    </div>
  );
};
export default Slots;
