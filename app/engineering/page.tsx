import type { Metadata } from "next";
import { EngineeringPageHeader } from "@/components/sections/engineering/page-header";
import { Education } from "@/components/sections/engineering/education";

import { Experience } from "@/components/sections/engineering/experience";
import { Projects } from "@/components/sections/engineering/projects";
import { TechnicalSkills } from "@/components/sections/engineering/technical-skills";
import { Leadership } from "@/components/sections/engineering/leadership";
import { Awards } from "@/components/sections/engineering/awards";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Engineering Portfolio",
  description:
    "Hardware and embedded systems work at Texas Instruments, Lenovo-sponsored senior design, and computer engineering projects at NC State.",
};

export default function EngineeringPortfolioPage() {
  return (
    <>
      <EngineeringPageHeader />
      <Projects />
      <Experience />
      <Education />
      <TechnicalSkills />
      <Leadership />
      <Awards />
      <FinalCta />
    </>
  );
}
