import Image from "next/image";
import React from "react";
import { GreenBulb } from "./common/Icons"; // Importing GreenBulb icon
import { masCards } from "./common/Helper"; // Importing data for additional reasons

// Mas component
const Mas = () => {
  return (
    <div className="container max-w-[1140px] mx-auto xl:px-0 px-3 xl:pb-[150px] pb-20">
      <div className="flex flex-wrap items-center justify-center">
        {/* Image */}
        <div className="xl:w-6/12 lg:w-7/12 sm:w-8/12 w-full lg:pe-5">
          <Image
            src="/assets/images/mas/image_777.webp"
            width={558}
            height={439}
            className="w-full "
            alt="image_777"
            data-aos="fade-up-right"
          />
        </div>
        {/* Additional reasons */}
        <div className="xl:w-6/12 lg:w-5/12 sm:w-10/12 w-full lg:ps-5 lg:mt-0 mt-8 flex flex-col lg:items-start items-center">
          {/* Title */}
          <p
            className="font-anton font-normal lg:text-start text-center text-white xl:text-5xl text-3xl mb-10 leading-[97%]"
            data-aos="fade-up-right"
          >
            Más razones para elegirnos
          </p>
          <div className="flex flex-col gap-6">
            {/* Mapping over additional reasons */}
            {masCards.map((value, index) => (
              <div
                className="bg-midBlack max-w-[374px] flex items-center md:ps-14 ps-3 pe-3 transition-all ease-in-out duration-300  py-6 gap-[37px] rounded-2xl border-[0.5px] border-midGreen lg:w-screen"
                data-aos="fade-up-left"
                key={index}
              >
                {/* Icon */}
                {value.icon}
                <div className="flex flex-col">
                  {/* Reason title */}
                  <p className="text-white font-normal text-3xl font-anton">
                    {value.title}
                  </p>
                  {/* Reason description */}
                  <p className="font-medium text-base text-white">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mas; // Exporting Mas component
