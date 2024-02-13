"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Preloader component
const Preloader = () => {
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Simulate loading completion after 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, []); // Run effect only once on component mount

  return (
    // Conditional rendering based on loading state
    <div
      className={`fixed top-0 start-0 w-full h-screen flex items-center justify-center bg-darkBlue z-[100] ${
        loading ? "block" : "hidden"
      }`}
    >
      <div className="flex sm:flex-row flex-col items-center">
        {/* Image */}
        <Image
          src="/assets/images/luxury/flip_card_a.webp"
          width={150}
          height={150}
          alt="flip card"
          className="card_animation"
        />
        <div>
          {/* Loading text */}
          <p className="text-white font-normal lg:text-7xl sm:text-5xl text-3xl uppercase text-center font-anton leading-[112%]">
            Exclusive Games.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preloader; // Export Preloader component
