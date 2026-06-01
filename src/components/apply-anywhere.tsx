"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ApplyAnywhere() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
          {/* Left Column - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black leading-[1.1] tracking-tight">
              Apply From{" "}
              <span className="text-[#ff4400]">Anywhere</span>{" "}
              Today.{" "}
              <span className="text-[#ff4400]">Work Globally.</span>
            </h2>
          </motion.div>

          {/* Right Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-6 pt-2"
          >
            <p className="text-gray-600 text-base leading-relaxed">
              Easily connect with global opportunities to find the perfect role.
              Work from anywhere and make an impact. Our platform connects talent
              with companies that value flexibility and remote-first cultures.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-sm font-semibold text-black hover:text-[#ff4400] transition-colors group"
            >
              Next Steps
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
