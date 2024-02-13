import Image from "next/image";
import React from "react";
import { footerIcon, footerLinks } from "./Helper";
import Link from "next/link";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-black mt-[-100px] relative overflow-hidden">
      {/* liner grident */}
      <div className="absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] w-[180px] h-[180px] rounded-full blur-[108px] bottom-[30%] end-[-10%] pointer-events-none"></div>
      <div className="absolute bg-[linear-gradient(306.99deg,_#51C8EF_-13.72%,_#7AF57A_102.02%)] w-[184px] h-[184px] rounded-full blur-[108px] top-[60%] start-[-10%] pointer-events-none"></div>
      <div className="container max-w-[1140px] mx-auto xl:px-0 px-3 md:pt-16 sm:pt-10 pt-7 pb-10">
        <div className="flex flex-wrap">
          <div className="lg:w-4/12 w-full flex flex-col items-start">
            {/* image */}
            <Link href="#" className="mb-4">
              <Image
                src="/assets/images/logo/nav.svg"
                width={210}
                height={43}
                className="w-full  max-w-[210px]"
                alt="logo"
              />
            </Link>
            <p className="text-white font-inter font-medium text-base mb-6 opacity-70 max-w-[380px] pe-2">
              En Exclusive Games somos un equipo apasionado de personas
              dedicadas al desarrollo de multiplataformas para juegos de azar
            </p>
            {/* icons */}
            <div className="flex gap-3 items-center">
              {footerIcon.map((value, index) => (
                <Link
                  href={value.link}
                  className="hover:scale-90 transition-all ease-linear duration-300"
                  key={index}
                >
                  {value.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="xl:w-8/12 w-full flex flex-wrap xl:mt-0 mt-5">
            {/* links */}
            {footerLinks.map((value, index) => (
              <ul
                className="md:w-4/12 sm:w-6/12 flex flex-col w-full items-start gap-2 xl:ps-10 pe-3 md:mb-0 mb-5"
                key={index}
              >
                <li className="font-inter font-bold text-base text-white mb-2">
                  {value.tittle}
                </li>
                {value.link.map((subValue, subIndex) => (
                  <Link href={subValue.path} key={subIndex}>
                    <li className="flex items-center gap-2 opacity-70 text-white font-medium text-base hover:opacity-100 duration-300 ease-in-out transition-all">
                      {subValue.icon} {subValue.subTittle}
                    </li>
                  </Link>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
      <p className="flex items-center justify-center py-5 border-t-[1px] border-lightBlack text-center gap-2 opacity-70 text-white font-medium text-base px-2">
        © Juegos exclusivos - Todos los derechos reservados {currentYear}
      </p>
    </div>
  );
};
export default Footer;
