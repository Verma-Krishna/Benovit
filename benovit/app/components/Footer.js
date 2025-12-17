"use client";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="text-white py-12 px-6 md:px-16 lg:px-24 bg-linear-to-br from-[#0b2a47] via-[#0b3e58] to-[#008080]"
    // style={{
    //   background: "linear-gradient(180deg, #357abd 0%, #0a0a0a 100%)",
    // }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            <Link href="/" className="text-[#00ffd0]">Benito</Link> Italy
          </h2>
          <p className="text-sm leading-relaxed text-gray-200">
            Benito Italy offers premium CNG & LPG kits designed for performance,
            safety, and sustainability. Our advanced fuel systems help you drive
            efficiently into the future.
          </p>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-[#00ffd0] pb-2 w-fit">
            Our Products
          </h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>
              <Link href="/products/cng-sequential-reducer">Sequential Reducer</Link>
            </li>
            <li>
              <Link href="/products/electronic-control-unit-model">ECU (Made in Italy)</Link>
            </li>
            <li>
              <Link href="/products/cng-sequential-reducer">Injector</Link>
            </li>
            <li>
              <Link href="/products/cng-sequential-reducer">Change Over Switch</Link>
            </li>
            <li>
              <Link href="/products/filling-valve">FilLinkng Valve</Link>
            </li>
            <li>
              <Link href="/products/steel-tube">CNG Gauge</Link>
            </li>
            <li>
              <Link href="/products/cng-sequential-reducer">CNG CyLinknder</Link>
            </li>
            <li>
              <Link href="/products/injector">Steel Tube</Link>
            </li>
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-[#00ffd0] pb-2 w-fit">
            Hours
          </h3>
          <p className="flex items-center gap-2 text-sm text-gray-200">
            <FaClock className="text-[#00ffd0]" /> Monday - Saturday: 10:00 am – 7:00 pm
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-200">
            <FaClock className="text-[#00ffd0]" /> Sunday: Closed
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-[#00ffd0] pb-2 w-fit">
            Get in Touch
          </h3>
          <ul className="space-y-3 text-sm text-gray-200">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-[#00ffd0] mt-1" />
              B 9/2, Samaypur Badli Industrial Area,
              <br /> Near Badli Metro Station, New Delhi – 110042, India
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#00ffd0]" /> +91-9599735484 / +91-7982349621
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#00ffd0]" /> info@benitoitaly.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} Benito Italy. All rights reserved.
      </div>
    </footer>
  );
}
