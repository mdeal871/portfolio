"use client";

import { useId, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { fadeUp, viewportOnce } from "@/components/motion/variants";

const fieldClasses =
  "w-full bg-transparent border-0 border-b border-border py-3 text-body text-text placeholder:text-text-muted " +
  "focus:outline-none focus:border-trace transition-colors duration-fast appearance-none";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block font-mono text-mono-label uppercase text-text-muted mb-2"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export function GetAQuote() {
  const uid = useId();
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    projectType: "New website",
    budget: "$1,500–$3,000",
    message: "",
  });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  // No backend wired up yet — this builds a pre-filled mailto so the form
  // works out of the box. Swap in Formspree, Resend, or an API route for
  // a real inbox submission without a mail client popup.
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Quote request — ${form.business || form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nBusiness: ${form.business}\nProject type: ${form.projectType}\nBudget: ${form.budget}\n\n${form.message}`
    );
    window.location.href = `mailto:mdeal871@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="quote" className="relative border-t border-border bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <SectionHeading
          eyebrow="Get a quote"
          title="Tell me about the project"
          align="center"
          tone="trace"
          className="mx-auto text-center"
          description="A few details now saves back-and-forth later. I'll reply with a flat quote and a realistic timeline."
        />

        <motion.form
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-16 space-y-8"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <Field label="Name" htmlFor={`${uid}-name`}>
              <input
                id={`${uid}-name`}
                name="name"
                required
                autoComplete="name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className={fieldClasses}
              />
            </Field>
            <Field label="Email" htmlFor={`${uid}-email`}>
              <input
                id={`${uid}-email`}
                name="email"
                required
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className={fieldClasses}
              />
            </Field>
          </div>

          <Field label="Business name" htmlFor={`${uid}-business`}>
            <input
              id={`${uid}-business`}
              name="business"
              autoComplete="organization"
              value={form.business}
              onChange={(e) => update("business", e.target.value)}
              className={fieldClasses}
            />
          </Field>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <Field label="Project type" htmlFor={`${uid}-project-type`}>
              <select
                id={`${uid}-project-type`}
                name="projectType"
                value={form.projectType}
                onChange={(e) => update("projectType", e.target.value)}
                className={fieldClasses}
              >
                <option>New website</option>
                <option>Redesign</option>
                <option>Ongoing support</option>
                <option>Something else</option>
              </select>
            </Field>
            <Field label="Budget" htmlFor={`${uid}-budget`}>
              <select
                id={`${uid}-budget`}
                name="budget"
                value={form.budget}
                onChange={(e) => update("budget", e.target.value)}
                className={fieldClasses}
              >
                <option>Under $1,500</option>
                <option>$1,500–$3,000</option>
                <option>$3,000–$6,000</option>
                <option>$6,000+</option>
              </select>
            </Field>
          </div>

          <Field label="Project details" htmlFor={`${uid}-message`}>
            <textarea
              id={`${uid}-message`}
              name="message"
              placeholder="What are you looking to build?"
              rows={4}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className={fieldClasses + " resize-none"}
            />
          </Field>

          <Button type="submit" size="lg" tone="trace" className="w-full sm:w-auto">
            Send quote request
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
