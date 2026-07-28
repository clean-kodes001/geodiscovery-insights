import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell, PageHero, Reveal } from "@/components/site/PageShell";
import { team, site, type TeamMember } from "@/config";

// Define search params
interface TeamSearch {
  member?: string;
}

export const Route = createFileRoute("/team")({
  validateSearch: (search: Record<string, unknown>): TeamSearch => {
    return {
      member: search.member as string | undefined,
    };
  },
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
  const search = useSearch({ from: "/team" });
  const selectedMemberId = search.member;
  const selectedMember = selectedMemberId 
    ? team.find((m) => m.id === selectedMemberId) 
    : null;

  // If a member is selected, show the detail view
  if (selectedMember) {
    return <MemberDetail member={selectedMember} />;
  }

  // Otherwise show the team list
  return <TeamList />;
}

function TeamList() {
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
              <Link 
                to="/team" 
                search={{ member: m.id }}
                className="group block"
              >
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

function MemberDetail({ member }: { member: TeamMember }) {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 pt-12 md:px-10 md:pt-20">
        <Reveal>
          <Link to="/team" className="text-sm text-ink-soft hover:text-brand">
            ← Back to team
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-paper-2">
              <motion.img 
                src={member.photo} 
                alt={member.name} 
                className="size-full object-cover"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </Reveal>
          
          <Reveal delay={0.05} className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.28em] text-brand">{member.role}</p>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] text-ink md:text-6xl">
              {member.name}
            </h1>
            
            <div className="mt-8 space-y-5 text-lg text-ink-soft">
              {member.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-ink-soft">Expertise</p>
                <ul className="mt-4 space-y-2">
                  {member.expertise.map((e) => (
                    <li key={e} className="flex items-start gap-3 text-ink">
                      <span className="mt-2.5 size-1.5 rounded-full bg-brand" />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {member.education && member.education.length > 0 && (
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-ink-soft">Education</p>
                  <ul className="mt-4 space-y-2 text-ink">
                    {member.education.map((e) => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {member.email && (
              <div className="mt-12">
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex rounded-full bg-ink px-6 py-3 text-paper transition-transform hover:scale-[1.03]"
                >
                  Email {member.name.split(" ")[0]}
                </a>
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}