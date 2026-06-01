"use client";

import { motion } from "framer-motion";
import { OrangeStar } from "@/components/orange-star";

const roles = [
  { title: "Product Engineer", salary: "$120K - $180K", tag: "Engineering" },
  { title: "Frontend Developer", salary: "$100K - $150K", tag: "Development" },
  { title: "Data Scientist", salary: "$130K - $190K", tag: "Analytics" },
  { title: "UX Designer", salary: "$95K - $140K", tag: "Design" },
];

export function InDemandRoles() {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black leading-tight tracking-tight">
            In-Demand Roles From the
            <br />
            <span className="text-[#ff4400]">Best Recruiters.</span>
          </h2>
        </motion.div>

        {/* Cards Container */}
        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0">
          {/* Card 1 - Slightly rotated */}
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -6 }}
            whileInView={{ opacity: 1, x: 0, rotate: -3 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            className="bg-[#18181b] rounded-2xl p-6 sm:p-8 w-full sm:w-[320px] shadow-2xl z-20 cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-medium text-[#ff4400] bg-[#ff4400]/10 px-3 py-1 rounded-full">
                {roles[0].tag}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
              {roles[0].title}
            </h3>
            <p className="text-white/50 text-sm">{roles[0].salary}</p>
            <div className="flex items-center gap-2 mt-4">
              <div className="flex -space-x-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full bg-white/10 border-2 border-[#18181b]"
                  />
                ))}
              </div>
              <span className="text-xs text-white/40">12 applications</span>
            </div>
          </motion.div>

          {/* Card 2 - Slightly rotated opposite */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 6 }}
            whileInView={{ opacity: 1, x: 0, rotate: 3 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            className="bg-[#18181b] rounded-2xl p-6 sm:p-8 w-full sm:w-[320px] shadow-2xl z-20 sm:-ml-8 sm:mt-12 cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-medium text-[#ff4400] bg-[#ff4400]/10 px-3 py-1 rounded-full">
                {roles[1].tag}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
              {roles[1].title}
            </h3>
            <p className="text-white/50 text-sm">{roles[1].salary}</p>
            <div className="flex items-center gap-2 mt-4">
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full bg-white/10 border-2 border-[#18181b]"
                  />
                ))}
              </div>
              <span className="text-xs text-white/40">24 applications</span>
            </div>
          </motion.div>

          {/* Card 3 - Small background card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#ff4400]/5 border border-[#ff4400]/20 rounded-2xl p-6 sm:p-8 w-full sm:w-[320px] shadow-lg z-10 sm:-ml-6 sm:mt-20 cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-medium text-[#ff4400] bg-[#ff4400]/10 px-3 py-1 rounded-full">
                {roles[2].tag}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-black mb-2">
              {roles[2].title}
            </h3>
            <p className="text-gray-500 text-sm">{roles[2].salary}</p>
          </motion.div>
        </div>

        {/* Star Logo Behind */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.08, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
        >
          <OrangeStar size={400} />
        </motion.div>
      </div>
    </section>
  );
}
