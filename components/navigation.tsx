"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { useScrollProgress } from "@/hooks";

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollProgress();

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm" : "bg-transparent"
        )}
      >
        <nav className="container flex h-16 items-center justify-between">
          {/* Logo / Monogram */}
          <Link href="/" className="group relative flex items-center justify-center w-auto px-4 h-10 overflow-hidden rounded-sm bg-black text-white transition-transform duration-500 hover:scale-[1.02]">
            <span className="font-display tracking-widest relative z-10 translate-x-[1px]">Mohammed Shabik</span>
            <div className="absolute inset-0 bg-muted/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive =
                pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative text-sm font-medium tracking-wide transition-colors duration-300",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator-desktop"
                      className="absolute -bottom-1 left-0 right-0 h-[1px] bg-foreground"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              className="relative z-50 md:hidden p-2 -mr-2 text-foreground focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 flex flex-col items-end gap-1.5">
                <motion.span 
                  animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className="h-[1px] w-full bg-foreground block transition-transform origin-center" 
                />
                <motion.span 
                  animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="h-[1px] w-4/5 bg-foreground block transition-opacity" 
                />
                <motion.span 
                  animate={mobileMenuOpen ? { rotate: -45, y: -7, width: "100%" } : { rotate: 0, y: 0, width: "60%" }}
                  className="h-[1px] bg-foreground block transition-all origin-center" 
                />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden flex flex-col justify-center"
          >
            <nav className="flex flex-col items-center space-y-8 p-6">
              {NAVIGATION_ITEMS.map((item, index) => {
                const isActive =
                  pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={cn(
                        "text-3xl font-display tracking-tight transition-colors",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Mobile menu footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-10 left-0 right-0 flex flex-col items-center"
            >
              <p className="text-xs font-medium text-foreground tracking-widest uppercase">Mohammed Shabik</p>
              <p className="mt-2 text-xs text-muted-foreground">Software Engineer</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
