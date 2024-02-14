"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/Footer";
import Propia from "@/components/Propia";
import Ellos from "@/components/Ellos";
import Platinum from "@/components/Platinum";
import Luxury from "@/components/Luxury";
import NutroAtributo from "@/components/NutroAtributo";
import Mas from "@/components/Mas";
import KasinoNingh from "@/components/KasinoNingh";
import Ezuko from "@/components/Ezuko";
import Lanza from "@/components/Lanza";
import Jackpot from "@/components/Jackpot";
import Slots from "@/components/Slots";
import Marca from "@/components/Marca";
import Nuestra from "@/components/Nuestra";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Preloader from "@/components/common/preloader";
import BackToTop from "@/components/common/BackToTop";
import Accordian from "@/components/Faqs";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
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
    <div className="bg-black">
      <BackToTop />
      <Preloader />
      <div className="bg-darkBlue overflow-hidden">
        <div className="bg-hero bg-no-repeat bg-cover min-h-screen flex flex-col relative">
          <NavBar />
          <Hero />
          <div className="absolute bg-black blur-[25px] h-14 w-full bottom-[-30px] pointer-events-none"></div>
        </div>
        <Nuestra />
        <div className="bg-whiteCut bg-cover bg-no-repeat xl:pt-[330px] md:pb-[300px] lg:pt-[300px] pb-[300px] pt-[150px] md:translate-y-[-350px] translate-y-[-150px] relative z-10">
          <Marca />
          <Slots />
          <div className="bg-white w-full sm:h-[172px] h-[130px] skew-y-[5deg] relative z-20 2xl:mb-[-385px] md:mb-[-280px] sm:mb-[-190px]"></div>
        </div>
        <div className="bg-jackpot bg-no-repeat bg-cover overflow-hidden 2xl:pt-[350px] sm:pt-[250px] pt-[150px] pb-[350px] translate-y-[-480px]">
          <Jackpot />
          <Lanza />
          <Ezuko />
        </div>
        <div className="bg-whiteCut xl:pt-[300px] pb-[200px] md:py-[200px] py-[150px] bg-no-repeat bg-cover relative z-10 mt-[-750px]">
          <KasinoNingh />
          <div className="bg-white w-full h-[172px] skew-y-[5deg] relative z-20 mb-[-270px] 2xl:mb-[-285px]"></div>
        </div>
        <div className="bg-darkBlue pt-[350px] translate-y-[-100px] relative">
          <div className="absolute bg-gradient-to-bl from-lightSky to-lightGreen w-[284px] h-[284px] rounded-full blur-[208px] top-[10%] end-[-10%] pointer-events-none"></div>
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
    </div>
  );
}
