"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = ["Find Jobs", "Companies", "Salaries", "Resources"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              JOB<span className="text-[#ff4400]">SHUNT</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm text-white/80 hover:text-white transition-colors font-medium"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="text-sm text-white/70 hover:text-white transition-colors font-medium"
            >
              Sign In
            </a>
            <Button className="bg-white text-[#ff4400] hover:bg-white/90 font-semibold rounded-full px-6 h-10 text-sm">
              Post a Job
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10"
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="block text-white/80 hover:text-white py-2 text-sm font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 space-y-3">
              <a
                href="#"
                className="block text-white/70 hover:text-white py-2 text-sm font-medium"
              >
                Sign In
              </a>
              <Button className="w-full bg-white text-[#ff4400] hover:bg-white/90 font-semibold rounded-full h-10">
                Post a Job
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
