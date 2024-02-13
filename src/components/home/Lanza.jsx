import React from "react";

const Lanza = () => {
  return (
    <div className="container max-w-[1140px] mx-auto xl:px-0 px-3">
      <div
        className="xl:py-24 md:py-20 py-10 flex items-center justify-center border-[0.5px] border-white rounded-2xl xl:mb-[150px] mb-20 bg-[url('/assets/images/background/plataforma_bg_image.webp')] bg-no-repeat backdrop-blur-3xl bg-black  border-[#b5ffb574] bg-[97%_97%]"
        data-aos-delay="600"
        data-aos="fade-down-right"
      >
        <p className=" font-anton font-normal text-white xl:text-5xl text-3xl text-center leading-[118%] max-w-[520px]">
          lanza tu propia plataforma en sólo 2 semanas
        </p>
      </div>
    </div>
  );
};

export default Lanza;
