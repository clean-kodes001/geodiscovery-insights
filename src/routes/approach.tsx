import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell, Reveal } from "@/components/site/PageShell";
import { site } from "@/config";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: `Our Approach — Sustainability — ${site.name}` },
      { name: "description", content: "Sustainability at Glencore is overseen at the highest level, by our Board Health, Safety, Environment and Communities (HSEC) Committee." },
      { property: "og:title", content: `Our Approach — Sustainability — ${site.name}` },
      { property: "og:description", content: "Learn about our sustainability approach, board oversight, risk management, and external commitments." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Approach,
});

function Approach() {
  return (
    <PageShell>
      <section className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-32">
        <Reveal>
          <Link to="/" className="text-sm text-ink-soft hover:text-brand">
            ← Back to Sustainability
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-8 font-display text-4xl leading-[1.08] text-ink md:text-5xl lg:text-6xl">
            Our Approach
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            Sustainability at Glencore is overseen at the highest level, by our Board Health, Safety, Environment and Communities (HSEC) Committee.
          </p>
        </Reveal>

        <div className="mt-16 space-y-20">
          {/* Board Oversight */}
          <Reveal delay={0.1}>
            <div className="border-l-4 border-brand pl-6">
              <h2 className="font-display text-2xl text-ink md:text-3xl">Board oversight</h2>
            </div>
            <div className="mt-6 space-y-4 text-lg text-ink-soft leading-relaxed">
              <p>
                The Board's HSEC Committee sets the strategic direction for our sustainability activities and oversees the development and implementation of our health, safety, environment and social performance and human rights (HSEC&HR) strategy and programmes and monitors performance.
              </p>
              <p>
                It meets at least four times a year and receives regular updates on how our business is performing across our internally defined, sustainability-related material risk areas.
              </p>
            </div>
          
          </Reveal>

          {/* Implementing Sustainability */}
          <Reveal delay={0.15}>
            <div className="border-l-4 border-brand pl-6">
              <h2 className="font-display text-2xl text-ink md:text-3xl">
                Implementing our sustainability activities
              </h2>
            </div>
            <div className="mt-6 space-y-4 text-lg text-ink-soft leading-relaxed">
              <p>
                Responsibility for implementing and monitoring our sustainability activities across the Group rests with our senior management, including the Chief Executive Officer, Chief Operating Officer and heads of our corporate functions and industrial commodity departments.
              </p>
            </div>

          </Reveal>

          {/* Risk Management */}
          <Reveal delay={0.2}>
            <div className="border-l-4 border-brand pl-6">
              <h2 className="font-display text-2xl text-ink md:text-3xl">
                Risk management and assurance
              </h2>
            </div>
            <div className="mt-6 space-y-4 text-lg text-ink-soft leading-relaxed">
              <p>
                The management of HSEC&HR-related risks aligns with Glencore's general approach to the identification, assessment and mitigation of risk.
              </p>
              <p>
                Our industrial assets use our Enterprise Risk Management Framework to identify and assess hazards, including those with potentially major or catastrophic consequences, and to develop plans to address and eliminate, or mitigate, the related risks.
              </p>
              <p>
                For each of the identified catastrophic hazards we have implemented a standardised approach to identifying and understanding their causes and controls, including critical control verifications.
              </p>
            </div>
          
          </Reveal>

          {/* Joint Ventures */}
          <Reveal delay={0.25}>
            <div className="border-l-4 border-brand pl-6">
              <h2 className="font-display text-2xl text-ink md:text-3xl">
                Sustainability at independently operated joint ventures
              </h2>
            </div>
            <div className="mt-6 space-y-4 text-lg text-ink-soft leading-relaxed">
              <p>
                Independent management teams operate our non-controlled joint ventures (JVs). Along with our JV partners, we participate in board shareholder committees that take key strategic decisions and we use this participation to influence the independent management teams to adopt appropriate operational and governance standards that reflect those of Glencore and the other JV partners.
              </p>
            </div>
          </Reveal>

          {/* External Standards */}
          <Reveal delay={0.3}>
            <div className="border-l-4 border-brand pl-6">
              <h2 className="font-display text-2xl text-ink md:text-3xl">
                External standards
              </h2>
            </div>
            <div className="mt-6 space-y-4 text-lg text-ink-soft leading-relaxed">
              <p>
                As we rely on the application and assurance of our own HSEC&HR management framework, we do not insist that our assets undergo third party certification and we do not use external certification as an indicator of performance.
              </p>
              <p>
                Some of our sites undertake third party certification where there is an external requirement, or where it provides additional value to our business, customers or other stakeholders.
              </p>
            </div>
          </Reveal>

          {/* External Commitments */}
          <Reveal delay={0.35}>
            <div className="border-l-4 border-brand pl-6">
              <h2 className="font-display text-2xl text-ink md:text-3xl">
                External commitments
              </h2>
            </div>
            <div className="mt-6 space-y-4 text-lg text-ink-soft leading-relaxed">
              <p>
                We seek to uphold the International Labour Organization Declaration on Fundamental Principles and Rights at Work and the UN Universal Declaration of Human Rights.
              </p>
            </div>
          </Reveal>
        </div>

      </section>
    </PageShell>
  );
}