import React from "react";

// Lanza component
const Lanza = () => {
  return (
    <div className="container max-w-[1140px] mx-auto xl:px-0 px-3">
      {/* Container for the content */}
      <div
        className="xl:py-24 md:py-20 py-10 flex items-center justify-center border-[0.5px] border-white rounded-2xl xl:mb-[150px] mb-20 bg-platForm bg-no-repeat backdrop-blur-3xl bg-black bg-[97%_97%]"
        data-aos-offset="100"
        data-aos="fade-down-right"
      >
        {/* Content */}
        <p className="font-anton font-normal text-white xl:text-5xl sm:text-3xl text-2xl text-center leading-[118%] max-w-[520px] md:px-0 px-2">
          Lanza tu propia plataforma en sólo 2 semanas
        </p>
      </div>
    </div>
  );
};

export default Lanza; // Exporting Lanza component
