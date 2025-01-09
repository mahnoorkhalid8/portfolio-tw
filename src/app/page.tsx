"use client";

import Image from "next/image";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
      easing: "ease-out",
    });
    AOS.refresh();
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
