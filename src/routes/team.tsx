import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell, PageHero, Reveal } from "@/components/site/PageShell";
import { team, site } from "@/config";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: `Team — ${site.name}` },
      { name: "description", content: "Meet the geologists, geophysicists and engineers behind GeoDiscovery Geosciences." },
      { property: "og:title", content: `Team — ${site.name}` },
      { property: "og:description", content: "Meet the people who lead our field, technical and digital work." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Team,
});

function Team() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our team"
        title="The people behind the work."
        intro="Geologists, applied geophysicists and engineers who combine deep specialism with a shared field-first approach."
      />

      <section className="mx-auto mt-20 max-w-7xl px-6 md:px-10">
        <div className="grid gap-x-6 gap-y-16 md:grid-cols-2">
          {team.map((m, i) => (
            <Reveal key={m.id} delay={i * 0.08}>
              <Link to="/team/$memberId" params={{ memberId: m.id }} className="group block">
                <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-paper-2">
                  <motion.img
                    src={m.photo}
                    alt={m.name}
                    className="size-full object-cover"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <div className="mt-6 flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-brand">{m.role}</p>
                    <h3 className="mt-2 font-display text-3xl text-ink group-hover:text-brand">{m.name}</h3>
                    <p className="mt-3 max-w-md text-ink-soft">{m.short}</p>
                  </div>
                  <span className="mt-3 text-ink-soft transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}