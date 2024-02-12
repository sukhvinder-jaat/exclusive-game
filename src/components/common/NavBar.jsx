"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navBarLink } from "./Helper";
import CommonButtonWhite from "./CommonButtonWhite";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarHandler = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.classList.toggle("body_scroll_hidden");
  };

  return (
    <nav
      className="bg-[#FFFFFF1A] py-4 flex-grow-0 min-h-[90px] flex items-center"
      id="home"
    >
      <div className="flex items-center justify-between container xl:max-w-[1140px] mx-auto xl:px-0 px-3">
        <Image
          src="/assets/images/logo/nav.svg"
          width={210}
          height={43}
          alt="Logo"
          className="h-8 w-full min-h-[43px] max-w-[210px]"
        />
        <ul className="hidden lg:flex space-x-7">
          {navBarLink.map((link, index) => (
            <li key={index}>
              <Link
                className="text-white font-inter font-medium text-base opacity-75 hover:opacity-100 transition-all ease-in-out duration-300"
                href={link.path}
              >
                {link.tittle}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex">
          <CommonButtonWhite
            content="Acceso"
            borderColor="border-white"
            textColor="text-white"
            bgColor="bg-transparent"
          />
        </div>
        <button
          className="block lg:hidden text-white text-3xl"
          onClick={sidebarHandler}
        >
          <HiOutlineBars3 />
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-y-0 left-0 w-full bg-[#1A2E38] z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition duration-300 ease-in-out`}
      >
        <div className="p-4 flex flex-col justify-center items-center h-full relative z-50">
          <button
            className="text-white text-3xl absolute top-5 end-5"
            onClick={sidebarHandler}
          >
            <span className=" relative z-50">
              {" "}
              <RxCross2 />
            </span>
          </button>
          <ul className="flex flex-col items-center space-y-4 my-5 relative z-50">
            {navBarLink.map((link, index) => (
              <li key={index}>
                <Link
                  className="text-white font-inter font-medium text-base opacity-75 hover:opacity-100 transition-all ease-in-out duration-300"
                  href={link.path}
                  onClick={sidebarHandler}
                >
                  {link.tittle}
                </Link>
              </li>
            ))}
          </ul>
          <div className=" relative z-50">
            <CommonButtonWhite content="Acceso" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
