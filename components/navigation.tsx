"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          isScrolled ? "glass border-b shadow-sm" : "bg-background/60 backdrop-blur-sm"
        )}
      >
        <nav className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group relative text-xl font-bold tracking-tight">
            <span className="relative z-10">MS</span>
            <motion.div
              className="absolute -inset-2 -z-0 rounded-lg bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100"
              layoutId="logo-bg"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive =
                pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  )}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileMenuOpen ? "close" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
              onClick={closeMobileMenu}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="glass fixed bottom-0 right-0 top-16 z-40 w-full max-w-sm border-l md:hidden"
            >
              <nav className="flex flex-col space-y-1 p-6">
                {NAVIGATION_ITEMS.map((item, index) => {
                  const isActive =
                    pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={cn(
                          "block rounded-lg px-4 py-3 text-lg font-medium transition-all",
                          isActive
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "text-muted-foreground hover:bg-accent hover:text-foreground"
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
                transition={{ delay: 0.3 }}
                className="absolute bottom-6 left-6 right-6 border-t pt-6"
              >
                <p className="text-center text-sm text-muted-foreground">Muhammad Sabik</p>
                <p className="mt-1 text-center text-xs text-muted-foreground">
                  Full-Stack Architect
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
