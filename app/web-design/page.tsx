import type { Metadata } from "next";
import { WebDesignPageHeader } from "@/components/sections/web-design/page-header";
import { Stats } from "@/components/sections/web-design/stats";
import { Services } from "@/components/sections/web-design/services";
import { WhatsIncluded } from "@/components/sections/web-design/whats-included";
import { Process } from "@/components/sections/web-design/process";
import { TechStack } from "@/components/sections/web-design/tech-stack";
import { RecentProjects } from "@/components/sections/web-design/recent-projects";
import { WhyChooseMe } from "@/components/sections/web-design/why-choose-me";
import { Faq } from "@/components/sections/web-design/faq";
import { LetsTalkCta } from "@/components/sections/web-design/lets-talk-cta";
import { GetAQuote } from "@/components/sections/web-design/get-a-quote";

export const metadata: Metadata = {
  title: "Website Launch & Design",
  description:
    "Complete website launch solutions for small businesses — design, development, hosting, SEO, and support, all handled end to end.",
};

export default function WebDesignPortfolioPage() {
  return (
    <>
      <WebDesignPageHeader />
      <Stats />
      <Services />
      <WhatsIncluded />
      <Process />
      <TechStack />
      <RecentProjects />
      <WhyChooseMe />
      <Faq />
      <LetsTalkCta />
      <GetAQuote />
    </>
  );
}
