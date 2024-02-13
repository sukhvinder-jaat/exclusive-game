import Image from "next/image";
import React from "react";
import { GreenTick } from "./common/Icons";
import { jackpotServices } from "./common/Helper";
const Jackpot = () => {
  return (
    <div className="relative">
      {/* liner grident */}
      <div className="absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] w-[484px] h-[484px] rounded-full blur-[208px] top-[-50%] start-[-30%] pointer-events-none"></div>
      <div
        className="container max-w-[1140px] mx-auto xl:px-0 px-3 xl:pb-[150px] pb-20"
        id="jackpot"
      >
        <div className="flex flex-wrap items-center justify-center relative z-10">
          <div className="lg:w-6/12 md:w-7/12 sm:w-10/12 w-full lg:pe-5">
            <Image
              src="/assets/images/jackpot/jackpot.webp"
              width={558}
              height={439}
              className="w-full "
              alt="jackpot"
              data-aos="fade-right"
            />
          </div>
          <div
            className="lg:w-6/12 md:w-7/12 sm:w-10/12 w-full lg:ps-5 lg:mt-0 mt-8"
            data-aos="fade-right"
          >
            <div>
              <p className="font-anton font-normal text-white xl:text-5xl text-3xl mb-4 leading-[97%]">
                Potenciando sus elecciones
              </p>
              <p className="font-inter font-medium md:text-base text-sm text-white !opacity-70 mb-6">
                Con Exclusive Game lo mejor está de tu lado.
              </p>
              <div className="flex flex-col gap-3 mb-6">
                {/* options */}
                {jackpotServices.map((value, index) => (
                  <div className="flex items-center" key={index}>
                    <GreenTick />
                    <p className="ms-2 font-inter font-medium md:text-base text-sm text-white !opacity-70 max-w-[415px] leading-[160%]">
                      {value.tittle}
                    </p>
                  </div>
                ))}
              </div>
              <p className="font-inter font-medium md:text-base text-sm text-white !opacity-70">
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

export default Jackpot;
