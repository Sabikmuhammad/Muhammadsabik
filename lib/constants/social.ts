import { Github, Linkedin, Mail, X, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SocialLink } from "@/lib/types";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    href: siteConfig.links.github,
    icon: Github,
    username: "muhammadsabik",
  },
  {
    name: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: Linkedin,
    username: "muhammadsabik",
  },
  {
    name: "X",
    href: siteConfig.links.X,
    icon: X,
    username: "@muhammadsabik",
  },
  {
    name: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    username: siteConfig.email,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/7259788138",
    icon: MessageCircle,
    username: "+91 7259 788 138",
  },
];
