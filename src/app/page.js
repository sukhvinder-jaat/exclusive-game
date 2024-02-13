"use client";
import { useEffect } from "react";
import Page from "./home/page";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="bg-black">
      <Page />
    </div>
  );
}
