"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Focus, Briefcase, Users, TrendingUp, MapPin } from "lucide-react";

export function DarkTabsSection() {
  const tags = ["Remote Jobs", "Tech Startups", "Marketing", "Reddit", "Graphic Design"];

  return (
    <section className="py-16 sm:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="bg-[#18181b] rounded-2xl p-8 sm:p-10 lg:p-12 relative overflow-hidden min-h-[420px] flex flex-col justify-between"
          >
            {/* Focus Ring Graphic */}
            <div className="absolute top-8 right-8 opacity-10">
              <Focus size={160} className="text-white" />
            </div>

            <div className="relative z-10">
              {/* Side labels */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Talent", "Recruiter", "Career", "Remote Jobs"].map((label) => (
                  <span
                    key={label}
                    className="text-xs font-medium text-white/40 bg-white/5 px-3 py-1.5 rounded-full border border-white/10"
                  >
                    {label}
                  </span>
                ))}
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight max-w-sm">
                The best jobs beyond borders.
              </h3>
            </div>

            <div className="relative z-10 flex items-end justify-between mt-8">
              <Button className="bg-white text-black hover:bg-white/90 font-semibold rounded-full px-6 group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-[#18181b] rounded-2xl p-8 sm:p-10 lg:p-12 relative overflow-hidden min-h-[420px] flex flex-col justify-between"
          >
            {/* Globe Grid Graphic */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
              <div className="relative">
                <Globe size={320} className="text-white" />
                {/* Grid lines */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-white" />
                  <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white" />
                </div>
              </div>
            </div>

            {/* Floating tags */}
            <div className="relative z-10 flex flex-wrap gap-2 mb-8">
              {tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="text-xs font-medium text-white/70 bg-white/10 px-4 py-2 rounded-full border border-white/15 backdrop-blur-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight max-w-sm">
                The best jobs to advance your career.
              </h3>
            </div>

            {/* Career stats */}
            <div className="relative z-10 flex gap-6 mt-8">
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-[#ff4400]" />
                <span className="text-xs text-white/50">8,500+ Jobs</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-[#ff4400]" />
                <span className="text-xs text-white/50">2,300+ Companies</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#ff4400]" />
                <span className="text-xs text-white/50">150+ Countries</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
