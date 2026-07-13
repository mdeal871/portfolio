import type { Metadata } from "next";
import { WebDesignPageHeader } from "@/components/sections/web-design/page-header";
import { Services } from "@/components/sections/web-design/services";
import { Process } from "@/components/sections/web-design/process";
import { RecentProjects } from "@/components/sections/web-design/recent-projects";
import { WhyChooseMe } from "@/components/sections/web-design/why-choose-me";
import { Faq } from "@/components/sections/web-design/faq";
import { GetAQuote } from "@/components/sections/web-design/get-a-quote";

export const metadata: Metadata = {
  title: "Web Design",
  description:
    "Custom websites for small businesses — design, development, SEO, and support. See recent projects and get a quote.",
};

export default function WebDesignPortfolioPage() {
  return (
    <>
      <WebDesignPageHeader />
      <Services />
      <Process />
      <RecentProjects />
      <WhyChooseMe />
      <Faq />
      <GetAQuote />
    </>
  );
}
