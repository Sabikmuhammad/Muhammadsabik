"use client";

import { SOCIAL_LINKS } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function SocialHub() {
  return (
    <div className="space-y-6 pt-12 border-t border-border/30">
      <h2 className="text-sm font-mono tracking-widest uppercase text-foreground">
        Connect with Mohammed Shabik
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SOCIAL_LINKS.filter(link => link.name !== "Email").map((link, index) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Mohammed Shabik on ${link.name}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group flex flex-col justify-between p-6 bg-muted/5 border border-border/30 hover:bg-muted/10 hover:border-border/60 transition-colors rounded-sm min-h-[140px]"
            >
              <div className="flex items-center justify-between">
                <Icon className="w-5 h-5 text-foreground transition-transform group-hover:scale-110" />
                <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{link.name}</p>
                <p className="text-xs text-muted-foreground mt-1">Mohammed Shabik on {link.name}</p>
              </div>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
