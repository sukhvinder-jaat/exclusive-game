import BackToTop from "@/components/common/BackToTop";
import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/NavBar";
import Accordian from "@/components/home/Accordian";
import Ellos from "@/components/home/Ellos";
import Ezuko from "@/components/home/Ezuko";
import Hero from "@/components/home/Hero";
import Jackpot from "@/components/home/Jackpot";
import KasinoNingh from "@/components/home/KasinoNingh";
import Lanza from "@/components/home/Lanza";
import Luxury from "@/components/home/Luxury";
import Marca from "@/components/home/Marca";
import Mas from "@/components/home/Mas";
import Nuestra from "@/components/home/Nuestra";
import NutroAtributo from "@/components/home/NutroAtributo";
import Platinum from "@/components/home/Platinum";
import Propia from "@/components/home/Propia";
import Slots from "@/components/home/Slots";
import React from "react";

const page = () => {
  return (
    <>
      <BackToTop />
      <div className="bg-darkBlue">
        <div className=" bg-[url('/assets/images/background/hero-image.webp')] bg-no-repeat bg-cover min-h-screen flex flex-col relative">
          <NavBar />
          <Hero />
          <div className=" absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] w-full h-7 rounded-full blur-[78px] bottom-0 start-0 pointer-events-none"></div>
        </div>
        <Nuestra />
        <div className=" bg-[url('/assets/images/pocker/white_cut.svg')] bg-cover bg-no-repeat xl:pt-[330px] md:py-[300px] pb-[300px] pt-[150px] md:translate-y-[-350px] translate-y-[-150px] relative z-10">
          <Marca />
          <Slots />
          <div className=" bg-white w-full h-[172px] skew-y-[5deg] relative z-20 2xl:mb-[-385px] md:mb-[-280px] sm:mb-[-190px]"></div>
        </div>
        <div className="bg-[url('/assets/images/background/jackpot.png')] bg-no-repeat bg-cover overflow-hidden 2xl:pt-[350px] sm:pt-[250px] pt-[150px] pb-[350px] translate-y-[-480px]">
          <Jackpot />
          <Lanza />
          <Ezuko />
        </div>
        <div className=" bg-[url('/assets/images/pocker/white_cut.svg')] xl:pt-[300px] pb-[200px] md:py-[200px] py-[150px] bg-no-repeat bg-cover relative z-10 mt-[-750px]">
          <KasinoNingh />
          <div className=" bg-white w-full h-[172px] skew-y-[5deg] relative z-20 mb-[-285px]"></div>
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
