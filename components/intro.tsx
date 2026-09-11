"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export function Intro() {
  const [showIntro, setShowIntro] = useState(true);
  const shouldReduceMotion = useReducedMotion();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (sessionStorage.getItem("introShown") || !isHome) {
      sessionStorage.setItem("introShown", "true");
      setShowIntro(false);
      return undefined;
    }

    // Prevent scrolling while intro is active
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setShowIntro(false);
      sessionStorage.setItem("introShown", "true");
      document.body.style.overflow = "";
    }, 1600);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [isHome]);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="intro-overlay fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#000000]"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%", 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          <div className="flex flex-col items-center">
            {/* The Name */}
            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl text-[#FFFFF0] tracking-tight mb-4"
              initial={{ opacity: shouldReduceMotion ? 0 : 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {"Mohammed Shabik".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: shouldReduceMotion ? 0 : index * 0.03,
                    ease: [0.2, 0.65, 0.3, 0.9]
                  }}
                  className="inline-block whitespace-pre"
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            {/* The Subtitle */}
            <motion.p
              className="font-sans text-xs uppercase tracking-[0.3em] text-[#FFFFF0]/70"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: shouldReduceMotion ? 0 : 0.6,
                ease: "easeOut"
              }}
            >
              SOFTWARE ENGINEER
            </motion.p>

            {/* Thin Horizontal Line */}
            <motion.div
              className="mt-6 h-[1px] bg-[#FFFFF0]/20"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: shouldReduceMotion ? 0 : 0.8,
                ease: [0.76, 0, 0.24, 1]
              }}
              style={{ maxWidth: "200px" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
