import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, Reveal } from "@/components/site/PageShell";
import { team, site, type TeamMember } from "@/config";

export const Route = createFileRoute("/team/$memberId")({
  loader: ({ params }) => {
    const member = team.find((m) => m.id === params.memberId);
    if (!member) throw notFound();
    return { member };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.member.name ?? "Team"} — ${site.name}` },
      { name: "description", content: loaderData?.member.short ?? site.description },
      { property: "og:title", content: loaderData?.member.name ?? site.name },
      { property: "og:description", content: loaderData?.member.short ?? site.description },
      { property: "og:type", content: "profile" },
    ],
  }),
  notFoundComponent: () => (
    <PageShell>
      <div className="mx-auto max-w-3xl px-6 py-40 text-center">
        <h1 className="font-display text-4xl text-ink">Team member not found</h1>
        <Link to="/team" className="mt-6 inline-flex text-brand">← Back to team</Link>
      </div>
    </PageShell>
  ),
  errorComponent: ({ error, reset }) => (
    <PageShell>
      <div className="mx-auto max-w-3xl px-6 py-40 text-center">
        <h1 className="font-display text-3xl text-ink">Couldn't load profile</h1>
        <p className="mt-3 text-ink-soft">{error.message}</p>
        <button onClick={reset} className="mt-6 rounded-full bg-ink px-6 py-3 text-paper">Try again</button>
      </div>
    </PageShell>
  ),
  component: MemberDetail,
});

function MemberDetail() {
  const { member } = Route.useLoaderData() as { member: TeamMember };

  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 pt-12 md:px-10 md:pt-20">
        <Reveal>
          <Link to="/team" className="text-sm text-ink-soft hover:text-brand">← Back to team</Link>
        </Reveal>

        <div className="mt-12 grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-paper-2">
              <img src={member.photo} alt={member.name} className="size-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.05} className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.28em] text-brand">{member.role}</p>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] text-ink md:text-6xl">{member.name}</h1>
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
              {member.education && (
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