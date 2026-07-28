import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell, Reveal } from "@/components/site/PageShell";
import { site } from "@/config";

export const Route = createFileRoute("/programme")({
  head: () => ({
    meta: [
      { title: `Ethics & Compliance Programme — ${site.name}` },
      { name: "description", content: "Our Ethics and Compliance Programme encompasses risk assessments, policies and procedures, training and awareness, advice, monitoring, discipline and incentives, speaking openly and investigations." },
      { property: "og:title", content: `Ethics & Compliance Programme — ${site.name}` },
      { property: "og:description", content: "Learn about our comprehensive Ethics and Compliance Programme and how we maintain integrity across our business." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Programme,
});

function Programme() {
  return (
    <PageShell>
      <section className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-32">
        <Reveal>
          <Link to="/" className="text-sm text-ink-soft hover:text-brand">
            ← Back 
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-8 font-display text-4xl leading-[1.08] text-ink md:text-5xl lg:text-6xl">
            Ethics & Compliance Programme
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            Our Ethics and Compliance Programme encompasses risk assessments, policies and procedures, 
            training and awareness, advice, monitoring, discipline and incentives, speaking openly and investigations.
          </p>
        </Reveal>

        <div className="mt-16 space-y-16">
          {/* Programme Overview */}
          <Reveal delay={0.1}>
            <div className="border-l-4 border-brand pl-6">
              <h2 className="font-display text-2xl text-ink md:text-3xl">Our Programme</h2>
            </div>
            <div className="mt-6 space-y-4 text-lg text-ink-soft leading-relaxed">
              <p>
                We work with experts to develop our Programme, taking account of international best practice 
                and guidance from relevant authorities.
              </p>
              <p>
                All employees, directors and officers (as well as contractors, where applicable) must comply 
                with our relevant policies and procedures, and the law.
              </p>
              <p>
                When we enter into joint ventures where we are not the operator, we encourage our partners 
                to adopt similar policies and procedures to ours.
              </p>
            </div>
          </Reveal>

          {/* Our Leaders */}
          <Reveal delay={0.15}>
            <div className="border-l-4 border-brand pl-6">
              <h2 className="font-display text-2xl text-ink md:text-3xl">Our Leaders</h2>
            </div>
            <div className="mt-6 space-y-4 text-lg text-ink-soft leading-relaxed">
              <p>
                Our leaders are responsible for creating a culture where ethical behaviour is encouraged. 
                Integrity is one of our Values — meaning that across the business, we have the courage to 
                do what's right, even when it's hard.
              </p>
            </div>
          </Reveal>

       

          {/* Corporate Compliance Team */}
          <Reveal delay={0.25}>
            <div className="border-l-4 border-brand pl-6">
              <h2 className="font-display text-2xl text-ink md:text-3xl">
                Corporate Compliance Team
              </h2>
            </div>
            <div className="mt-6 space-y-4 text-lg text-ink-soft leading-relaxed">
              <p>
                Running this global Programme effectively would not be possible without skilled compliance 
                professionals.
              </p>
              <p>
                The Corporate Compliance team is responsible for designing, monitoring and continuously 
                improving our Programme. The team includes subject matter experts for each of our key 
                compliance risks and heads of the teams who develop and oversee the Programme's different 
                elements.
              </p>
            </div>
          </Reveal>

          {/* Regional Compliance Team */}
          <Reveal delay={0.3}>
            <div className="border-l-4 border-brand pl-6">
              <h2 className="font-display text-2xl text-ink md:text-3xl">
                Regional Compliance Team
              </h2>
            </div>
            <div className="mt-6 space-y-4 text-lg text-ink-soft leading-relaxed">
              <p>
                Our Regional Compliance team is responsible for effective implementation and maintenance 
                of our Programme in the regions in which we operate.
              </p>
              <p>
                The Regional Compliance team also provides guidance and advice to local compliance teams 
                and business in the regions, with support and guidance from the Corporate Compliance team.
              </p>
            </div>
          </Reveal>
        </div>

       
       
      </section>
    </PageShell>
  );
}