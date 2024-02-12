import React from "react";
import CommonSlotsCard from "../common/CommonSlotsCard";
import { ezukoCard } from "../common/Helper";

const Ezuko = () => {
  return (
    <div className=" relative">
      <div className=" absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] w-[484px] h-[484px] rounded-full blur-[208px] bottom-[-60%] end-[-30%] translate-y-[-50%] pointer-events-none"></div>
      <div className="container max-w-[1140px] mx-auto xl:px-0 px-3">
        <p className="relative z-10 font-anton font-normal text-white xl:text-5xl text-3xl text-center leading-[118%] xl:mb-[60px] mb-10">
          Juegos en vivo
        </p>

        <div className="flex flex-wrap justify-center relative z-10">
          {ezukoCard.map((value, index) => (
            <div
              key={index}
              className="p-2 md:w-4/12 sm:w-6/12 duration-300 hover:-translate-y-1"
            >
              <CommonSlotsCard
                image={value.image}
                buttonContent="Reproducir ahora"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ezuko;
