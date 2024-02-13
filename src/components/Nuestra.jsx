"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GreenArrow } from "./common/Icons";

const Nuestra = () => {
  return (
    <div className="bg-darkBlue overflow-hidden pb-[200px]">
      <div className="container xl:max-w-[1140px] mx-auto xl:px-0 px-3 md:pb-[243px] pb-10 pt-20 relative">
        {/* liner blur circles */}
        <div className="absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] w-[484px] h-[484px] rounded-full blur-[208px] bottom-[-50%] end-[-40%] translate-y-[-50%] pointer-events-none"></div>
        <div className="absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] w-[484px] h-[484px] rounded-full blur-[208px] top-[50%] start-[-40%] translate-y-[-50%] pointer-events-none"></div>
        <div className="absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] w-[200px] h-[200px] rounded-full blur-[208px] top-[50%] start-[50%] translate-[-50%_-50%] pointer-events-none"></div>
        <div className="flex flex-wrap relative z-10 md:flex-row flex-col">
          <div className="md:w-6/12 w-full flex flex-col md:pe-8  md:items-start items-center">
            <Image
              src="/assets/images/pocker/pocker_with_friends.webp"
              width={538}
              height={536}
              className="w-full max-w-[538px] md:mb-[60px] mb-10"
              alt="pocker_with_friends"
              sizes="100vw"
              data-aos="fade-right"
            />
            <div
              className="flex-col flex md:items-start items-center"
              data-aos="fade-right"
            >
              <p className="font-anton font-normal sm:text-5xl text-3xl text-white mb-4 leading-[96%]">
                Nuestra Visión
              </p>
              <p className="text-white opacity-70 font-inter font-medium sm:text-base text-sm max-w-[445px] mb-6 leading-[160%]">
                Nuestra visión es ser líderes indiscutibles en la industria de
                los juegos de azar y llevar nuestra pasión por el
                entretenimiento más allá de las fronteras. Imagina un mundo
                donde la emoción y la diversión no tengan límites, y ese es el
                mundo que queremos crear contigo.
              </p>
              <Link
                href="/"
                className="font-inter font-bold text-base text-lightGreen flex items-center group"
              >
                Aprende más
                <span className="ms-2 group-hover:ms-4 transition-all ease-in-out duration-300">
                  <GreenArrow />
                </span>
              </Link>
            </div>
          </div>
          <div className="md:w-6/12 w-full flex md:flex-col flex-col-reverse md:ps-8 md:items-start items-center">
            <div
              className="flex-col flex md:items-start items-center"
              data-aos="fade-left"
            >
              <p className="font-anton font-normal sm:text-5xl text-3xl text-white mb-4 leading-[96%]">
                Nuestra Misión
              </p>
              <p className="text-white opacity-70 font-inter font-medium sm:text-base text-sm max-w-[445px] mb-6 leading-[160%]">
                Nuestra misión es simple pero poderosa: proporcionarte la más
                amplia gama de soluciones de entretenimiento de alta calidad y
                rentabilidad. Estamos comprometidos a elevar tus expectativas y
                brindarte experiencias inigualables.
              </p>
              <Link
                href="/"
                target="_blank"
                className="font-inter font-bold text-base text-lightGreen flex items-center group"
              >
                Aprende más
                <span className="ms-2 group-hover:ms-4 transition-all ease-in-out duration-300">
                  <GreenArrow />
                </span>
              </Link>
            </div>
            <Image
              src="/assets/images/pocker/aviator.webp"
              data-aos="fade-left"
              width={538}
              height={536}
              className="w-full md:mb-0 mb-10 mt-[60px] max-w-[538px]"
              alt="aviator"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nuestra;
