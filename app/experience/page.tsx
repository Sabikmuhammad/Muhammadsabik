import { Metadata } from "next";
import { ExperienceClient } from "./experience-client";

export const metadata: Metadata = {
  title: "Experience — Mohammed Shabik",
  description: "Professional experience and timeline of Mohammed Shabik.",
};

export default function ExperiencePage() {
  return <ExperienceClient />;
}
