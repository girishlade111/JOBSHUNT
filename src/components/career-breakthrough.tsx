"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Building2, Star, ArrowUpRight } from "lucide-react";

const companies = ["HubSpot", "Google", "Airbnb", "Stripe", "Notion"];

const jobCards = [
  {
    title: "Senior Frontend Developer",
    company: "HubSpot",
    location: "Remote",
    salary: "$140K - $180K",
    tags: ["React", "TypeScript", "Remote"],
  },
  {
    title: "Product Designer",
    company: "Google",
    location: "San Francisco, CA",
    salary: "$130K - $170K",
    tags: ["Figma", "UX Research", "Hybrid"],
  },
  {
    title: "Data Engineer",
    company: "Airbnb",
    location: "Remote",
    salary: "$150K - $200K",
    tags: ["Python", "SQL", "Remote"],
  },
];

export function CareerBreakthrough() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Vertical blurred stripes background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-100" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          background:
            "repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black leading-tight tracking-tight">
            Career{" "}
            <span className="text-[#ff4400]">Breakthrough</span>
          </h2>
          <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
            Your dream job is just a search away. Experience the most intuitive job discovery platform.
          </p>
        </motion.div>

        {/* Browser Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateY: -5 }}
          whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Browser Chrome */}
            <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-3">
              {/* Dots */}
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              {/* URL Bar */}
              <div className="flex-1 bg-white rounded-lg px-4 py-1.5 text-xs text-gray-400 font-mono border border-gray-200">
                jobshunt.com/dashboard
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-4 sm:p-6">
              {/* Mini Navbar */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-black text-black">
                  JOB<span className="text-[#ff4400]">SHUNT</span>
                </span>
                <div className="flex gap-4 text-xs text-gray-400">
                  <span>Dashboard</span>
                  <span>Applications</span>
                  <span>Profile</span>
                </div>
              </div>

              {/* Search Bar */}
              <div className="flex gap-3 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <div className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-3 text-sm text-gray-400">
                    Search for jobs, companies...
                  </div>
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <div className="bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-3 text-sm text-gray-400 w-40">
                    Location
                  </div>
                </div>
              </div>

              {/* Company Logos */}
              <div className="flex flex-wrap gap-4 mb-6">
                {companies.map((company) => (
                  <div
                    key={company}
                    className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-lg px-3 py-2"
                  >
                    <Building2 className="h-4 w-4 text-[#ff4400]" />
                    <span className="text-xs font-medium text-gray-700">
                      {company}
                    </span>
                  </div>
                ))}
              </div>

              {/* Job Cards */}
              <div className="space-y-3">
                {jobCards.map((job, i) => (
                  <motion.div
                    key={job.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-xl p-4 hover:border-[#ff4400]/30 hover:bg-[#ff4400]/5 transition-all group cursor-pointer"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-black truncate">
                          {job.title}
                        </h4>
                      </div>
                      <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Building2 className="h-3 w-3" />
                          {job.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </span>
                      </div>
                      <div className="flex gap-2 mt-2">
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 ml-4">
                      <span className="text-xs font-semibold text-black">
                        {job.salary}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-[#ff4400] transition-colors" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
