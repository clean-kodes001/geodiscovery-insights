import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Nav />
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="pt-16 md:pt-20"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-16 md:px-10 md:pt-28">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.28em] text-brand">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h1 className="mt-6 font-display text-5xl leading-[1.02] text-ink md:text-7xl">
          {title}
        </h1>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-lg text-ink-soft md:text-xl">{intro}</p>
        </Reveal>
      )}
    </section>
  );
}