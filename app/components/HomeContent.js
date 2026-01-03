"use client";
import React, { useState } from "react";
import Hyperspeed from "./hyperSpeed";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { FaComments } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Link from "next/link";



export default function HomeContent() {

  const [petrolPrice, setPetrolPrice] = useState("");
  const [cngPrice, setCngPrice] = useState("");
  const [mileage, setMileage] = useState("");
  const [dailyRunning, setDailyRunning] = useState("");
  const [results, setResults] = useState({ daily: 0, monthly: 0, yearly: 0 });
  const [hovered, setHovered] = useState(null);
  const [helpOpen, setHelpOpen] = useState(false);
  const [active, setActive] = useState(null);


  const components = [
    { id: "tank", name: "CNG Cylinder", desc: "High-pressure gas storage", x: "18%", y: "22%" },
    { id: "filling", name: "Filling Valve", desc: "Used to refill the tank", x: "5%", y: "32%" },
    { id: "regulator", name: "Pressure Regulator", desc: "Controls gas pressure", x: "57%", y: "54%" },
    { id: "rail", name: "Injector Rail", desc: "Supplies gas to engine", x: "60%", y: "65%" },
    { id: "ecu", name: "ECU", desc: "Controls injection timing", x: "69%", y: "37%" },
    { id: "injector", name: "Injector", desc: "Injects gas", x: "78%", y: "49%" },
  ];

  const products = [
    // Main Product 1
    {
      name: "Injector Rail",
      image: "/products/picture/InjectorRail.webp",
      slug: "Injector-Rail",
    },

    // Related of Product 1
    {
      name: "CNG/LPG Gauge",
      image: "/products/picture/CNG_Gauge.webp",
      slug: "cng-lpg-gauge",
    },
    {
      name: "CNG/LPG Pressure Regulator",
      image: "/products/picture/CNG_Regulator_pressure.webp",
      slug: "cng-lpg-pressure-regulator",
    },
    {
      name: "CNG Pressure Reducer",
      image: "/products/picture/CNGPressureReducer.webp",
      slug: "cng-pressure-reducer",
    },

    // Main Product 2
    {
      name: "ECU",
      image: "/products/picture/ECU.webp",
      slug: "ecu",
    },

    // Related of Product 2
    {
      name: "LPG Valve",
      image: "/products/picture/Lpgvalve.webp",
      slug: "lpg-valve",
    },
    {
      name: "Solenoid Valve",
      image: "/products/picture/Solenoidvalve.webp",
      slug: "solenoid-valve",
    },

    // Main Product 3
    {
      name: "Steel Cube",
      image: "/products/picture/Steelcube.webp",
      slug: "steel-cube",
    },

    // Related of Product 3
    {
      name: "Steel Pipe",
      image: "/products/picture/Steelcube2.webp",
      slug: "steel-pipe",
    },
    {
      name: "Electronic Cylinder Valve",
      image: "/products/picture/ElectronicCylindervalve.webp",
      slug: "electronic-cylinder-valve",
    },
  ];



  const calculateSavings = (e) => {
    e.preventDefault();
    if (!petrolPrice || !cngPrice || !mileage || !dailyRunning) return;

    // Petrol cost per KM
    const petrolCostPerKm = petrolPrice / mileage;
    // Assuming 20% lower mileage on CNG
    const cngMileage = mileage * 0.8;
    const cngCostPerKm = cngPrice / cngMileage;

    const dailySavings = (petrolCostPerKm - cngCostPerKm) * dailyRunning;
    const monthlySavings = dailySavings * 30;
    const yearlySavings = dailySavings * 365;

    setResults({
      daily: dailySavings.toFixed(2),
      monthly: monthlySavings.toFixed(2),
      yearly: yearlySavings.toFixed(2),
    });
  };


  return (
    <>

      <div className="relative w-full h-screen overflow-hidden">
        {/* ✅ Hyperspeed Animation Background */}
        <div className="absolute inset-0 z-0">
          <Hyperspeed
            effectOptions={{
              onSpeedUp: () => { },
              onSlowDown: () => { },
              distortion: "turbulentDistortion",
              length: 400,
              roadWidth: 15,
              islandWidth: 4,
              lanesPerRoad: 4,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [400 * 0.03, 400 * 0.2],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                roadColor: 0x0a0a0a,
                islandColor: 0x1a1a1a,
                background: 0x0d1a2d,
                shoulderLines: 0x4da8da,
                brokenLines: 0x66ccff,
                leftCars: [0x4da8da, 0x357abd, 0x66ccff],
                rightCars: [0xff6b35, 0xff8c42, 0xffa260],
                sticks: 0x4da8da,
              },
            }}
          />
        </div>

        {/* ✅ Hero Section (Foreground Content with Blur) */}
        <section className="relative z-50 flex flex-col items-center justify-center text-center h-full px-6 pt-16">
          {/* Frosted Glass Background for Soft Blur */}
          <div className="absolute inset-0 bg-[rgba(13,26,45,0.35)] backdrop-blur-md z-[-1]" />

          <h1
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-4xl drop-shadow-lg"
            style={{ textShadow: "0 2px 20px rgba(0, 0, 0, 0.5)" }}
          >
            Drive into the Future with{" "}
            <span className="bg-linear-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Benito Italy
            </span>{" "}
            CNG & LPG Kits
          </h1>

          <p className="text-gray-200 mt-4 text-lg md:text-xl max-w-2xl">
            Experience power, performance, and sustainability — all in one smart
            upgrade.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
            <Link href={"/contact"}  className="px-8 py-3 rounded-full text-lg font-semibold bg-white text-gray-900 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
              Get Started
            </Link>
            <Link href={"/products"} className="px-8 py-3 rounded-full text-lg font-semibold border border-gray-400 text-white bg-transparent hover:bg-linear-to-r hover:from-green-500 hover:to-cyan-500 hover:border-transparent transition-all duration-300">
              Learn More
            </Link>
          </div>
        </section>
      </div>

      <section className="py-20 bg-linear-to-br from-blue-900 via-blue-800 to-blue-950 text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-green-400 to-cyan-400">
          Our Products
        </h2>
        <p className="text-white/70 mt-2 mb-10">Drive with Innovation & Safety</p>

        <div className="relative px-6 md:px-20">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            loop
            className="!pb-10"
          >
            {products.map((item, index) => (
              <SwiperSlide key={index}>
                <Link href={`/products/${item.slug}`}>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl hover:shadow-green-400/20 transition-all duration-500 hover:scale-[1.05]">
                    <div className="flex justify-center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={200}
                        height={200}
                        className="object-contain rounded-xl"
                      />
                    </div>
                    <h3 className="mt-4 text-base md:text-md font-semibold text-transparent bg-clip-text bg-linear-to-r from-green-400 to-cyan-400">
                      {item.name}
                    </h3>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>



      <section className="w-full py-16 bg-[#0063B2]">
        {/* CONTENT WRAPPER */}
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Discover The Power of Excellence
          </h2>

          <p className="text-white/80 mt-3 text-sm md:text-base">
            Advanced CNG Technology engineered for performance, safety, and efficiency
          </p>

          {/* TAG LINE */}
          <p className="mt-2 text-sm font-medium text-cyan-300">
            CNG | Benito Italy CNG Kits
          </p>

          {/* FEATURE HIGHLIGHTS */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="px-4 py-1 rounded-full text-xs font-semibold bg-white/10 text-white">
              ICAT Certified
            </span>
            <span className="px-4 py-1 rounded-full text-xs font-semibold bg-white/10 text-white">
              Euro IV OBD
            </span>
            <span className="px-4 py-1 rounded-full text-xs font-semibold bg-white/10 text-white">
              High Safety Standards
            </span>
            <span className="px-4 py-1 rounded-full text-xs font-semibold bg-white/10 text-white">
              Optimized Performance
            </span>
          </div>
        </div>

        {/* IMAGE + HOTSPOTS (UNCHANGED) */}
        <div className="mt-12 flex justify-center">
          <div className="relative w-[90%] max-w-5xl aspect-[16/9]">
            <Image
              src="/cng.png"
              alt="CNG System"
              fill
              priority
              className="object-cover select-none"
            />

            {/* HOTSPOTS — DO NOT TOUCH */}
            {components.map((c) => (
              <div
                key={c.id}
                style={{ left: c.x, top: c.y }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
              >
                <div
                  onClick={() => setActive(active === c.id ? null : c.id)}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-blue-400 rounded-full border-2 border-white shadow-lg animate-pulse cursor-pointer"
                />

                {active === c.id && (
                  <div className="absolute left-6 -top-4 w-56 bg-gradient-to-br from-blue-700 to-cyan-600 text-white text-sm p-4 rounded-xl shadow-xl">
                    <strong>{c.name}</strong>
                    <p className="text-white/90">{c.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="w-full py-16 bg-linear-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="max-w-4xl mx-auto p-8 bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl">
          <h2 className="text-center text-3xl font-extrabold mb-2 text-transparent bg-clip-text bg-linear-to-r from-green-400 to-cyan-400">
            CNG Saving Calculator
          </h2>
          <p className="text-center text-gray-300 mb-10">
            Understand how much you can save by switching to CNG on your vehicle.
          </p>

          <form
            onSubmit={calculateSavings}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Petrol */}
            <div>
              <label className="block text-sm text-gray-200 mb-2">
                Petrol (Rs./Litre)*
              </label>
              <input
                type="number"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter petrol price"
                value={petrolPrice}
                onChange={(e) => setPetrolPrice(e.target.value)}
              />
            </div>

            {/* CNG */}
            <div>
              <label className="block text-sm text-gray-200 mb-2">
                CNG (Rs./Kg)*
              </label>
              <input
                type="number"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter CNG price"
                value={cngPrice}
                onChange={(e) => setCngPrice(e.target.value)}
              />
            </div>

            {/* Mileage */}
            <div>
              <label className="block text-sm text-gray-200 mb-2">
                Mileage of Your Car (Km/Litre)*
              </label>
              <input
                type="number"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Vehicle mileage"
                value={mileage}
                onChange={(e) => setMileage(e.target.value)}
              />
            </div>

            {/* Daily Running */}
            <div>
              <label className="block text-sm text-gray-200 mb-2">
                Daily Running (KMs/day)*
              </label>
              <input
                type="number"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter daily running"
                value={dailyRunning}
                onChange={(e) => setDailyRunning(e.target.value)}
              />
            </div>

            {/* Button */}
            <div className="md:col-span-2 text-center mt-4">
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-linear-to-r from-green-400 to-cyan-400 text-black font-semibold hover:opacity-90 transition-all"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Results */}
          <div className="mt-10 space-y-4">
            <div className="flex justify-between p-4 bg-white/10 rounded-lg">
              <span className="text-green-400 font-semibold">✓ DAILY SAVINGS</span>
              <span>₹ {results.daily}</span>
            </div>
            <div className="flex justify-between p-4 bg-white/10 rounded-lg">
              <span className="text-green-400 font-semibold">✓ MONTHLY SAVINGS</span>
              <span>₹ {results.monthly}</span>
            </div>
            <div className="flex justify-between p-4 bg-white/10 rounded-lg">
              <span className="text-green-400 font-semibold">✓ YEARLY SAVINGS</span>
              <span>₹ {results.yearly}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Help Button */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 animate-pulse">
        {/* Help Menu (Visible when open) */}
        {helpOpen && (
          <div className="flex flex-col items-end gap-2 mb-2 transition-all">
            <Link
              href={"tel:+911234567890"}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full shadow-lg backdrop-blur-md border border-white/20 transition-all duration-300"
            >
              📞 Call Us
            </Link>
            <Link
              href={"https://wa.me/911234567890"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300"
            >
              💬 Message Us
            </Link>
            {/* <a
              href="#contact"
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300"
            >
              💭 Message Us
            </a> */}
          </div>
        )}

        {/* Floating Toggle Button */}
        <button
          onClick={() => setHelpOpen(!helpOpen)}
          className="w-14 h-14 rounded-full bg-linear-to-r from-green-400 to-cyan-500 text-white shadow-lg hover:scale-105 transition-transform flex items-center justify-center"
        >
          {helpOpen ? (
            <IoClose size={26} className="text-white " />
          ) : (
            <FaComments size={28} className="text-white" />
          )}
        </button>
      </div>


    </>
  );
}
