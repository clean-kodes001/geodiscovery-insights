import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell, Reveal } from "@/components/site/PageShell";
import { site, services, projects, team, heroImage, homeGallery } from "@/config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — Applied geoscience for land, water and minerals` },
      { name: "description", content: site.description },
      { property: "og:title", content: site.name },
      { property: "og:description", content: site.description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <section className="relative mx-auto max-w-7xl px-6 pt-12 md:px-10 md:pt-24">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.28em] text-brand">
                Geoscience · Since inception
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-5xl leading-[1.02] text-ink md:text-8xl">
                Reading the earth.
                <span className="block text-ink-soft">Guiding what's built on it.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-xl text-lg text-ink-soft md:text-xl">
                {site.description}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="rounded-full bg-ink px-6 py-3 text-paper transition-transform hover:scale-[1.03]"
                >
                  See our work
                </Link>
                <Link
                  to="/contact"
                  className="rounded-full bg-paper-2 px-6 py-3 text-ink transition-colors hover:bg-brand-soft"
                >
                  Start a project
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={0.1}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative aspect-[4/5] overflow-hidden rounded-[2rem]"
              >
                <img src={heroImage} alt="Geoscientist at a field outcrop" className="size-full object-cover" />
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-ink-soft">What we do</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl text-ink md:text-6xl">
            Field-tested services across the full earth-science stack.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-[2rem] bg-paper-2 p-8 h-full"
              >
                <div className="mb-8 size-10 rounded-full bg-brand/10 grid place-items-center">
                  <span className="size-2 rounded-full bg-brand" />
                </div>
                <h3 className="font-display text-2xl text-ink">{s.title}</h3>
                <p className="mt-3 text-ink-soft">{s.body}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-ink-soft">Selected projects</p>
              <h2 className="mt-4 font-display text-4xl text-ink md:text-6xl">
                Recent work.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <Link to="/projects" className="text-ink hover:text-brand">
              View all projects →
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((p, i) => (
            <Reveal key={p.id} delay={i * 0.05}>
              <Link
                to="/projects/$projectId"
                params={{ projectId: p.id }}
                className="group block"
              >
                <motion.div
                  whileHover={{ scale: 1.005 }}
                  className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-paper-2"
                >
                  <motion.img
                    src={p.cover}
                    alt={p.title}
                    className="size-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />
                </motion.div>
                <div className="mt-5 flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-ink-soft">
                      {p.category} · {p.year}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-ink group-hover:text-brand">
                      {p.title}
                    </h3>
                  </div>
                  <span className="mt-2 text-ink-soft transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-ink-soft">In the field</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl text-ink md:text-6xl">
            Real ground. Real instruments. Real data.
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
          {homeGallery.map((src, i) => (
            <Reveal key={src} delay={i * 0.04}>
              <div className={`overflow-hidden rounded-3xl ${i % 5 === 0 ? "aspect-[4/5]" : "aspect-square"}`}>
                <motion.img
                  src={src}
                  alt="Field work"
                  className="size-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-2 md:items-end">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-ink-soft">The team</p>
              <h2 className="mt-4 font-display text-4xl text-ink md:text-6xl">
                Geologists who show up on site.
              </h2>
              <p className="mt-6 max-w-xl text-lg text-ink-soft">
                From remote-sensing desks to boots-on-outcrop mapping, our team blends academic depth with
                hands-on field practice.
              </p>
              <Link to="/team" className="mt-8 inline-flex text-ink hover:text-brand">
                Meet the team →
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {team.map((m, i) => (
              <Reveal key={m.id} delay={i * 0.08}>
                <Link 
                
                to="/team" 
                search={{ member: m.id }}
               className="group block">
                  <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-paper-2">
                    <motion.img
                      src={m.photo}
                      alt={m.name}
                      className="size-full object-cover grayscale group-hover:grayscale-0"
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                  <p className="mt-3 font-display text-lg text-ink">{m.name}</p>
                  <p className="text-sm text-ink-soft">{m.role}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="rounded-[2.5rem] bg-paper-2 px-8 py-16 md:px-16 md:py-24">
            <p className="text-xs uppercase tracking-[0.28em] text-brand">Start a project</p>
            <h2 className="mt-6 max-w-3xl font-display text-4xl text-ink md:text-6xl">
              Have a site, a licence, or a question? Let's talk.
            </h2>
            <Link
              to="/contact"
              className="mt-10 inline-flex rounded-full bg-ink px-6 py-3 text-paper transition-transform hover:scale-[1.03]"
            >
              Contact GeoDiscovery
            </Link>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
