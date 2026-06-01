"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function RevolutionaryProfile() {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black leading-[1.1] tracking-tight">
              <span className="text-[#ff4400]">Revolutionizing</span>
              <br />
              the job hunt
            </h2>
            <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
              We&apos;re changing how people find careers. Our AI-powered
              platform matches your skills and aspirations with the perfect
              opportunity — no more endless scrolling through irrelevant
              listings.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-gray-50 border border-gray-100 rounded-xl px-5 py-4">
                <div className="text-2xl font-black text-[#ff4400]">94%</div>
                <div className="text-xs text-gray-500 mt-1">Match Rate</div>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl px-5 py-4">
                <div className="text-2xl font-black text-[#ff4400]">3x</div>
                <div className="text-xs text-gray-500 mt-1">Faster Hiring</div>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl px-5 py-4">
                <div className="text-2xl font-black text-[#ff4400]">50K+</div>
                <div className="text-xs text-gray-500 mt-1">Success Stories</div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] max-h-[600px]">
              <Image
                src="/profile-man.png"
                alt="Professional looking toward the future"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
              {/* Overlay grid lines breaking effect */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
