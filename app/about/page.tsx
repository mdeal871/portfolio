import type { Metadata } from "next";
import { AboutPageHeader } from "@/components/sections/about/page-header";
import { WhyComputerEngineering } from "@/components/sections/about/why-computer-engineering";
import { BuildingInterests } from "@/components/sections/about/building-interests";
import { OutsideOfWork } from "@/components/sections/about/outside-of-work";
import { Philosophy } from "@/components/sections/about/philosophy";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why computer engineering, what I'm building toward, and how I think about learning and solving problems.",
};

export default function AboutPage() {
  return (
    <>
      <AboutPageHeader />
      <WhyComputerEngineering />
      <BuildingInterests />
      <OutsideOfWork />
      <Philosophy />
      <FinalCta />
    </>
  );
}
