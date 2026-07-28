import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell, Reveal } from "@/components/site/PageShell";
import { site } from "@/config";

export const Route = createFileRoute("/copper")({
  head: () => ({
    meta: [
      { title: `Copper — Metals & Minerals — ${site.name}` },
      { name: "description", content: "Glencore is one of the world's leading producers and marketers of copper. We extract and process copper ore in South America, the Democratic Republic of the Congo and Australia." },
      { property: "og:title", content: `Copper — Metals & Minerals — ${site.name}` },
      { property: "og:description", content: "Learn about our copper operations, production figures, and the many uses of this versatile metal." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Copper,
});

function Copper() {
  return (
    <PageShell>
      <section className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-32">
        <Reveal>
          <Link to="/" className="text-sm text-ink-soft hover:text-brand">
            ← Back
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8">
            <p className="text-xs uppercase tracking-[0.28em] text-brand">Metals & Minerals</p>
            <h1 className="mt-2 font-display text-4xl leading-[1.08] text-ink md:text-5xl lg:text-6xl">
              Copper
            </h1>
            <p className="mt-4 text-lg text-ink-soft">
              Glencore is one of the world's leading producers and marketers of copper.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 space-y-16">
          {/* Overview */}
          <Reveal delay={0.1}>
            <div className="space-y-4 text-lg text-ink-soft leading-relaxed">
              <p>
                We extract and process copper ore in South America, the Democratic Republic of the Congo 
                and Australia. In North America, we recycle copper scrap. In addition, we smelt and refine 
                copper. We supply a wide range of customers from the automotive, electronics and 
                construction sectors.
              </p>
              <p>
                Copper was the first metal ever used by humankind and today, it finds various applications 
                in everyday life and in industry.
              </p>
              <p>
                As a major by-product of copper production, we are one of the world's largest producers of 
                cobalt, primarily from the Democratic Republic of Congo (DRC).
              </p>
            </div>
          </Reveal>

        

          {/* Copper in Figures */}
          <Reveal delay={0.2}>
            <div className="border-l-4 border-brand pl-6">
              <h2 className="font-display text-2xl text-ink md:text-3xl">
                Copper in figures - 2025
              </h2>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-paper-2 p-8 text-center">
                <div className="font-display text-5xl text-brand">3.8</div>
                <div className="mt-2 text-sm text-ink-soft">mt</div>
                <p className="mt-1 text-sm text-ink-soft">
                  of copper metal and concentrates sold via our marketing business
                </p>
                <p className="mt-2 text-xs text-ink-soft/60">¹Estimated metal unit contained.</p>
              </div>
              <div className="rounded-2xl bg-paper-2 p-8 text-center">
                <div className="font-display text-5xl text-brand">851.6</div>
                <div className="mt-2 text-sm text-ink-soft">kt</div>
                <p className="mt-1 text-sm text-ink-soft">
                  of copper produced at our assets
                </p>
              </div>
            </div>
          </Reveal>

          {/* Uses of Copper */}
          <Reveal delay={0.25}>
            <div className="border-l-4 border-brand pl-6">
              <h2 className="font-display text-2xl text-ink md:text-3xl">Uses of copper</h2>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-paper-2 p-6">
                <div className="text-3xl">⚡</div>
                <h4 className="mt-3 font-display text-lg text-ink">Conductivity</h4>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  Due to its outstanding conductivity, copper is suitable for use in electronic products 
                  such as wiring and connectors, as well as renewable energy technologies and electric 
                  vehicles.
                </p>
              </div>
              <div className="rounded-2xl bg-paper-2 p-6">
                <div className="text-3xl">🔧</div>
                <h4 className="mt-3 font-display text-lg text-ink">Alloys</h4>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  As an alloy, copper is hard and resists both heat and corrosion. That's why it is 
                  perfectly suited for fresh water supply lines and plumbing fittings as well as cookware.
                </p>
              </div>
              <div className="rounded-2xl bg-paper-2 p-6">
                <div className="text-3xl">🏥</div>
                <h4 className="mt-3 font-display text-lg text-ink">Antimicrobial properties</h4>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  Copper's antimicrobial properties can support infection control in hospitals and care 
                  environments.
                </p>
              </div>
              <div className="rounded-2xl bg-paper-2 p-6">
                <div className="text-3xl">♻️</div>
                <h4 className="mt-3 font-display text-lg text-ink">Recyclable & sustainable</h4>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  As a versatile and recyclable material, it makes an essential contribution to a low 
                  carbon future.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

      </section>
    </PageShell>
  );
}