import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell, Reveal } from "@/components/site/PageShell";
import { projects, site } from "@/config";

export const Route = createFileRoute("/projects/$projectId")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.id === params.projectId);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.project.title ?? "Project"} — ${site.name}` },
      { name: "description", content: loaderData?.project.summary ?? site.description },
      { property: "og:title", content: loaderData?.project.title ?? site.name },
      { property: "og:description", content: loaderData?.project.summary ?? site.description },
      { property: "og:type", content: "article" },
    ],
  }),
  notFoundComponent: () => (
    <PageShell>
      <div className="mx-auto max-w-3xl px-6 py-40 text-center">
        <h1 className="font-display text-4xl text-ink">Project not found</h1>
        <Link to="/projects" className="mt-6 inline-flex text-brand">← All projects</Link>
      </div>
    </PageShell>
  ),
  errorComponent: ({ error, reset }) => (
    <PageShell>
      <div className="mx-auto max-w-3xl px-6 py-40 text-center">
        <h1 className="font-display text-3xl text-ink">Couldn't load this project</h1>
        <p className="mt-3 text-ink-soft">{error.message}</p>
        <button onClick={reset} className="mt-6 rounded-full bg-ink px-6 py-3 text-paper">Try again</button>
      </div>
    </PageShell>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 pt-12 md:px-10 md:pt-20">
        <Reveal>
          <Link to="/projects" className="text-sm text-ink-soft hover:text-brand">← All projects</Link>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-8 text-xs uppercase tracking-[0.28em] text-brand">{project.category}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 font-display text-5xl leading-[1.02] text-ink md:text-7xl">
            {project.title}
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft md:text-xl">{project.summary}</p>
        </Reveal>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-6 md:px-10">
        <Reveal>
          <motion.div className="aspect-[16/9] overflow-hidden rounded-[2.5rem]">
            <img src={project.cover} alt={project.title} className="size-full object-cover" />
          </motion.div>
        </Reveal>
      </section>

      <section className="mx-auto mt-20 grid max-w-7xl gap-16 px-6 md:grid-cols-3 md:px-10">
        <Reveal>
          <dl className="space-y-8 text-sm">
            <div>
              <dt className="uppercase tracking-[0.2em] text-ink-soft">Client</dt>
              <dd className="mt-2 font-display text-xl text-ink">{project.client ?? "Confidential"}</dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.2em] text-ink-soft">Location</dt>
              <dd className="mt-2 font-display text-xl text-ink">{project.location}</dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.2em] text-ink-soft">Year</dt>
              <dd className="mt-2 font-display text-xl text-ink">{project.year}</dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.2em] text-ink-soft">Services</dt>
              <dd className="mt-3 flex flex-wrap gap-2">
                {project.services.map((s) => (
                  <span key={s} className="rounded-full bg-paper-2 px-3 py-1 text-sm text-ink">{s}</span>
                ))}
              </dd>
            </div>
          </dl>
        </Reveal>
        <Reveal delay={0.05} className="md:col-span-2">
          <div className="space-y-6 text-lg text-ink-soft">
            {project.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {project.outcomes && (
            <div className="mt-12 rounded-[2rem] bg-paper-2 p-10">
              <p className="text-xs uppercase tracking-[0.28em] text-brand">Outcomes</p>
              <ul className="mt-5 space-y-3">
                {project.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-ink">
                    <span className="mt-2.5 size-1.5 rounded-full bg-brand" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Reveal>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-ink-soft">Gallery</p>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {project.gallery.map((src, i) => (
            <Reveal key={src + i} delay={i * 0.05}>
              <div className="aspect-[4/5] overflow-hidden rounded-3xl">
                <motion.img
                  src={src}
                  alt=""
                  className="size-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-[2rem] bg-paper-2 p-10">
            <p className="font-display text-2xl text-ink">Have a project like this one?</p>
            <Link to="/contact" className="rounded-full bg-ink px-6 py-3 text-paper hover:scale-[1.03] transition-transform">
              Get in touch
            </Link>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}