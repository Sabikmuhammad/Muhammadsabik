import { Briefcase, GraduationCap, Heart, Target } from "lucide-react";
import { TimelineItem, Value } from "@/lib/types";

export const TIMELINE: TimelineItem[] = [
  {
    year: "2024",
    title: "Founder & CEO",
    company: "FrameKart",
    description:
      "Building a revolutionary platform for custom frame solutions. Leading product strategy, engineering, and growth.",
    icon: Briefcase,
  },
  {
    year: "2023",
    title: "Senior Full-Stack Engineer",
    company: "Tech Innovators Inc.",
    description:
      "Architected microservices platform handling 10M+ requests/day. Led team of 5 engineers.",
    icon: Briefcase,
  },
  {
    year: "2021",
    title: "Full-Stack Developer",
    company: "Digital Solutions Ltd.",
    description:
      "Developed enterprise applications using React, Node.js, and AWS. Reduced deployment time by 60%.",
    icon: Briefcase,
  },
  {
    year: "2020",
    title: "Computer Science Engineering",
    company: "University",
    description: "Bachelor's degree with focus on Software Engineering and Distributed Systems.",
    icon: GraduationCap,
  },
];

export const VALUES: Value[] = [
  {
    icon: Target,
    title: "Excellence",
    description: "Obsessed with craft. Every line of code matters. Every user interaction counts.",
  },
  {
    icon: Heart,
    title: "Impact",
    description: "Building products that solve real problems and create meaningful value.",
  },
  {
    icon: Briefcase,
    title: "Ownership",
    description: "Taking full responsibility from concept to deployment and beyond.",
  },
];
