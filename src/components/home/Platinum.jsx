import React from "react";
import Image from "next/image";
import CommonButtonWhite from "../common/CommonButtonWhite";
import { GreenTick } from "../common/Icons";
import { nutroAtributo } from "../common/Helper";

const Platinum = () => {
  return (
    <div className=" md:pb-[150px] pb-32 relative">
      <div className=" absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] w-[484px] h-[484px] rounded-full blur-[208px] top-[10%] start-[-30%] translate-y-[-50%] pointer-events-none sm:block hidden"></div>
      <div className=" container xl:max-w-[1140px] px-3 mx-auto">
        <div className="border border-[rgba(255,_255,_255,_0.5)] Nuestras-ofertas-box mt-7 lg:mt-[60px] rounded-md  sm:p-10 p-5 lg:py-[78px] lg:px-12">
          <div className="flex flex-wrap lg:flex-row flex-col-reverse justify-between lg:items-center">
            <div className="lg:w-5/12 xl:w-5/12 mt-16 lg:mt-0">
              <h3 className="font-anton text-md text-white font-normal text-3xl">
                Platinum
              </h3>
              <p className="font-medium text-sm sm:text-base font-Inter text-white opacity-80 mt-3 sm:mt-4 max-w-[364px]">
                Diseño totalmente personalizado. Contáctanos para un
                presupuesto.
              </p>
              <h2 className="font-anton text-3xl md:text-5xl text-white mt-8 font-normal">
                Consultar precio
              </h2>
              <div className=" mt-4">
                <div className="mt-2">
                  <div className="flex items-start gap-2 mt-4 ">
                    <GreenTick />
                    <p className="font-medium text-sm sm:text-base font-Inter text-white opacity-80">
                      Personalizable
                    </p>
                  </div>
                </div>
              </div>
              <div className=" mt-10">
                <CommonButtonWhite content="Comprar ahora" />
              </div>
            </div>
            <div className="lg:w-7/12 sm:px-3">
              <div className="relative">
                <div className=" absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] w-[154px] h-[154px] rounded-full blur-[58px] top-1 end-4  pointer-events-none"></div>
                <Image
                  width={602}
                  height={419}
                  loading="lazy"
                  src="/assets/images/platinum/bar.webp"
                  alt="bar"
                  className="w-100 relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platinum;
