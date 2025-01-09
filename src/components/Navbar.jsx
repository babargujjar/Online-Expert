"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import AnimatedButton from "./AnimatedButton";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-[#0a0a0a] sticky top-0 z-30 px-4">
      <div
        className={`fixed px-4 top-0 left-1/2 transform -translate-x-1/2 z-50 w-full ${
          isScrolled
            ? "bg-[#0a0a0a]/30 backdrop-blur-md shadow-lg w-[90%] mt-3 lg:w-[90%] rounded-lg"
            : "bg-[#0a0a0a] w-full"
        } transition-all duration-1000`}
      >
        <div className="flex justify-between items-center py-3 max-w-7xl mx-auto text-white">
          <div>
            <Link className="text-5xl" href="/">
              Online Expert
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex gap-6">
            <ul className="flex gap-6">
              <li>
                <Link
                  href="/"
                  className="group relative text-[18px] transition duration-300 ease-in-out"
                >
                  Home
                  <span className="absolute bottom-[-6px] left-1/2 w-0 h-[2px] bg-[#3275F8] transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="group relative text-[18px] transition duration-300 ease-in-out"
                >
                  About Us
                  <span className="absolute bottom-[-6px] left-1/2 w-0 h-[2px] bg-[#3275F8] transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="group relative text-[18px] transition duration-300 ease-in-out"
                >
                  Services
                  <span className="absolute bottom-[-6px] left-1/2 w-0 h-[2px] bg-[#3275F8] transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="group relative text-[18px] transition duration-300 ease-in-out"
                >
                  Contact Us
                  <span className="absolute bottom-[-6px] left-1/2 w-0 h-[2px] bg-[#3275F8] transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="group relative text-[18px] transition duration-300 ease-in-out"
                >
                  Our Works
                  <span className="absolute bottom-[-6px] left-1/2 w-0 h-[2px] bg-[#3275F8] transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden lg:flex">
            <AnimatedButton text="Reach Us" href="/contact" />
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-[80%] bg-[#0a0a0a]/30 backdrop-blur-md shadow-lg z-50 w-[40%] md:w-[40%] transform transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={closeMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex flex-col gap-6 mt-20 px-8 text-white text-lg">
          <li>
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/work" onClick={closeMenu}>
              Our Works
            </Link>
          </li>
        </ul>
        <div className="mt-10 px-8">
          <AnimatedButton text="Reach Us" href="/contact" onClick={closeMenu} />
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20"
          onClick={closeMenu}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
