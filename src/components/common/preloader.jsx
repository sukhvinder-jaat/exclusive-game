"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed top-0 start-0 w-full h-screen flex items-center justify-center bg-darkBlue z-[100] ${
        loading ? "block" : "hidden"
      }`}
    >
      <Image
        src="/assets/images/luxury/flip_card_a.webp"
        width={150}
        height={150}
        alt="flip card"
        className="card_animation "
      />
    </div>
  );
};

export default Preloader;
