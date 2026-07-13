import type { Metadata } from "next";
import { ContactPageHeader } from "@/components/sections/contact/page-header";
import { ContactChannels } from "@/components/sections/contact/contact-channels";
import { Downloads } from "@/components/sections/contact/downloads";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch about engineering opportunities or freelance web design — email, LinkedIn, GitHub, plus résumé and project portfolio downloads.",
};

export default function ContactPage() {
  return (
    <>
      <ContactPageHeader />
      <ContactChannels />
      <Downloads />
    </>
  );
}
