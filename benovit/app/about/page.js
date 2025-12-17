"use client";
import { useState } from "react";

export default function About() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      q: "What vehicles are compatible with Benito Italy CNG & LPG kits?",
      a: "Our kits are compatible with most petrol vehicles, including hatchbacks, sedans, SUVs, and commercial vehicles. Contact us to confirm compatibility for your specific model.",
    },
    {
      q: "Will installing a CNG or LPG kit affect my vehicle’s performance?",
      a: "Not at all! Our kits are engineered to maintain performance and power while improving fuel economy.",
    },
    {
      q: "Is the installation process safe?",
      a: "Yes, every installation is performed by certified professionals following strict safety and quality standards.",
    },
    {
      q: "How much can I save using CNG or LPG?",
      a: "You can save up to 40–50% on your monthly fuel costs depending on your driving pattern and distance.",
    },
    {
      q: "Where can I get service and maintenance for the kit?",
      a: "We offer full service and maintenance support through our authorized partners and service centers.",
    },
    {
      q: "Is there a warranty on Benito Italy kits?",
      a: "Yes, all our kits come with a comprehensive warranty covering both parts and performance.",
    },
  ];

  return (
    <div className="bg-linear-to-b from-blue-900 to-blue-950 text-white min-h-screen pt-30 pb-16 px-6 md:px-20">
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
          About <span className="text-teal-400">Benito Italy</span>
        </h1>
        <p className="text-lg text-gray-300">
          Driving sustainability, power, and performance through advanced CNG &
          LPG conversion technology.
        </p>
      </div>

      {/* About Content */}
      <div className="max-w-5xl mx-auto mt-12 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-teal-400 mb-3">
            Who We Are
          </h2>
          <p className="text-gray-300 leading-relaxed">
            At <span className="text-white font-medium">Benito Italy</span>, we
            are redefining how vehicles perform with cutting-edge CNG and LPG
            conversion kits. Our mission is to make driving smarter, cleaner,
            and more efficient for everyone.
          </p>
          <p className="text-gray-300 leading-relaxed mt-3">
            With a blend of Italian innovation and Indian practicality, we offer
            reliable gas conversion solutions that maximize fuel efficiency,
            reduce emissions, and boost engine performance — ensuring a seamless
            driving experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-teal-400 mb-3">
            Our Vision
          </h2>
          <p className="text-gray-300 leading-relaxed">
            To lead the clean energy revolution in the automotive industry by
            providing eco-friendly, high-performance conversion kits that help
            drivers save fuel and protect the planet.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-teal-400 mb-3">
            Our Mission
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Promote sustainable mobility through cleaner fuel alternatives.</li>
            <li>Deliver certified, high-quality, and durable gas conversion kits.</li>
            <li>Provide excellent installation, service, and after-sales support.</li>
            <li>Contribute to a greener and more energy-efficient future.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-teal-400 mb-3">
            Why Choose Benito Italy?
          </h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
            <li>✅ Premium Quality Kits — built to international standards.</li>
            <li>✅ Fuel Efficiency — save up to 50% on running costs.</li>
            <li>✅ Eco-Friendly — reduce carbon emissions.</li>
            <li>✅ Expert Installation — trained professionals for every setup.</li>
            <li>✅ Proven Performance — trusted by vehicle owners and workshops.</li>
            <li>✅ Reliable Support — responsive after-sales service.</li>
          </ul>
        </section>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-center text-teal-400 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-blue-800/40 backdrop-blur-sm rounded-xl p-5 border border-blue-700"
            >
              <button
                className="flex justify-between w-full text-left text-white font-medium"
                onClick={() =>
                  setOpenFAQ(openFAQ === index ? null : index)
                }
              >
                {item.q}
                <span>{openFAQ === index ? "−" : "+"}</span>
              </button>
              {openFAQ === index && (
                <p className="mt-3 text-gray-300">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center mt-20">
        <h3 className="text-2xl font-bold mb-2 text-white">
          Join the Benito Italy Family
        </h3>
        <p className="text-gray-300 mb-6">
          Experience the future of driving — smarter, cleaner, and more economical.
        </p>
        <a
          href="/contact"
          className="inline-block bg-teal-500 hover:bg-teal-400 text-blue-900 font-semibold py-3 px-8 rounded-full transition-all duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
