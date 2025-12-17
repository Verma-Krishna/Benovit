"use client";
import { useState } from "react";
import Link from "next/link";

export default function About() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      q: "What vehicles are compatible with Benito Italy CNG & LPG kits?",
      a: "Our kits are compatible with most petrol vehicles, including hatchbacks, sedans, SUVs, and commercial vehicles. Contact us to confirm compatibility for your specific model.",
    },
    {
      q: "Will installing a CNG or LPG kit affect my vehicle’s performance?",
      a: "No. Our ECU-controlled systems are designed to maintain smooth engine performance while improving fuel efficiency.",
    },
    {
      q: "Is the installation process safe?",
      a: "Yes. All installations are performed by certified technicians following strict safety and quality guidelines.",
    },
    {
      q: "How much can I save using CNG or LPG?",
      a: "You can save up to 40–50% on fuel costs depending on driving habits and usage.",
    },
    {
      q: "Is there a warranty on Benito Italy kits?",
      a: "Yes. All our CNG and LPG kits come with a comprehensive manufacturer warranty.",
    },
  ];

  return (
    <div className="bg-linear-to-b from-blue-900 to-blue-950 text-white min-h-screen pt-32 pb-20 px-6 md:px-20">

      {/* HERO */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          About <span className="text-teal-400">Benito Italy</span>
        </h1>
        <p className="text-lg text-gray-300">
          Premium CNG & LPG conversion solutions designed for performance,
          efficiency, and sustainability.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto mt-14 space-y-10">

        {/* WHO WE ARE */}
        <section>
          <h2 className="text-2xl font-semibold text-teal-400 mb-3">
            Who We Are
          </h2>
          <p className="text-gray-300 leading-relaxed">
            <strong className="text-white">Benito Italy</strong> is a trusted
            provider of high-quality CNG and LPG conversion kits in India.
            We specialize in delivering fuel-efficient, eco-friendly solutions
            that enhance vehicle performance while reducing operating costs.
          </p>
          <p className="text-gray-300 leading-relaxed mt-3">
            Combining Italian engineering excellence with Indian road conditions,
            our products ensure durability, safety, and consistent performance
            across all driving environments.
          </p>
        </section>

        {/* VISION */}
        <section>
          <h2 className="text-2xl font-semibold text-teal-400 mb-3">
            Our Vision
          </h2>
          <p className="text-gray-300 leading-relaxed">
            To lead the clean energy transition in the automotive industry by
            providing reliable, certified, and high-performance CNG and LPG
            conversion kits.
          </p>
        </section>

        {/* MISSION */}
        <section>
          <h2 className="text-2xl font-semibold text-teal-400 mb-3">
            Our Mission
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Promote sustainable mobility through cleaner fuel alternatives.</li>
            <li>Deliver ICAT-approved, high-quality CNG & LPG kits.</li>
            <li>Ensure professional installation and reliable after-sales service.</li>
            <li>Support India’s vision for energy-efficient transportation.</li>
          </ul>
        </section>

        {/* WHY CHOOSE */}
        <section>
          <h2 className="text-2xl font-semibold text-teal-400 mb-3">
            Why Choose Benito Italy?
          </h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
            <li>✅ ICAT Certified & ISO Compliant Kits</li>
            <li>✅ Save up to 50% on fuel costs</li>
            <li>✅ Eco-friendly & low-emission solutions</li>
            <li>✅ ECU-controlled sequential technology</li>
            <li>✅ Trusted by workshops and fleet operators</li>
            <li>✅ Strong after-sales support network</li>
          </ul>
        </section>

        {/* CERTIFICATIONS */}
        <section>
          <h2 className="text-2xl font-semibold text-teal-400 mb-3">
            Certifications & Compliance
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Our CNG and LPG conversion kits are certified by <strong>ICAT Manesar</strong>
            and comply with <strong>ISO-15500</strong> safety standards.
            Products are approved by various State Transport Authorities across India.
          </p>
        </section>

        {/* TECHNOLOGY */}
        <section>
          <h2 className="text-2xl font-semibold text-teal-400 mb-3">
            Advanced CNG & LPG Technology
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Benito Italy uses ECU-based sequential gas injection systems that
            precisely regulate fuel delivery based on real-time engine data.
            This ensures smoother acceleration, optimal mileage, and reduced
            engine wear.
          </p>
        </section>

        {/* INSTALLATION */}
        <section>
          <h2 className="text-2xl font-semibold text-teal-400 mb-3">
            Installation & After-Sales Support
          </h2>
          <p className="text-gray-300 leading-relaxed">
            All installations are carried out by trained professionals using
            standardized procedures. Our after-sales support includes servicing,
            diagnostics, genuine spare parts, and technical assistance through
            authorized service centers.
          </p>
        </section>

        {/* ENVIRONMENT */}
        <section>
          <h2 className="text-2xl font-semibold text-teal-400 mb-3">
            Commitment to a Greener Future
          </h2>
          <p className="text-gray-300 leading-relaxed">
            By promoting alternative fuels like CNG and LPG, Benito Italy helps
            reduce carbon emissions, fuel expenses, and dependence on petrol and diesel.
          </p>
        </section>

        {/* VEHICLES */}
        <section>
          <h2 className="text-2xl font-semibold text-teal-400 mb-3">
            Vehicles We Serve
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Passenger Cars (Hatchback, Sedan, SUV)</li>
            <li>Commercial Vehicles & Fleet Operators</li>
            <li>Taxi & Ride-Sharing Vehicles</li>
            <li>Corporate & Government Transport</li>
          </ul>
        </section>

        {/* SEO HIDDEN TEXT */}
        <p className="sr-only">
          Benito Italy is a leading provider of CNG kits and LPG kits in India,
          offering ICAT approved conversion kits, professional installation,
          and reliable after-sales support.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <h3 className="text-2xl font-bold mb-2">
          Join the Benito Italy Family
        </h3>
        <p className="text-gray-300 mb-6">
          Experience smarter, cleaner, and more economical driving.
        </p>
        <Link
          href={"/contact"}
          className="inline-block bg-teal-500 hover:bg-teal-400 text-blue-900 font-semibold py-3 px-8 rounded-full transition-all duration-300"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
