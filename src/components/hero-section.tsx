"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Striped Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "repeating-linear-gradient(90deg, #ff4400 0px, #ff4400 18px, transparent 18px, transparent 36px)",
        }}
      />
      {/* Dark overlay to soften stripes */}
      <div className="absolute inset-0 z-[1] bg-black/70" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight max-w-5xl mx-auto">
            Job Search Ends.
            <br />
            New Role{" "}
            <span className="text-[#ff4400]">Begins!</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 sm:mt-8 text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed tracking-wide"
        >
          Start your search for thousands of active jobs from top companies
          worldwide. Discover the role that matches your ambition and skills.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 sm:mt-10"
        >
          <Button
            size="lg"
            className="bg-white text-[#ff4400] hover:bg-white/90 font-bold rounded-full px-10 h-14 text-base shadow-2xl group"
          >
            Find Jobs
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-16"
        >
          {[
            { value: "10K+", label: "Active Jobs" },
            { value: "500+", label: "Companies" },
            { value: "98%", label: "Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-white">
                {stat.value}
              </div>
              <div className="text-sm text-white/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom wave/gradient */}
      <div className="relative z-10 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
