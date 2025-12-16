"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "../products/data";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

export default function ProductsGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // 👉 Arrow animation controlled by CARD hover
  const arrowVariants = {
    initial: { x: 0 },
    hover: {
      x: 10,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // 👉 Highlight sweep animation
  const highlightVariants = {
    initial: { x: "-100%" },
    hover: {
      x: "100%",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section className="bg-linear-to-br from-[#0b2a47] via-[#0b3e58] to-[#008080] pt-28 pb-20 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-teal-300"
        >
          Our CNG & LPG Components
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-gray-200 max-w-3xl mx-auto mb-14"
        >
          Premium, reliable and performance-driven CNG & LPG components designed
          for modern vehicles.
        </motion.p>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
        >
          {products.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover="hover"      // ⭐ IMPORTANT
              initial="initial"
              className="relative"
            >
              <Link
                href={`/products/${item.slug}`}
                className="group relative block bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden hover:border-teal-400 transition-all duration-300"
              >
                {/* Highlight sweep */}
                <motion.span
                  variants={highlightVariants}
                  className="pointer-events-none absolute inset-0 bg-linear-to-r 
                             from-transparent via-white/10 to-transparent"
                />

                {/* Image */}
                <div className="overflow-hidden rounded-t-2xl bg-white/5">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={300}
                      className="object-contain w-full h-56 p-6"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-5 text-center border-t border-white/20 relative z-10">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-200 line-clamp-3">
                    {item.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-4 flex items-center justify-center gap-2 text-teal-300 font-medium">
                    <span className="group-hover:text-teal-200 transition">
                      View Details
                    </span>

                    {/* ✅ Arrow moves when CARD is hovered */}
                    <motion.span
                      variants={arrowVariants}
                      className="text-lg"
                    >
                      <HiArrowRight />
                    </motion.span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
