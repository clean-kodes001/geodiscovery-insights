import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell, Reveal } from "@/components/site/PageShell";
import { site } from "@/config";

export const Route = createFileRoute("/media-contacts")({
  head: () => ({
    meta: [
      { title: `Media Contacts — ${site.name}` },
      { name: "description", content: "Contact GeoDiscovery Geosciences for media inquiries, interviews, and press information." },
      { property: "og:title", content: `Media Contacts — ${site.name}` },
      { property: "og:description", content: "Get in touch with our media relations team for press and media inquiries." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: MediaContacts,
});

function MediaContacts() {
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
            <p className="text-xs uppercase tracking-[0.28em] text-brand">Media</p>
            <h1 className="mt-2 font-display text-4xl leading-[1.08] text-ink md:text-5xl lg:text-6xl">
              Media Contacts
            </h1>
            <p className="mt-4 text-lg text-ink-soft">
              Get in touch with our media relations team for press inquiries, interviews, and media information.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {/* Contact Information */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-paper-2 p-8 md:p-10">
              <h2 className="font-display text-2xl text-ink">Contact Information</h2>
              
              <div className="mt-6 space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-ink-soft">Email</p>
                  <a 
                    href="mailto:info@geodiscoverygeosciences.com"
                    className="mt-2 block text-lg text-brand hover:underline"
                  >
                    info@geodiscoverygeosciences.com
                  </a>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-ink-soft">Phone</p>
                  <a 
                    href="tel:+2348034065079"
                    className="mt-2 block text-lg text-ink hover:text-brand"
                  >
                    +234 803 406 5079
                  </a>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-ink-soft">Address</p>
                  <address className="mt-2 not-italic text-lg text-ink-soft leading-relaxed">
                    Plot 493, Sam Tsumba Street,<br />
                    Off Femi Kila Street,<br />
                    Cadastral Zone One, Life Camp,<br />
                    Abuja, FCT, Nigeria
                  </address>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-ink-soft">Office Hours</p>
                  <p className="mt-2 text-lg text-ink">
                    Mon – Fri · 9:00 – 18:00
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Media Contact Person */}
          <Reveal delay={0.15}>
            <div className="rounded-3xl bg-paper-2 p-8 md:p-10">
              <h2 className="font-display text-2xl text-ink">Media Relations</h2>
              
              <div className="mt-6 space-y-6">
                <div className="rounded-2xl bg-paper-3 p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex size-14 items-center justify-center rounded-full bg-brand/10 text-2xl text-brand">
                      👤
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-ink">Media Contact</h3>
                      <p className="text-sm text-ink-soft">For all press and media inquiries</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 space-y-3 border-t border-paper-2 pt-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-ink-soft">Email</p>
                      <a 
                        href="mailto:info@geodiscoverygeosciences.com"
                        className="mt-1 block text-brand hover:underline"
                      >
                        info@geodiscoverygeosciences.com
                      </a>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-ink-soft">Phone</p>
                      <a 
                        href="tel:+2348034065079"
                        className="mt-1 block text-ink hover:text-brand"
                      >
                        +234 803 406 5079
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-brand/5 p-6 border border-brand/10">
                  <h4 className="font-display text-sm text-brand">Media Resources</h4>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                    For press kits, media assets, and interview requests, please contact our media 
                    relations team via email or phone.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        
        {/* Footer / Copyright */}
        <Reveal delay={0.25}>
          <div className="mt-20 border-t border-paper-2 pt-12 text-center">
            <p className="text-sm text-ink-soft">
              © 2026 GeoDiscovery Geosciences. All rights reserved.
            </p>
            <p className="mt-2 text-xs text-ink-soft/60">
              Applied earth science, delivered.
            </p>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}