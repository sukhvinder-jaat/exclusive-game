import Image from "next/image";
import React from "react";
import { footerIcon, footerLinks } from "./common/Helper"; // Importing helper functions for footer icons and links
import Link from "next/link";

// Footer component
const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get current year

  return (
    <div className="bg-black mt-[-100px] relative overflow-hidden">
      {/* Footer container */}
      {/* Gradient circles */}
      <div className="absolute bg-gradient-to-bl from-lightSky to-lightGreen w-[180px] h-[180px] rounded-full blur-[108px] bottom-[30%] end-[-10%] pointer-events-none"></div>
      <div className="absolute bg-gradient-to-bl from-lightSky to-lightGreen w-[184px] h-[184px] rounded-full blur-[108px] top-[60%] start-[-10%] pointer-events-none"></div>
      {/* Container */}
      <div className="container max-w-[1140px] mx-auto xl:px-0 px-3 md:pt-16 sm:pt-10 pt-7 pb-10">
        <div className="flex flex-wrap">
          {/* Flex container */}
          {/* Logo and description */}
          <div className="lg:w-4/12 w-full flex flex-col items-start">
            {/* Logo */}
            <Link href="#" className="mb-4">
              <Image
                loading="lazy"
                src="/assets/images/logo/nav.svg"
                width={210}
                height={43}
                className="w-full  max-w-[210px]"
                alt="logo"
              />
            </Link>
            {/* Description */}
            <p className="text-white font-inter font-medium text-base mb-6 opacity-70 max-w-[380px] pe-2">
              En Exclusive Games somos un equipo apasionado de personas
              dedicadas al desarrollo de multiplataformas para juegos de azar
            </p>
            {/* Footer icons */}
            <ul className="flex gap-3 items-center">
              {footerIcon.map((value, index) => (
                <li>
                  <Link
                    href={value.link}
                    className="hover:scale-90 transition-all ease-linear duration-300"
                    key={index}
                    target="_blank"
                    aria-label={value.link}
                  >
                    {value.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Footer links */}
          <div className="xl:w-8/12 w-full flex flex-wrap xl:mt-0 mt-5">
            {footerLinks.map((value, index) => (
              <ul
                className="md:w-4/12 sm:w-6/12 flex flex-col w-full items-start gap-2 xl:ps-10 pe-3 md:mb-0 mb-5"
                key={index}
              >
                <li className="font-inter font-bold text-base text-white mb-2">
                  {value.title}
                </li>
                {value.link.map((subValue, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      href={subValue.path}
                      className="flex items-center gap-2 opacity-70 text-white font-medium text-base hover:opacity-100 duration-300 ease-in-out transition-all"
                    >
                      {subValue.icon} {subValue.subTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
      {/* Footer text */}
      <p className="flex items-center justify-center py-5 border-t-[1px] border-lightBlack text-center gap-2 opacity-70 text-white font-medium text-base px-2">
        © Juegos exclusivos - Todos los derechos reservados {currentYear}
      </p>
    </div>
  );
};

export default Footer; // Export Footer component
