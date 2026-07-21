import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell, PageHero, Reveal } from "@/components/site/PageShell";
import { site, aboutImage, services } from "@/config";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${site.name}` },
      { name: "description", content: `Learn about ${site.name}, a team of geologists and applied geophysicists delivering rigorous earth-science services.` },
      { property: "og:title", content: `About ${site.name}` },
      { property: "og:description", content: site.description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: About,
});

const values = [
  { title: "Field first", body: "Every model gets tested against outcrop, core and instrument. We work where the data is." },
  { title: "Integrated", body: "Geology, geophysics, geochemistry, GIS — one team, one interpretation." },
  { title: "Honest reporting", body: "We tell clients what the data supports, and what it doesn't. No overselling risk." },
  { title: "Long-view partners", body: "Most of our work is repeat work. We stay engaged from siting through operations." },
];

function About() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About us"
        title="A geoscience practice built on field work."
        intro="GeoDiscovery Geosciences is a team of geologists and applied geophysicists working across water, land, minerals and infrastructure. We combine remote sensing, in-field measurement and modern interpretation to help our clients make better decisions about the ground beneath their projects."
      />

      <section className="mx-auto mt-20 max-w-7xl px-6 md:px-10">
        <Reveal>
          <motion.div className="aspect-[16/9] overflow-hidden rounded-[2.5rem]">
            <img src={aboutImage} alt="Field team at work" className="size-full object-cover" />
          </motion.div>
        </Reveal>
      </section>

      <section className="mx-auto mt-32 grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-brand">Our approach</p>
          <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">
            Rigorous science, delivered on schedule.
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="space-y-6 text-lg text-ink-soft">
            <p>
              We were founded to bring academic-grade methodology to commercial earth-science work — with the same
              deadlines, budgets and communication standards our clients expect from any professional partner.
            </p>
            <p>
              Every engagement starts with a clear question: where should the borehole go, is this slope safe,
              does this licence justify a drill programme, what does this survey actually mean? Our reports answer
              that question directly, and stand up to review.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto mt-32 max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-ink-soft">What we believe</p>
          <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">Values.</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <div className="rounded-[2rem] bg-paper-2 p-10">
                <h3 className="font-display text-2xl text-ink">{v.title}</h3>
                <p className="mt-3 text-ink-soft">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-ink-soft">Capabilities</p>
          <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">
            Everything we do, in one place.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <div className="flex gap-6 py-6">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-brand" />
                <div>
                  <h3 className="font-display text-2xl text-ink">{s.title}</h3>
                  <p className="mt-2 text-ink-soft">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="rounded-[2.5rem] bg-paper-2 px-8 py-16 md:px-16 md:py-24">
            <h2 className="max-w-3xl font-display text-4xl text-ink md:text-6xl">
              Ready to bring us in on your next project?
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-full bg-ink px-6 py-3 text-paper hover:scale-[1.03] transition-transform">
                Contact us
              </Link>
              <Link to="/projects" className="rounded-full bg-background px-6 py-3 text-ink hover:bg-brand-soft transition-colors">
                See our projects
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}