import { LucideIcon } from "lucide-react";

// Common types
export interface Highlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
  username?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  icon: LucideIcon;
}

export interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  category: string;
  tags: string[];
  featured?: boolean;
  demo?: string;
  github?: string;
  metrics: {
    [key: string]: string;
  };
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  description: string;
  experience: string[];
}

// Animation variants type
export type AnimationVariant = {
  hidden: object;
  visible: object;
};

// Navigation item
export interface NavItem {
  name: string;
  href: string;
}
