"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navBarLink } from "./common/Helper"; // Importing helper functions for navbar links
import WhiteButton from "./common/button/WhiteButton"; // Importing WhiteButton component
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

// NavBar component
const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control sidebar visibility

  // Function to toggle sidebar visibility
  const sidebarHandler = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.classList.toggle("body_scroll_hidden"); // Adding/removing class to body for mobile scroll
  };

  return (
    <nav
      className="bg-lightWhite py-4 flex-grow-0 md:min-h-[90px] flex items-center"
      id="home"
    >
      <div className="flex items-center justify-between w-full xl:max-w-[1140px] mx-auto xl:px-0 px-3">
        {/* Logo */}
        <Image
          src="/assets/images/logo/nav.svg"
          width={210}
          height={43}
          alt="Logo"
          className="h-8 w-full min-h-[43px] md:max-w-[210px] max-w-[150px]"
        />
        {/* Desktop links */}
        <ul className="hidden lg:flex space-x-7">
          {navBarLink.map((link, index) => (
            <li key={index}>
              <Link
                className="text-white font-inter font-medium text-base opacity-75 hover:opacity-100 transition-all ease-in-out duration-300"
                href={link.path}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        {/* WhiteButton for desktop */}
        <div className="hidden lg:flex">
          <WhiteButton title="Acceso" />
        </div>
        {/* Sidebar toggle button for mobile */}
        <button
          className="block lg:hidden text-white text-3xl"
          onClick={sidebarHandler}
        >
          <HiOutlineBars3 />
        </button>
      </div>
      {/* Sidebar for mobile */}
      <div
        className={`lg:hidden fixed inset-y-0 left-0 w-full bg-black z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition duration-300 ease-in-out`}
      >
        <div className="p-4 flex flex-col justify-center items-center h-full relative z-50">
          {/* Close button for sidebar */}
          <button
            className="text-white text-3xl absolute top-5 end-5"
            onClick={sidebarHandler}
          >
            <span className="relative z-50">
              <RxCross2 />
            </span>
          </button>
          {/* Sidebar links */}
          <ul className="flex flex-col items-center space-y-4 my-5 relative z-50">
            {navBarLink.map((link, index) => (
              <li key={index}>
                <Link
                  className="text-white font-inter font-medium text-base opacity-75 hover:opacity-100 transition-all ease-in-out duration-300"
                  href={link.path}
                  onClick={sidebarHandler}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          {/* WhiteButton for mobile */}
          <div className="relative z-50">
            <WhiteButton title="Acceso" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar; // Export NavBar component
