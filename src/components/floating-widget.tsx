"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Share2, BookmarkPlus, MessageCircle, ArrowUp } from "lucide-react";

const widgets = [
  { icon: Share2, label: "Share Job" },
  { icon: BookmarkPlus, label: "Save Job" },
  { icon: MessageCircle, label: "Chat" },
  { icon: ArrowUp, label: "Top" },
];

export function FloatingWidget() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
        >
          {widgets.map((widget, i) => (
            <motion.button
              key={widget.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={widget.label === "Top" ? handleTop : undefined}
              className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:bg-[#ff4400] transition-colors group relative"
              aria-label={widget.label}
            >
              <widget.icon className="h-5 w-5" />
              {/* Tooltip */}
              <span className="absolute right-full mr-3 px-2 py-1 bg-black text-white text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {widget.label}
              </span>
            </motion.button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
