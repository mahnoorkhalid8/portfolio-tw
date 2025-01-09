"use client";

import React from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); //menu close/open
  };

  const closeMenu = () => {
    setIsMenuOpen(false); //menu close
  };

  return (
    <div className="container p-6 ">
      <div className="flex justify-between items-center font-semibold text-2xl px-16">
        <div className=" text-gray-300">
          <img src="logo1.png" alt="logo" className="w-20 h-16 " />
          <h6 className="m-2">MK</h6>
        </div>
        <ul className="gap-8 md:gap-12 hidden md:flex text-pink-800 ">
          <a
            href="#"
            onClick={closeMenu}
            className="hover:text-pink-300 hover:cursor-pointer"
          >
            <li>Home</li>
          </a>
          <a
            href="#about"
            onClick={closeMenu}
            className="hover:text-pink-300 hover:cursor-pointer"
          >
            <li>About</li>
          </a>
          <a
            href="#projects"
            onClick={closeMenu}
            className="hover:text-pink-300 hover:cursor-pointer"
          >
            <li>Projects</li>
          </a>
          <a
            href="#skills"
            onClick={closeMenu}
            className="hover:text-pink-300 hover:cursor-pointer"
          >
            <li>Skills</li>
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="hover:text-pink-300 hover:cursor-pointer"
          >
            <li>Contact</li>
          </a>
        </ul>

        <div className="md:hidden text-gray-300" onClick={toggleMenu}>
          {isMenuOpen ? <RxCross1 size={30} /> : <TfiMenuAlt size={30} />}
        </div>
      </div>

      {isMenuOpen && (
        <ul className="gap-4 md:hidden flex flex-col mt-4 text-pink-800 w-full text-center">
          <a
            href="#"
            onClick={closeMenu}
            className="hover:text-pink-300 hover:cursor-pointer"
          >
            <li>Home</li>
          </a>
          <a
            href="#about"
            onClick={closeMenu}
            className="hover:text-pink-300 hover:cursor-pointer"
          >
            <li>About</li>
          </a>
          <a
            href="#projects"
            onClick={closeMenu}
            className="hover:text-pink-300 hover:cursor-pointer"
          >
            <li>Projects</li>
          </a>
          <a
            href="#skills"
            onClick={closeMenu}
            className="hover:text-pink-300 hover:cursor-pointer"
          >
            <li>Skills</li>
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="hover:text-pink-300 hover:cursor-pointer"
          >
            <li>Contact</li>
          </a>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
