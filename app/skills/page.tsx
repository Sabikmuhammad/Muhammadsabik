import { Metadata } from "next";
import { SkillsClient } from "./skills-client";

export const metadata: Metadata = {
  title: "Engineering Expertise — Mohammed Shabik",
  description: "Technical skills and engineering expertise of Mohammed Shabik, spanning frontend, backend, and infrastructure.",
};

export default function SkillsPage() {
  return <SkillsClient />;
}
