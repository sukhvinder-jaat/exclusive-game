"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed top-0 start-0 w-full h-screen flex items-center justify-center bg-darkBlue z-[100] ${
        loading ? "block" : "hidden"
      }`}
    >
      <div className="flex sm:flex-row flex-col items-center">
        <Image
          src="/assets/images/luxury/flip_card_a.webp"
          width={150}
          height={150}
          alt="flip card"
          className="card_animation "
        />
        <div>
          <p className=" text-white font-normal lg:text-7xl sm:text-5xl text-3xl uppercase text-center font-anton  leading-[112%]">
            Exclusive Games.
          </p>
          <p className=" text-white font-normal lg:text-7xl sm:text-5xl text-3xl uppercase text-center font-anton  leading-[112%]">
            Pasión por ganar
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
