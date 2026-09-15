import type { Metadata } from "next";
import { WebDesignPageHeader } from "@/components/sections/web-design/page-header";
import { WhatsIncluded } from "@/components/sections/web-design/whats-included";
import { Process } from "@/components/sections/web-design/process";
import { RecentProjects } from "@/components/sections/web-design/recent-projects";
import { Faq } from "@/components/sections/web-design/faq";
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
      <RecentProjects />
      <WhatsIncluded />
      <Process />
      <Faq />
      <GetAQuote />
    </>
  );
}
