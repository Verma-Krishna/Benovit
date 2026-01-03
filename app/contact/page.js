"use client";
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function ContactPage() {
  const ownerWhatsApp = "919950005552";

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.mobile.trim()) newErrors.mobile = "Mobile number is required";
    else if (!/^[6-9]\d{9}$/.test(form.mobile))
      newErrors.mobile = "Enter a valid 10-digit number";
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const text = `New Contact Inquiry%0A%0AName: ${form.name}%0AMobile: ${form.mobile}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${ownerWhatsApp}?text=${text}`, "_blank");
  };

  return (
    <div
      className="min-h-screen text-white py-16 px-6 md:px-16"
      style={{
        background: "linear-gradient(180deg, #357abd 0%, #0a0a0a 100%)",
      }}
    >

      {/* Header */}
      <div className="text-center my-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Get in <span className="text-[#00ffd0]">Touch</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-200">
          We'd love to hear from you! Whether you have a question about our
          products, pricing, or anything else, our team is ready to help.
        </p>
      </div>

      {/* Main Grid */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-700">
          <iframe
            src="https://www.google.com/maps?q=Benito%20Italy,%20Meena%20Wala%20Sirsi%20Rd,%20opp.%20RTEC%20mall,%20Panchyawala,%20Jaipur,%20Rajasthan%20302021&output=embed"
            className="w-full h-[300px] md:h-[400px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Contact Info + Form */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-semibold border-b border-[#00ffd0] pb-2 w-fit">
            Contact Information
          </h2>

          <ul className="space-y-4 text-gray-100 text-sm">
            {/* Address */}
            <li className="flex gap-3">
              <FaMapMarkerAlt className="text-[#00ffd0] mt-1" />
              <span>
                Benito Italy, Meena Wala – Sirsi Rd,
                <br />
                Opp. RTEC Mall, Panchyawala,
                <br />
                Jaipur, Rajasthan – 302021
              </span>
            </li>

            {/* Phone */}
            <li className="flex gap-3 items-center">
              <FaPhoneAlt className="text-[#00ffd0]" />
              <a
                href="tel:9950005552"
                className="hover:text-[#00ffd0] transition underline-offset-4 hover:underline"
              >
                9950005552
              </a>
              <span>/</span>
              <a
                href="tel:8058837913"
                className="hover:text-[#00ffd0] transition underline-offset-4 hover:underline"
              >
                8058837913
              </a>
            </li>

            {/* Email */}
            <li className="flex gap-3 items-center">
              <FaEnvelope className="text-[#00ffd0]" />
              <a
                href="mailto:benitoitalygas@gmail.com"
                className="hover:text-[#00ffd0] transition underline-offset-4 hover:underline"
              >
                benitoitalygas@gmail.com
              </a>
            </li>

            {/* Time */}
            <li className="flex gap-3 items-center">
              <FaClock className="text-[#00ffd0]" />
              9:30 am – 8:00 pm
            </li>
          </ul>

          {/* WhatsApp Form */}
          <div className="space-y-3 pt-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/20 focus:outline-none"
            />

            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={form.mobile}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/20 focus:outline-none"
            />

            <textarea
              name="message"
              rows={3}
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/20 focus:outline-none"
            />

            <button
              onClick={handleSubmit}
              className="bg-linear-to-r from-green-400 to-cyan-400 text-black font-semibold py-2 px-6 rounded-full hover:scale-105 transition"
            >
              Send Message on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
