"use client";

import { motion } from "framer-motion";
import { OrangeStar } from "@/components/orange-star";

export function ScrutinizedJobs() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-center">
          {/* Left Column - Description + Star */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-start gap-8"
          >
            <p className="text-gray-600 text-base leading-relaxed">
              Every listing on our platform goes through a rigorous review
              process. We ensure transparency, accuracy, and quality — so you
              only see the best opportunities from verified employers.
            </p>
            <OrangeStar size={140} className="self-center md:self-center" />
          </motion.div>

          {/* Right Column - Heading */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-2"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black leading-[1.05] tracking-tight">
              Scrutinized Job Listings.{" "}
              <span className="text-[#ff4400]">Top Profile Companies.</span>
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
