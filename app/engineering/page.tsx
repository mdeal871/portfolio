import type { Metadata } from "next";
import { EngineeringPageHeader } from "@/components/sections/engineering/page-header";
import { Education } from "@/components/sections/engineering/education";
import { TimelineSection } from "@/components/sections/engineering/timeline-section";
import { Experience } from "@/components/sections/engineering/experience";
import { Projects } from "@/components/sections/engineering/projects";
import { TechnicalSkills } from "@/components/sections/engineering/technical-skills";
import { Leadership } from "@/components/sections/engineering/leadership";
import { Awards } from "@/components/sections/engineering/awards";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Engineering Portfolio",
  description:
    "Timeline, experience, projects, and technical skills — computer engineering work from coursework, internships, and Texas Instruments.",
};

export default function EngineeringPortfolioPage() {
  return (
    <>
      <EngineeringPageHeader />
      <Education />
      <TimelineSection />
      <Experience />
      <Projects />
      <TechnicalSkills />
      <Leadership />
      <Awards />
      <FinalCta />
    </>
  );
}
