"use client";
import { useEffect, useState } from "react";
import { PreloaderIcon } from "./Icons";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed top-0 start-0 w-full h-screen flex items-center justify-center bg-darkBlue z-[100] ${
        loading ? "block" : "hidden"
      }`}
    >
      <PreloaderIcon />
    </div>
  );
};

export default Preloader;
