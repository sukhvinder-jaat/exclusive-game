"use client";
import React, { useState } from "react";
import { accordionContent } from "./common/Helper"; // Importing accordion content from a helper file
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react"; // Importing components from Material Tailwind
import { Minus, Plus } from "./common/Icons";

// Plus and minus icons for accordion headers
function Icon({ id, open }) {
  return (
    <div className="relative">
      {/* Minus icon */}
      <Minus id={id} open={open} />
      {/* Plus icon */}
      <Plus />
    </div>
  );
}

// AccordionComponent
const AccordionComponent = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(-1); // State to track open accordion index

  // Function to handle accordion click
  const accordionHandler = (index) => {
    setIsAccordionOpen(isAccordionOpen === index ? -1 : index);
  };

  return (
    <div className="relative" id="faq">
      {/* Background circle */}
      <div className="absolute bg-gradient-to-bl from-lightSky to-lightGreen w-[284px] h-[284px] rounded-full blur-[208px] top-[-30%] start-[-10%] pointer-events-none"></div>
      {/* Container */}
      <div className="container max-w-[1140px] mx-auto xl:px-0 px-3 lg:mb-[150px] mb-20">
        {/* Heading */}
        <h2
          className="font-anton md:text-5xl text-3xl text-center mb-7 font-normal text-white leading-[112%]"
          data-aos="fade-right"
        >
          Preguntas más frecuentes
        </h2>
        <div className="max-w-[970px] mx-auto">
          {/* Accordion items */}
          {accordionContent.map((value, index) => (
            <Accordion
              key={index}
              className="flex flex-col justify-between border-[0.5px] border-darkSilver rounded-md px-6 bg-transparent overflow-hidden ease-out transition-all duration-300 mt-8 relative"
              data-aos="fade-right"
              open={isAccordionOpen === index}
              icon={<Icon id={index} open={isAccordionOpen} />}
            >
              {/* Accordion header */}
              <AccordionHeader
                onClick={() => accordionHandler(index)}
                className="pt-4 pb-2"
              >
                {/* Accordion title */}
                <h2 className="text-start text-white lg:text-xl flex font-anton font-normal leading-[140%] md:leading-[150%] text-base mb-0 pe-2">
                  {value.title}
                </h2>
              </AccordionHeader>
              {/* Accordion body */}
              <AccordionBody className="pb-4 pt-0">
                {/* Accordion description */}
                <p className="font-inter font-medium md:text-base text-sm max-w-[740px] text-white opacity-70 leading-[150%]">
                  {value.description}
                </p>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionComponent; // Export AccordionComponent
