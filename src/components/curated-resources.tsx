"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import Image from "next/image";

const videos = [
  {
    title: "Getting Started with Job Hunt",
    duration: "5:32",
    thumbnail: "/office-collab.png",
  },
  {
    title: "Mastering Your Profile",
    duration: "8:15",
    thumbnail: "/cafe-workspace.png",
  },
];

const caseNotes = [
  {
    title: "From Freelancer to Full-Time",
    description: "How Sarah landed her dream role at a top tech startup after years of freelancing.",
    image: "/cafe-workspace.png",
  },
  {
    title: "Career Pivot Success",
    description: "Michael transitioned from finance to product design with the right opportunity.",
    image: "/office-collab.png",
  },
  {
    title: "Remote Work Revolution",
    description: "How companies are embracing remote talent and why it matters for your career.",
    image: "/cafe-workspace.png",
  },
];

export function CuratedResources() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black leading-tight tracking-tight">
            Curated{" "}
            <span className="text-[#ff4400]">Resources</span>
          </h2>
          <p className="mt-4 text-gray-500 text-base sm:text-lg max-w-xl">
            Guides, videos, and stories to help you navigate your career journey.
          </p>
        </motion.div>

        {/* Video Resources */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {videos.map((video, i) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="h-6 w-6 text-[#ff4400] ml-1" fill="#ff4400" />
                  </div>
                </div>
                {/* Duration badge */}
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded-md">
                  {video.duration}
                </div>
              </div>
              <h3 className="mt-4 text-lg font-bold text-black group-hover:text-[#ff4400] transition-colors">
                {video.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Case Notes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {caseNotes.map((note, i) => (
            <motion.div
              key={note.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={note.image}
                  alt={note.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-4">
                <h4 className="text-base font-bold text-black group-hover:text-[#ff4400] transition-colors">
                  {note.title}
                </h4>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {note.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-xs font-semibold text-[#ff4400] mt-3 group/link"
                >
                  Read More
                  <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
