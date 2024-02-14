import React from "react"; // Importing React
import Image from "next/image"; // Importing Image component from Next.js
import WhiteButton from "./common/button/WhiteButton"; // Importing WhiteButton component
import { GreenTick } from "./common/Icons"; // Importing GreenTick icon

// Platinum component
const Platinum = () => {
  return (
    <div className="md:pb-[150px] pb-32 relative">
      {/* Background Circle */}
      <div className="absolute bg-gradient-to-bl from-lightSky to-lightGreen w-[484px] h-[484px] rounded-full blur-[208px] top-[10%] start-[-30%] translate-y-[-50%] pointer-events-none sm:block hidden"></div>
      <div className="container xl:max-w-[1140px] px-3 mx-auto">
        <div
          className="border border-[rgba(255,_255,_255,_0.5)] Nuestras-ofertas-box mt-7 lg:mt-[60px] rounded-[16px] sm:p-10 p-5 lg:py-[78px] lg:px-12"
          data-aos-offset="100"
          data-aos="fade-up-right"
        >
          <div className="flex flex-wrap lg:flex-row flex-col-reverse justify-between lg:items-center">
            {/* Content Section */}
            <div className="lg:w-5/12 xl:w-5/12 mt-16 lg:mt-0">
              {/* Title */}
              <h3 className="font-anton text-md text-white font-normal text-3xl">
                Platinum
              </h3>
              {/* Description */}
              <p className="font-medium text-sm sm:text-base font-Inter text-white opacity-80 mt-3 sm:mt-4 max-w-[364px] leading-[160%]">
                Diseño totalmente personalizado. Contáctanos para un
                presupuesto.
              </p>
              {/* Price */}
              <h2 className="font-anton text-3xl md:text-5xl text-white mt-8 font-normal">
                Consultar precio
              </h2>
              {/* Features */}
              <div className="mt-4">
                <div className="mt-2">
                  <div className="flex items-start gap-2 mt-4 ">
                    <GreenTick />
                    <p className="font-medium text-sm sm:text-base font-Inter text-white opacity-80">
                      Personalizable
                    </p>
                  </div>
                </div>
              </div>
              {/* Buy Now Button */}
              <div className="mt-10">
                <WhiteButton title="Comprar ahora" />
              </div>
            </div>
            {/* Image Section */}
            <div className="lg:w-7/12 sm:px-3">
              <div className="relative">
                {/* Background Circle */}
                <div className="absolute bg-gradient-to-bl from-lightSky to-lightGreen w-[154px] h-[154px] rounded-full blur-[58px] top-1 end-4  pointer-events-none"></div>
                {/* Image */}
                <Image
                  width={602}
                  height={419}
                  loading="lazy"
                  src="/assets/images/platinum/bar.webp"
                  alt="bar"
                  className="w-100 relative z-10"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platinum; // Exporting Platinum component
