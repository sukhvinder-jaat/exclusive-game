import React from "react";
import CommonButtonLiner from "../common/CommonButtonLiner";

const Propia = () => {
  return (
    <div className="container max-w-[1140px] mx-auto xl:px-0 px-3 lg:mb-[150px] mb-20">
      <div
        className="bg-[url('/assets/images/background/lanza.webp')] bg-no-repeat bg-cover flex flex-col items-center justify-center rounded-2xl border-[0.5px] border-[#FFFFFF80] xl:py-[104px] md:py-20 py-10 !px-2"
        data-aos="flip-up"
      >
        <p className="text-white font-normal md:text-3xl text-xl font-anton md:mb-10 mb-5 text-center">
          Lanza tu propia plataforma en sólo 2 semanas
        </p>
        <CommonButtonLiner content="Leer más" />
      </div>
    </div>
  );
};

export default Propia;
