import { Link } from "@tanstack/react-router";
import { site } from "@/config";

export function Footer() {
  return (
    <footer className="mt-32 bg-paper-2">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-3xl leading-tight text-ink md:text-4xl">
              {site.tagline}
            </p>
            <p className="mt-6 max-w-md text-ink-soft">{site.description}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-ink-soft">Explore</p>
            <ul className="mt-4 space-y-2 text-ink">
              <li><Link to="/about" className="hover:text-brand">About</Link></li>
              <li><Link to="/projects" className="hover:text-brand">Projects</Link></li>
              <li><Link to="/team" className="hover:text-brand">Team</Link></li>
              <li><Link to="/contact" className="hover:text-brand">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-ink-soft">Contact</p>
            <ul className="mt-4 space-y-2 text-ink">
              <li>{site.email}</li>
              <li>{site.phone}</li>
              <li>{site.address}</li>
              <li className="text-ink-soft">{site.hours}</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-4 text-sm text-ink-soft md:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Applied earth science, delivered with care.</p>
        </div>
      </div>
    </footer>
  );
}