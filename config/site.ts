export const siteConfig = {
  name: "Mohammed Shabik",
  title: "Mohammed Shabik — Software Engineer & Founder",
  description:
    "Mohammed Shabik is a software engineer and founder building digital products, scalable systems, and modern web experiences.",
  url: "https://muhammadsabik.dev",
  ogImage: "https://muhammadsabik.dev/og.png",
  email: "muhammadsabik.org@gmail.com",
  links: {
    github: "https://github.com/Sabikmuhammad",
    linkedin: "https://www.linkedin.com/in/mohammed-shabik-85a245293/",
    X: "https://x.com/muhammadsabik",
  },
  creator: {
    name: "Mohammed Shabik",
    role: "Software Engineer | Founder",
    bio: "Mohammed Shabik is a software engineer and founder building digital products, scalable systems, and modern web experiences.",
    location: "India",
  },
} as const;

export type SiteConfig = typeof siteConfig;
