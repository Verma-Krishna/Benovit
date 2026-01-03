"use client";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-white py-16 px-6 md:px-16"
      style={{
        background: "linear-gradient(180deg, #357abd 0%, #0a0a0a 100%)",
      }}
    >
      {/* Header Section */}
      <div className="text-center  my-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Get in <span className="text-[#00ffd0]">Touch</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-200">
          We'd love to hear from you! Whether you have a question about our
          products, pricing, or anything else, our team is ready to help.
        </p>
      </div>

      {/* Main Contact Section */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side - Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.5353820449!2d77.0688975!3d28.527582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1c9cd5d58e1b%3A0x2d06b6ef60f4bde2!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1692028458494!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-[400px]"
          ></iframe>
        </div>

        {/* Right Side - Details */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-semibold mb-4 border-b border-[#00ffd0] pb-2 w-fit">
            Contact Information
          </h2>
          <p className="text-gray-200 text-sm leading-relaxed">
            Feel free to reach out to us with any queries regarding our CNG and
            LPG kits. Our team will get back to you at the earliest.
          </p>

          <ul className="space-y-4 text-gray-100 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#00ffd0] text-lg mt-1" />
              <span>
                B 9/2, Samaypur Badli Industrial Area,
                <br /> Near Badli Metro Station, New Delhi – 110042, India
              </span>
            </li>

            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#00ffd0] text-lg" />
              +91-9599735484 / +91-7982349621
            </li>

            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#00ffd0] text-lg" />
              info@benitoitaly.com
            </li>

            <li className="flex items-center gap-3">
              <FaClock className="text-[#00ffd0] text-lg" />
              Mon - Sat: 10:00 am – 7:00 pm | Sunday Closed
            </li>
          </ul>

          <div className="pt-4">
            <button className="bg-linear-to-r from-green-400 to-cyan-400 text-black font-semibold py-2 px-6 rounded-full hover:bg-white transition duration-300">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
