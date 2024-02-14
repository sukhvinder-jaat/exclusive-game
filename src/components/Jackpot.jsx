import Image from "next/image";
import React from "react";
import { GreenTick } from "./common/Icons"; // Importing the GreenTick icon component
import { jackpotServices } from "./common/Helper"; // Importing data for jackpot services from a helper file

// Jackpot component
const Jackpot = () => {
  return (
    <div className="relative">
      {/* Background circle */}
      <div className="absolute bg-gradient-to-bl from-lightSky to-lightGreen w-[484px] h-[484px] rounded-full blur-[208px] top-[-50%] start-[-30%] pointer-events-none"></div>
      {/* Container */}
      <div
        className="container max-w-[1140px] mx-auto xl:px-0 px-3 xl:pb-[150px] pb-20"
        id="jackpot"
      >
        {/* Flex container */}
        <div className="flex flex-wrap items-center justify-center relative z-10">
          {/* Image section */}
          <div className="lg:w-6/12 md:w-7/12 sm:w-10/12 w-full lg:pe-5">
            <Image
              src="/assets/images/jackpot/jackpot.webp"
              width={558}
              height={439}
              className="w-full"
              alt="jackpot"
              data-aos="fade-right"
            />
          </div>
          {/* Text section */}
          <div
            className="lg:w-6/12 md:w-7/12 sm:w-10/12 w-full lg:ps-5 lg:mt-0 mt-8"
            data-aos="fade-right"
          >
            <div className="mb-0">
              {/* Title */}
              <p className="font-anton font-normal text-white xl:text-5xl text-3xl mb-4 leading-[97%]">
                Potenciando sus elecciones
              </p>
              {/* Subtitle */}
              <p className="font-inter font-medium md:text-base text-sm text-white opacity-70 mb-6">
                Con Exclusive Game lo mejor está de tu lado.
              </p>
              {/* List of services */}
              <div className="flex flex-col gap-3 mb-6">
                {/* Mapping through jackpotServices data */}
                {jackpotServices.map((value, index) => (
                  <div className="flex items-center" key={index}>
                    {/* GreenTick icon */}
                    <GreenTick />
                    {/* Service title */}
                    <p className="ms-2 font-inter font-medium md:text-base text-sm text-white opacity-70 max-w-[415px] leading-[160%]">
                      {value.title}
                    </p>
                  </div>
                ))}
              </div>
              {/* Additional text */}
              <p className="font-inter font-medium md:text-base text-sm text-white opacity-70">
                Te reintegramos todo lo invertido en fichas en la moneda que
                elijas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jackpot; // Exporting Jackpot component
