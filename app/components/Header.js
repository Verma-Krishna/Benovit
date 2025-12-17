"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[97%] text-white px-8 py-3 flex justify-between items-center rounded-full shadow-lg border border-white/10 z-50 backdrop-blur-lg bg-linear-to-r from-emerald-600/20 via-cyan-600/20 to-green-500/20">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="text-2xl font-extrabold bg-linear-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Benito <span className="text-white">Italy</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {["Home", "Products", "About", "Contact"].map((item, index) => (
            <Link
              key={index}
              href={`${item === "Home" ? "/" : `/${item.toLowerCase()}`}`}
              className="relative font-medium text-white/90 hover:text-green-300 transition-colors duration-300 group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link href={"https://wa.me/911234567890"} className="bg-linear-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-black font-semibold px-6 py-2 rounded-full shadow-md transition-transform duration-300 hover:scale-105">
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""
              }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen z-40 transition-transform duration-300 md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          } bg-linear-to-b from-green-600/90 to-cyan-800/90 backdrop-blur-2xl`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {["Home", "Products", "About", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`${item === "Home" ? "/" : `/${item.toLowerCase()}`}`}
              className="text-2xl font-medium text-white hover:text-green-300 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="bg-linear-to-r from-green-400 to-cyan-400 text-black px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition-transform duration-300">
            Get Quote
          </button>
        </div>
      </div>
    </>
  );
}
