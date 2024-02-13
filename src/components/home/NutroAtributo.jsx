import Image from "next/image";
import React from "react";
import { nutroAtributo } from "../common/Helper";
import { GreenTick } from "../common/Icons";
import CommonButtonWhite from "../common/CommonButtonWhite";

const NutroAtributo = () => {
  return (
    <div className="container xl:max-w-[1140px] px-3 mx-auto">
      <h2
        className="font-anton text-3xl md:text-5xl text-white text-center font-normal"
        data-aos="fade-up"
      >
        Nuestras ofertas
      </h2>
      <p
        className="mt-3 sm:mt-4 text-center font-medium text-sm sm:text-base font-Inter text-white max-w-[904px] mx-auto"
        data-aos="fade-up"
      >
        Te ofrecemos las mejores experiencias de juegos para tus clientes.
      </p>
      <div
        className="border border-[rgba(255,_255,_255,_0.5)] mt-7 lg:mt-[60px] rounded-[16px] sm:p-10 p-5 lg:p-[57px_40px_30px_40px]"
        data-aos="fade-up-right"
      >
        <div className="flex flex-wrap justify-between items-center">
          <div className="lg:w-7/12 sm:px-3">
            <div className="relative flex flex-col">
              <div className="absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] w-[204px] h-[204px] rounded-full blur-[100px] bottom-[50%] start-[-2%]  pointer-events-none"></div>
              <Image
                width={500}
                height={500}
                loading="lazy"
                src="/assets/images/nutro_atributo/silver.webp"
                alt="Nuestras atributo"
                className="w-full relative z-10"
              />
              <div className="absolute bg-[#000] h-8 max-w-[500px] w-full blur-sm opacity-20 bottom-[-15%] rounded-[50%]"></div>
            </div>
          </div>
          <div className="lg:w-5/12 mt-16 lg:mt-0">
            <h3 className="font-anton text-md text-white font-normal text-3xl">
              Silver
            </h3>
            <p className="font-medium text-sm sm:text-base font-Inter text-white opacity-80 mt-3 sm:mt-4 max-w-[401px] leading-[160%]">
              Diseño predeterminado, atractivo y fácil de navegar, tecnología
              HTLM5.
            </p>
            <h2 className="font-anton text-3xl md:text-5xl text-white mt-8">
              $500
            </h2>
            <div className="mt-4">
              {nutroAtributo.map((value, index) => (
                <div className="mt-2" key={index}>
                  <div className="flex items-start gap-2 mt-4 ">
                    <GreenTick />
                    <p className="font-medium sm:text-base text-sm font-Inter text-white opacity-80 leading-[160%]">
                      {value.tittle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <CommonButtonWhite content="Comprar ahora" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutroAtributo;
