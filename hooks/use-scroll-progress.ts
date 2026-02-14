"use client";

import { useState, useEffect } from "react";

interface ScrollProgress {
  progress: number;
  isScrolled: boolean;
  direction: "up" | "down" | null;
}

export function useScrollProgress(): ScrollProgress {
  const [scrollProgress, setScrollProgress] = useState<ScrollProgress>({
    progress: 0,
    isScrolled: false,
    direction: null,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / scrollHeight) * 100;
      const newDirection = window.scrollY > lastScrollY ? "down" : "up";

      setScrollProgress({
        progress: Math.min(currentProgress, 100),
        isScrolled: window.scrollY > 50,
        direction: window.scrollY === lastScrollY ? null : newDirection,
      });

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    updateScrollProgress(); // Initial call

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return scrollProgress;
}
