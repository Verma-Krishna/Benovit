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

import { products } from "../products/data";

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
        "Installation usually takes one working day when performed by an authorized installer.",
    },
    {
      question: "What maintenance is required for CNG kits?",
      answer:
        "Routine maintenance includes filter replacement, leak inspection, ECU diagnostics, and general system checks.",
    },
    {
      question: "Do Benito Italy CNG Kits come with warranty?",
      answer:
        "Yes. All major components come with a manufacturer warranty.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      {/* FAQ SECTION */}
      <section className="py-16 bg-linear-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center bg-linear-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl"
                >
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    className="w-full flex justify-between px-6 py-4 text-left"
                  >
                    <h3 className="font-semibold text-green-400">
                      {faq.question}
                    </h3>
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </button>

                  <div
                    className={`px-6 transition-all duration-300 ${isOpen ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0"
                      } overflow-hidden`}
                  >
                    <p className="text-sm text-white/80">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-white py-8 px-6 bg-linear-to-br from-[#0b2a47] via-[#0b3e58] to-[#008080]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* COMPANY */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <Link href="/" className="text-[#00ffd0]">
                <img src="/benitologo.svg" className="h-16" alt="Benito Italy" />
              </Link>
            </h2>
            <p className="text-sm text-gray-200">
              Premium CNG & LPG components designed for performance, safety, and
              sustainability.
            </p>

            <div className="flex gap-4 mt-5">
              <FaInstagram className="cursor-pointer hover:text-[#00ffd0]" />
              <FaFacebookF className="cursor-pointer hover:text-[#00ffd0]" />
              <FaTwitter className="cursor-pointer hover:text-[#00ffd0]" />
              <FaPinterestP className="cursor-pointer hover:text-[#00ffd0]" />
            </div>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#00ffd0] pb-2 w-fit">
              Our Products
            </h3>
            <ul className="space-y-2 text-sm text-gray-200">
              {products.slice(0, 7).map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="hover:text-[#00ffd0]"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* HOURS */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#00ffd0] pb-2 w-fit">
              Working Hours
            </h3>
            <p className="flex items-center gap-2 text-sm">
              <FaClock className="text-[#00ffd0]" />
              9:30 AM – 8:00 PM
            </p>
          </div>

          {/* CONTACT (FIXED LINKS) */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#00ffd0] pb-2 w-fit">
              Get in Touch
            </h3>

            <ul className="space-y-3 text-sm text-gray-200">
              <li className="flex gap-2">
                <FaMapMarkerAlt className="text-[#00ffd0] mt-1" />
                <span>
                  Benito Italy, Meena Wala – Sirsi Rd,
                  <br />
                  Opp. RTEC Mall, Panchyawala,
                  <br />
                  Jaipur, Rajasthan – 302021
                </span>
              </li>

              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#00ffd0]" />
                <a href="tel:+919599735484" className="hover:text-[#00ffd0]">
                  +91 9950005552
                </a>
                <br />
                <a href="tel:+917982349621" className="hover:text-[#00ffd0]">
                  +91 8058837913
                </a>
              </li>

              <li className="flex items-center gap-2">
                <FaEnvelope className="text-[#00ffd0]" />
                <a
                  href="mailto:info@benitoitaly.com"
                  className="hover:text-[#00ffd0]"
                >
                  benitoitalygas@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} Benito Italy. All rights reserved.
          <div className="mt-4 text-center text-xs text-gray-300">
            Designed & Developed with ❤️ by{" "}
            <span className="text-[#00ffd0] font-semibold">
              Sulekha Technologies
            </span>
          </div>
        </div>



      </footer>
    </>
  );
}
