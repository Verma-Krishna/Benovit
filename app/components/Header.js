"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const gradientText =
    "bg-linear-to-r from-green-600 via-emerald-500 to-cyan-600 bg-clip-text text-transparent";

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[97%] px-8 py-3 flex justify-between items-center rounded-full shadow-lg border border-white/20 z-50 backdrop-blur-lg bg-white">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img src="/benitologo.svg" className="h-10" alt="Benito Italy" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {["Home", "Products", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`relative font-semibold group ${gradientText}`}
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          <Link
            href="https://wa.me/9950005552"
            className="bg-linear-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-black font-semibold px-6 py-2 rounded-full shadow-md hover:scale-105 transition"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Button (FIXED VISIBILITY) */}
        <button
          className="md:hidden flex flex-col space-y-1 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`w-7 h-[3px] rounded transition-all duration-300 ${isMenuOpen
                ? "rotate-45 translate-y-2 bg-gray-800"
                : "bg-teal-700"
              }`}
          />
          <span
            className={`w-7 h-[3px] rounded transition-all duration-300 ${isMenuOpen ? "opacity-0" : "bg-teal-700"
              }`}
          />
          <span
            className={`w-7 h-[3px] rounded transition-all duration-300 ${isMenuOpen
                ? "-rotate-45 -translate-y-2 bg-gray-800"
                : "bg-teal-700"
              }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen z-40 transition-transform duration-300 md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          } bg-linear-to-b from-green-600/95 to-cyan-800/95 backdrop-blur-2xl`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {["Home", "Products", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-semibold text-white hover:text-green-300 transition"
            >
              {item}
            </Link>
          ))}

          <Link
            href="https://wa.me/919950005552"
            className="bg-linear-to-r from-green-400 to-cyan-400 text-black px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </>
  );
}
