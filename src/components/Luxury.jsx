import React from "react";
import Image from "next/image";
import LinerButton from "./common/button/LinerButton";
import { GreenTick } from "./common/Icons";
import { nutroAtributo } from "./common/Helper";

// Luxury component
const Luxury = () => {
  return (
    <div
      className="container xl:max-w-[1140px] px-3 mx-auto bg-luxury bg-no-repeat bg-cover mb-16"
      data-aos-offset="100"
      data-aos="fade-up-right"
    >
      {/* Container for the content */}
      <div className="border border-[rgba(255,_255,_255,_0.5)]  mt-7 lg:mt-[60px] rounded-[16px] py-11 px-2">
        <div className="flex flex-wrap justify-center items-center text-center relative">
          {/* Token image */}
          <Image
            src="/assets/images/luxury/tocken.webp"
            width={78}
            height={78}
            loading="lazy"
            alt="Token"
            className="absolute top-[10%] lg:start-[20%] md:start-[10%] start-1 sm:block hidden w-full max-w-[78px] animate-pulse"
          />
          {/* Flip card */}
          <Image
            src="/assets/images/luxury/flip_card_a.webp"
            width={150}
            loading="lazy"
            height={150}
            alt="Flip card"
            className="card_animation absolute top-[15%] end-[10%] sm:block hidden"
          />
          {/* Simple card */}
          <Image
            src="/assets/images/luxury/card_a.webp"
            width={176}
            loading="lazy"
            height={186}
            alt="Simple card"
            className="card_animation absolute md:bottom-[10%] bottom-1 lg:start-[10%] start-[2%] lg:max-w-[176px] max-w-[100px] sm:block hidden"
          />
          {/* Dice */}
          <Image
            src="/assets/images/luxury/dice.webp"
            width={66}
            loading="lazy"
            height={69}
            alt="Dice"
            className="absolute bottom-[10%] lg:end-[20%] end-[10%] sm:block hidden animate-bounce"
          />
          {/* Content */}
          <div className="flex flex-col items-center">
            <h3 className="font-anton text-md text-white font-normal text-3xl">
              Luxury
            </h3>
            <p className="font-medium text-sm sm:text-base font-Inter text-white opacity-80 mt-3 sm:mt-4 max-w-[390px] leading-[160%]">
              Lleva tu experiencia de juego al siguiente nivel. Con todas las
              características de la versión Silver y la potencia adicional de la
              tecnología React.
            </p>
            <h2 className="font-anton text-3xl md:text-5xl text-white mt-8 mb-2">
              $9000
            </h2>
            {/* Attributes */}
            <div className="text-center">
              {nutroAtributo.map((value, index) => (
                <div className="mt-2" key={index}>
                  <div className="flex items-start gap-2 mt-4">
                    <GreenTick />
                    <p className="font-medium text-sm sm:text-base font-Inter leading-[160%] text-white opacity-80 text-center mx-auto max-w-[387px]">
                      {value.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Button */}
            <div className="flex items-center justify-center mt-9">
              <LinerButton title="Comprar ahora" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Luxury; // Exporting Luxury component
