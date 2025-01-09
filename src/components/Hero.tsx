"use client"

import React from "react";
import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div id="hero">
      <Navbar />
<div className="flex flex-col justify-center md:justify-end items-end px-24">
      <div>
        <img
          src="dp.png"
          alt="profile picture"
          className="rounded-full w-48 md:w-96 h-48 md:h-96"
        />
      </div>
      <h2
        className="font-bold text-pink-800 text-2xl md:text-4xl pt-2"
        data-aos="zoom-out"
      >
        I&apos;m Mahnoor Khalid
      </h2>
</div>
    </div>
  );
};

export default Hero;
