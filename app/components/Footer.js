"use client";
import Link from "next/link";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import {
  FaClock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

import {products} from "../products/data"


export default function Footer() {

  const faqs = [
    {
      question: "Are Benito Italy CNG Kits safe to use?",
      answer:
        "Yes. Benito Italy CNG Kits are designed with advanced safety standards. They use high-pressure tested cylinders, certified valves, and ECU-controlled gas injection to ensure maximum safety during operation.",
    },
    {
      question: "Are these CNG kits government approved?",
      answer:
        "Yes. Benito Italy CNG Kits are approved by State Transport Authorities in Delhi, Gujarat, Haryana, and Maharashtra. Sequential kits are ICAT Manesar certified and comply with ISO-15500-9 standards from VCA London.",
    },
    {
      question: "Will installing a CNG kit affect my vehicle’s performance?",
      answer:
        "No. Our sequential CNG systems are designed to maintain smooth engine performance and fuel efficiency. The ECU ensures optimal gas injection timing for balanced power and mileage.",
    },
    {
      question: "How long does installation take?",
      answer:
        "Installation usually takes one working day when performed by an authorized installer. Proper calibration and safety checks are completed before delivery.",
    },
    {
      question: "What maintenance is required for CNG kits?",
      answer:
        "Routine maintenance includes filter replacement, leak inspection, ECU diagnostics, and general system checks to ensure long-term reliability.",
    },
    {
      question: "Do Benito Italy CNG Kits come with warranty?",
      answer:
        "Yes. All major components come with a manufacturer warranty. Warranty coverage may vary depending on the product model and installation by authorized dealers.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);


  return (
    <>

      <section className="py-16 md:py-20 bg-linear-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-linear-to-r from-green-400 to-cyan-400">
            Frequently Asked Questions
          </h2>

          <p className="text-center text-sm sm:text-base text-white/70 mt-2 sm:mt-3 mb-8 sm:mb-12">
            Everything you need to know about Benito Italy CNG Kits
          </p>

          {/* FAQ ITEMS */}
          <div className="space-y-4 sm:space-y-5">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl backdrop-blur-md overflow-hidden"
                >
                  {/* Question */}
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    className="w-full flex justify-between items-start sm:items-center gap-3 px-4 sm:px-6 py-4 sm:py-6 text-left focus:outline-none"
                  >
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-green-400 leading-snug">
                      {faq.question}
                    </h3>

                    <span className="text-base sm:text-xl flex-shrink-0 mt-0.5">
                      {isOpen ? <FiMinus /> : <FiPlus />}
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`px-4 sm:px-6 transition-all duration-300 ease-in-out ${isOpen
                      ? "max-h-48 pb-4 sm:pb-6 opacity-100"
                      : "max-h-0 opacity-0"
                      } overflow-hidden`}
                  >
                    <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="text-white py-14 px-4 sm:px-6 md:px-12 lg:px-24 bg-linear-to-br from-[#0b2a47] via-[#0b3e58] to-[#008080]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* COMPANY INFO */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <Link href="/" className="text-[#00ffd0]">Benito</Link> Italy
            </h2>
            <p className="text-sm leading-relaxed text-gray-200">
              Benito Italy offers premium CNG & LPG components designed for performance,
              safety, and sustainability. Our advanced fuel systems help you drive
              efficiently into the future.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-5">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-[#00ffd0] hover:text-black transition">
                <FaInstagram />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-[#00ffd0] hover:text-black transition">
                <FaFacebookF />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-[#00ffd0] hover:text-black transition">
                <FaTwitter />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-[#00ffd0] hover:text-black transition">
                <FaPinterestP />
              </a>
            </div>
          </div>

          {/* PRODUCTS (FROM DATA) */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#00ffd0] pb-2 w-fit">
              Our Products
            </h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              {products.slice(0, 7).map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="hover:text-[#00ffd0] transition"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* WORKING HOURS */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#00ffd0] pb-2 w-fit">
              Working Hours
            </h3>
            <p className="flex items-center gap-2 text-sm text-gray-200">
              <FaClock className="text-[#00ffd0]" />
              Mon – Sat: 10:00 AM – 7:00 PM
            </p>
            <p className="flex items-center gap-2 text-sm text-gray-200 mt-2">
              <FaClock className="text-[#00ffd0]" />
              Sunday: Closed
            </p>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#00ffd0] pb-2 w-fit">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm text-gray-200">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-[#00ffd0] mt-1" />
                B 9/2, Samaypur Badli Industrial Area,<br />
                Near Badli Metro Station,<br />
                New Delhi – 110042, India
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#00ffd0]" />
                +91-9599735484 / +91-7982349621
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-[#00ffd0]" />
                info@benitoitaly.com
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 border-t border-white/20 pt-6 text-center text-gray-300 text-xs sm:text-sm">
          © {new Date().getFullYear()} Benito Italy. All rights reserved.
        </div>
      </footer>

    </>
  );
}
