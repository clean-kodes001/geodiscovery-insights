import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { PageShell, PageHero, Reveal } from "@/components/site/PageShell";
import { site } from "@/config";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${site.name}` },
      { name: "description", content: `Get in touch with ${site.name} about borehole siting, land surveys, mineral exploration and geotechnical work.` },
      { property: "og:title", content: `Contact — ${site.name}` },
      { property: "og:description", content: "Start a conversation about your next geoscience project." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about the ground."
        intro="Tell us a little about your site, licence, or question. We usually respond within one working day."
      />

      <section className="mx-auto mt-20 grid max-w-7xl gap-16 px-6 md:grid-cols-5 md:px-10">
        <Reveal className="md:col-span-2">
          <div className="space-y-10">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-ink-soft">Email</p>
              <a href={`mailto:${site.email}`} className="mt-3 block font-display text-2xl text-ink hover:text-brand">
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-ink-soft">Phone</p>
              <p className="mt-3 font-display text-2xl text-ink">{site.phone}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-ink-soft">Office</p>
              <p className="mt-3 font-display text-2xl text-ink">{site.address}</p>
              <p className="mt-2 text-ink-soft">{site.hours}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05} className="md:col-span-3">
          <motion.form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-[2rem] bg-paper-2 p-8 md:p-12"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your full name" />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" />
              <Field label="Company" name="company" placeholder="Optional" />
              <Field label="Service" name="service" placeholder="e.g. Borehole siting" />
            </div>
            <div className="mt-6">
              <label className="text-xs uppercase tracking-[0.2em] text-ink-soft">Project details</label>
              <textarea
                required
                rows={5}
                placeholder="Site, timing, what you're trying to figure out…"
                className="mt-3 w-full resize-none rounded-2xl bg-background px-5 py-4 text-ink outline-none placeholder:text-ink-soft focus:ring-2 focus:ring-brand/40"
              />
            </div>
            <div className="mt-8 flex items-center justify-between gap-4">
              <p className="text-sm text-ink-soft">
                {sent ? "Thanks — we'll be in touch soon." : "We reply within one working day."}
              </p>
              <motion.button
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="rounded-full bg-ink px-6 py-3 text-paper transition-transform hover:scale-[1.03]"
              >
                {sent ? "Sent ✓" : "Send message"}
              </motion.button>
            </div>
          </motion.form>
        </Reveal>
      </section>
    </PageShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-ink-soft">{label}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-3 w-full rounded-2xl bg-background px-5 py-4 text-ink outline-none placeholder:text-ink-soft focus:ring-2 focus:ring-brand/40"
      />
    </label>
  );
}