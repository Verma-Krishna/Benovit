"use client";

import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaLeaf,
  FaCogs,
  FaGasPump,
  FaCertificate,
  FaTools,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt />,
    title: "Advanced Safety Standards",
    description:
      "Built with high-pressure tested components, certified valves, and intelligent ECU systems to ensure maximum on-road safety.",
  },
  {
    icon: <FaGasPump />,
    title: "Superior Fuel Efficiency",
    description:
      "Optimized gas injection technology delivers excellent mileage without compromising engine performance.",
  },
  {
    icon: <FaLeaf />,
    title: "Eco-Friendly Technology",
    description:
      "Reduce emissions and contribute to a cleaner environment with our CNG & LPG fuel solutions.",
  },
  {
    icon: <FaCogs />,
    title: "Precision Engineering",
    description:
      "Designed with Italian engineering expertise to ensure smooth driving and long-lasting reliability.",
  },
  {
    icon: <FaCertificate />,
    title: "Certified & Approved",
    description:
      "ICAT certified and compliant with government regulations for complete peace of mind.",
  },
  {
    icon: <FaTools />,
    title: "Easy Installation & Support",
    description:
      "Quick installation with professional support and after-sales assistance from trained experts.",
  },
];

/* ✅ Motion Variants (LIGHT & STABLE) */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      ease: "easeOut",
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function FeatureSection() {
  return (
    <section className="relative w-full py-20 bg-linear-to-br from-blue-900 via-blue-800 to-blue-950">
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-green-400 to-cyan-400"
        >
          Why Choose Benito Italy
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-4 text-white/70 max-w-2xl mx-auto"
        >
          Premium CNG & LPG solutions engineered for performance, safety, and
          sustainability.
        </motion.p>

        {/* Feature Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((itemData, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-cyan-400/20 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-linear-to-r from-green-400 to-cyan-400 text-black text-2xl transition-transform duration-300 group-hover:scale-110">
                {itemData.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-300 transition-colors">
                {itemData.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/80 leading-relaxed">
                {itemData.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
