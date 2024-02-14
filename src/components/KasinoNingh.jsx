import Image from "next/image";
import React from "react";
import LinerButton from "./common/button/LinerButton";

// KasinoNingh component
const KasinoNingh = () => {
  return (
    <div
      className="container max-w-[1140px] mx-auto xl:px-0 px-3 xl:pt-0 pt-10"
      id="kasinoNight"
    >
      {/* Flex container */}
      <div className="flex flex-wrap lg:flex-row flex-col-reverse items-center justify-center relative z-30">
        {/* Text section */}
        <div className="lg:w-6/12 md:w-7/12 sm:w-10/12 w-full lg:pe-5 lg:mt-0 mt-8">
          <div
            className="flex items-center lg:items-start flex-col"
            data-aos-offset="100"
            data-aos="fade-up-right"
          >
            {/* Title */}
            <p className="font-anton font-normal text-darkBlue xl:text-5xl text-3xl mb-4 leading-[97%]">
              Por qué elegirnos
            </p>
            {/* Description */}
            <p className="font-inter font-medium md:text-base text-sm text-darkBlue max-w-[515px] lg:text-start text-center leading-[160%]">
              Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos
              todo lo invertido en fichas en la moneda que elijas. En Exclusive
              Games siempre sumamos nuevos juegos. Juegos crash, los juegos
              interactivos que más pide la gente. Con Exclusive Games empezás a
              ganar ya! Creamos tu plataforma en solo 2 semanas.
            </p>
            {/* Button */}
            <div className="mt-6">
              <LinerButton title="Aprende más" />
            </div>
          </div>
        </div>
        {/* Image section */}
        <div className="lg:w-6/12 md:w-7/12 sm:w-10/12 w-full lg:ps-5">
          <Image
            src="/assets/images/kasino_night/kasino_night.webp"
            width={558}
            height={439}
            className="w-full"
            alt="kasino_night"
            data-aos-offset="100"
            data-aos="fade-up-left"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default KasinoNingh; // Exporting KasinoNingh component
