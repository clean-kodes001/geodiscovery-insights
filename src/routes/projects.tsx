import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { PageShell, PageHero, Reveal } from "@/components/site/PageShell";
import { projects, site } from "@/config";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: `Projects — ${site.name}` },
      { name: "description", content: "Selected borehole, land survey, mineral exploration, geotechnical and geophysics projects delivered by GeoDiscovery Geosciences." },
      { property: "og:title", content: `Projects — ${site.name}` },
      { property: "og:description", content: "Selected work across water, land, minerals and infrastructure." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Projects,
});

function Projects() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    [],
  );
  const [active, setActive] = useState<string>("All");
  const list = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <PageShell>
      <PageHero
        eyebrow="Projects"
        title="Selected work."
        intro="A cross-section of recent engagements across water, land, minerals and infrastructure."
      />

      <section className="mx-auto mt-16 max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => {
            const isActive = c === active;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className="relative rounded-full px-5 py-2 text-sm text-ink transition-colors"
              >
                {isActive && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className={`relative ${isActive ? "text-paper" : "text-ink"}`}>{c}</span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-14 grid gap-x-6 gap-y-14 md:grid-cols-2">
          {list.map((p, i) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to="/projects/$projectId" params={{ projectId: p.id }} className="group block">
                <div className="aspect-[4/3] overflow-hidden rounded-[2rem] bg-paper-2">
                  <motion.img
                    src={p.cover}
                    alt={p.title}
                    className="size-full object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">
                      {p.category} · {p.location} · {p.year}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-ink group-hover:text-brand">
                      {p.title}
                    </h3>
                    <p className="mt-2 max-w-md text-ink-soft">{p.summary}</p>
                  </div>
                  <span className="mt-2 text-ink-soft transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </PageShell>
  );
}