export const siteConfig = {
  name: "Muhammad Sabik",
  title: "Muhammad Sabik — Full-Stack Architect & Founder",
  description:
    "Computer Science Engineer, Full-Stack Architect, and Founder of FrameKart. Building scalable platforms and engineering excellence.",
  url: "https://muhammadsabik.dev",
  ogImage: "https://muhammadsabik.dev/og.png",
  email: "muhammadsabik.org@gmail.com",
  links: {
    github: "https://github.com/Sabikmuhammad",
    linkedin: "https://www.linkedin.com/in/mohammed-shabik-85a245293/",
    X: "https://x.com/muhammadsabik",
  },
  creator: {
    name: "Muhammad Sabik",
    role: "Computer Science Engineer | Full-Stack Architect | Founder",
    bio: "Building FrameKart and engineering scalable platforms. Passionate about clean architecture, performance optimization, and creating impactful products.",
    location: "India",
  },
} as const;

export type SiteConfig = typeof siteConfig;
