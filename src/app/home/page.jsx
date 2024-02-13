"use client";
import BackToTop from "@/components/common/BackToTop";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Preloader from "@/components/common/preloader";
import Accordian from "@/components/Accordian";
import Ellos from "@/components/Ellos";
import Ezuko from "@/components/Ezuko";
import Hero from "@/components/Hero";
import Jackpot from "@/components/Jackpot";
import KasinoNingh from "@/components/KasinoNingh";
import Lanza from "@/components/Lanza";
import Luxury from "@/components/Luxury";
import Marca from "@/components/Marca";
import Mas from "@/components/Mas";
import Nuestra from "@/components/Nuestra";
import NutroAtributo from "@/components/NutroAtributo";
import Platinum from "@/components/Platinum";
import Propia from "@/components/Propia";
import Slots from "@/components/Slots";
import React, { useEffect, useState } from "react";

const page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "unset";
  }, [loading]);
  return (
    <>
      <BackToTop />
      <Preloader />
      <div className="bg-darkBlue overflow-hidden">
        <div className="bg-[url('/assets/images/background/hero_image.webp')] bg-no-repeat bg-cover min-h-screen flex flex-col relative">
          <NavBar />
          <Hero />
          <div className="absolute bg-black blur-[25px] h-14 w-full bottom-[-30px] pointer-events-none"></div>
        </div>
        <Nuestra />
        <div className="bg-[url('/assets/images/pocker/white_cut.svg')] bg-cover bg-no-repeat xl:pt-[330px] md:pb-[300px] lg:pt-[300px] pb-[300px] pt-[150px] md:translate-y-[-350px] translate-y-[-150px] relative z-10">
          <Marca />
          <Slots />
          <div className="bg-white w-full sm:h-[172px] h-[122px] skew-y-[5deg] relative z-20 2xl:mb-[-385px] md:mb-[-280px] sm:mb-[-190px]"></div>
        </div>
        <div className="bg-[url('/assets/images/background/jackpot.webp')] bg-no-repeat bg-cover overflow-hidden 2xl:pt-[350px] sm:pt-[250px] pt-[150px] pb-[350px] translate-y-[-480px]">
          <Jackpot />
          <Lanza />
          <Ezuko />
        </div>
        <div className="bg-[url('/assets/images/pocker/white_cut.svg')] xl:pt-[300px] pb-[200px] md:py-[200px] py-[150px] bg-no-repeat bg-cover relative z-10 mt-[-750px]">
          <KasinoNingh />
          <div className="bg-white w-full h-[172px] skew-y-[5deg] relative z-20 mb-[-270px]"></div>
        </div>
        <div className="bg-darkBlue pt-[350px] translate-y-[-100px]">
          <Mas />
          <NutroAtributo />
          <Luxury />
          <Platinum />
          <Ellos />
          <Accordian />
          <Propia />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default page;
