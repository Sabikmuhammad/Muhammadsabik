import { Metadata } from "next";
import { AboutClient } from "./about-client";

export const metadata: Metadata = {
  title: "About Mohammed Shabik — Software Engineer",
  description: "Mohammed Shabik is a Software Engineer building scalable digital products and systems.",
};

export default function AboutPage() {
  return <AboutClient />;
}
