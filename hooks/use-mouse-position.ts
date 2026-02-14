"use client";

import { useState, useEffect } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
}

// Hook to get mouse position relative to an element
export function useMousePositionRelative(
  elementRef: React.RefObject<HTMLElement>
): MousePosition & { isInside: boolean } {
  const [position, setPosition] = useState({ x: 0, y: 0, isInside: false });

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const updatePosition = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const isInside = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;

      setPosition({ x, y, isInside });
    };

    const handleMouseLeave = () => {
      setPosition((prev) => ({ ...prev, isInside: false }));
    };

    element.addEventListener("mousemove", updatePosition);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", updatePosition);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [elementRef]);

  return position;
}
