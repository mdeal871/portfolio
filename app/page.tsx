import { Hero } from "@/components/sections/hero";
import { FeaturedEngineering } from "@/components/sections/featured-engineering";
import { EngineeringToWebPivot } from "@/components/ui/engineering-to-web-pivot";
import { FeaturedWebsites } from "@/components/sections/featured-websites";
import { AboutPreview } from "@/components/sections/about-preview";
import { SkillsPreview } from "@/components/sections/skills-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCta } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedEngineering />
      <EngineeringToWebPivot />
      <FeaturedWebsites />
      <AboutPreview />
      <SkillsPreview />
      <Testimonials />
      <FinalCta />
    </>
  );
}
