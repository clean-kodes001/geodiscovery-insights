import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/config";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

// Menu data structure with direct routes
const menuData = {
  sustainability: {
    label: "Sustainability",
    items: [
      { label: "Our approach", to: "/approach" },
      { label: "Responsible Sourcing", to: "/responsible-sourcing" },
      { label: "Tailings Storage Facilities (TSFs)", to: "/tsf" },
      { label: "Water", to: "/water" },
      { label: "Publications", to: "/publications" },
    ]
  },
  ethics: {
    label: "Ethics and compliance",
    items: [
      { label: "Programme", to: "/programme" },
      { label: "Board oversight and governance", to: "/governance" },
      { label: "Key risks", to: "/risks" },
      { label: "Training and awareness", to: "/training" },
      { label: "Speaking Openly and Raising Concerns", to: "/speaking-openly" },
    ]
  },
  whatWeDo: {
    label: "What we do",
    items: [
      { 
        label: "Metals & minerals",
        subItems: [
          { label: "Copper", to: "/copper" },
          { label: "Cobalt", to: "/cobalt" },
          { label: "Nickel", to: "/nickel" },
          { label: "Zinc & Lead", to: "/zinc-lead" },
          { label: "Ferroalloys", to: "/ferroalloys" },
          { label: "Other metals & minerals", to: "/other-metals" },
        ]
      },
      { label: "Energy", to: "/energy" },
      { label: "Marketing", to: "/marketing" },
      { label: "Recycling", to: "/recycling" },
    ]
  },
  media: {
    label: "Media",
    items: [
      { label: "Media contacts", to: "/media-contacts" },
      { label: "Image & video library", to: "/media-library" },
    ]
  }
};

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
    setOpenMobileSubmenu(null);
  }, [path]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Helper to check if a route is active
  const isActive = (to: string) => {
    if (to === "/") return path === "/";
    return path.startsWith(to);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-colors duration-500 ${
          scrolled ? "bg-paper/80 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-10">
          <Link to="/" className="flex items-center gap-3">
            <span className="grid size-8 place-items-center rounded-full bg-brand text-paper">
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3c3 3.5 3 14 0 18M12 3c-3 3.5-3 14 0 18" />
              </svg>
            </span>
            <span className="font-display text-lg text-ink">{site.short}</span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {/* Main navigation links */}
            {links.map((l) => {
              const active = isActive(l.to);
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="relative rounded-full px-4 py-2 text-sm text-ink/80 transition-colors hover:text-ink"
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-paper-2"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{l.label}</span>
                  </Link>
                </li>
              );
            })}

            {/* Sustainability Dropdown */}
            <li className="dropdown-container relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'sustainability' ? null : 'sustainability')}
                className={`relative rounded-full px-4 py-2 text-sm text-ink/80 transition-colors hover:text-ink ${
                  openDropdown === 'sustainability' ? 'text-ink' : ''
                }`}
              >
                <span className="flex items-center gap-1">
                  Sustainability
                  <svg className="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {openDropdown === 'sustainability' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute left-0 top-full mt-2 w-64 rounded-2xl bg-paper/90 p-2 shadow-xl backdrop-blur-xl"
                >
                  {menuData.sustainability.items.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block rounded-xl px-4 py-2.5 text-sm text-ink/80 transition-colors hover:bg-paper-2 hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </li>

            {/* Ethics Dropdown */}
            <li className="dropdown-container relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'ethics' ? null : 'ethics')}
                className={`relative rounded-full px-4 py-2 text-sm text-ink/80 transition-colors hover:text-ink ${
                  openDropdown === 'ethics' ? 'text-ink' : ''
                }`}
              >
                <span className="flex items-center gap-1">
                  Ethics & Compliance
                  <svg className="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {openDropdown === 'ethics' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute left-0 top-full mt-2 w-64 rounded-2xl bg-paper/90 p-2 shadow-xl backdrop-blur-xl"
                >
                  {menuData.ethics.items.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block rounded-xl px-4 py-2.5 text-sm text-ink/80 transition-colors hover:bg-paper-2 hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </li>

            {/* What We Do Dropdown */}
            <li className="dropdown-container relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'whatWeDo' ? null : 'whatWeDo')}
                className={`relative rounded-full px-4 py-2 text-sm text-ink/80 transition-colors hover:text-ink ${
                  openDropdown === 'whatWeDo' ? 'text-ink' : ''
                }`}
              >
                <span className="flex items-center gap-1">
                  What We Do
                  <svg className="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {openDropdown === 'whatWeDo' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute left-0 top-full mt-2 w-72 rounded-2xl bg-paper/90 p-2 shadow-xl backdrop-blur-xl"
                >
                  {menuData.whatWeDo.items.map((item) => (
                    <div key={item.label}>
                      {item.subItems ? (
                        <div className="group">
                          <div className="rounded-xl px-4 py-2.5 text-sm font-medium text-ink/80">
                            {item.label}
                          </div>
                          <div className="ml-2">
                            {item.subItems.map((sub) => (
                              <Link
                                key={sub.to}
                                to={sub.to}
                                className="block rounded-xl px-4 py-2 text-sm text-ink/70 transition-colors hover:bg-paper-2 hover:text-ink"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={item.to!}
                          className="block rounded-xl px-4 py-2.5 text-sm text-ink/80 transition-colors hover:bg-paper-2 hover:text-ink"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </li>

            {/* Media Dropdown */}
            <li className="dropdown-container relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'media' ? null : 'media')}
                className={`relative rounded-full px-4 py-2 text-sm text-ink/80 transition-colors hover:text-ink ${
                  openDropdown === 'media' ? 'text-ink' : ''
                }`}
              >
                <span className="flex items-center gap-1">
                  Media
                  <svg className="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {openDropdown === 'media' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute left-0 top-full mt-2 w-64 rounded-2xl bg-paper/90 p-2 shadow-xl backdrop-blur-xl"
                >
                  {menuData.media.items.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block rounded-xl px-4 py-2.5 text-sm text-ink/80 transition-colors hover:bg-paper-2 hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </li>
          </ul>

          <Link
            to="/contact"
            className="hidden rounded-full bg-ink px-5 py-2 text-sm text-paper transition-transform hover:scale-[1.03] md:inline-flex"
          >
            Start a project
          </Link>

          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full bg-paper-2 md:hidden"
          >
            <span className="relative block h-3 w-4">
              <motion.span
                animate={{ rotate: open ? 45 : 0, y: open ? 5 : 0 }}
                className="absolute inset-x-0 top-0 h-0.5 bg-ink"
              />
              <motion.span
                animate={{ rotate: open ? -45 : 0, y: open ? -5 : 10 }}
                className="absolute inset-x-0 bottom-0 h-0.5 bg-ink"
              />
            </span>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-6 mt-2 max-h-[80vh] overflow-y-auto rounded-3xl bg-paper/90 p-4 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col space-y-1">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="block rounded-2xl px-4 py-3 text-lg text-ink hover:bg-paper-2"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}

              {/* Mobile Sustainability */}
              <li>
                <button
                  onClick={() => setOpenMobileSubmenu(openMobileSubmenu === 'sustainability' ? null : 'sustainability')}
                  className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-lg text-ink hover:bg-paper-2"
                >
                  Sustainability
                  <svg className={`size-4 transition-transform ${openMobileSubmenu === 'sustainability' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openMobileSubmenu === 'sustainability' && (
                  <div className="ml-4 space-y-1 border-l-2 border-paper-2 pl-4">
                    {menuData.sustainability.items.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block rounded-xl px-4 py-2 text-sm text-ink/80 hover:bg-paper-2 hover:text-ink"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              {/* Mobile Ethics */}
              <li>
                <button
                  onClick={() => setOpenMobileSubmenu(openMobileSubmenu === 'ethics' ? null : 'ethics')}
                  className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-lg text-ink hover:bg-paper-2"
                >
                  Ethics & Compliance
                  <svg className={`size-4 transition-transform ${openMobileSubmenu === 'ethics' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openMobileSubmenu === 'ethics' && (
                  <div className="ml-4 space-y-1 border-l-2 border-paper-2 pl-4">
                    {menuData.ethics.items.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block rounded-xl px-4 py-2 text-sm text-ink/80 hover:bg-paper-2 hover:text-ink"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              {/* Mobile What We Do */}
              <li>
                <button
                  onClick={() => setOpenMobileSubmenu(openMobileSubmenu === 'whatWeDo' ? null : 'whatWeDo')}
                  className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-lg text-ink hover:bg-paper-2"
                >
                  What We Do
                  <svg className={`size-4 transition-transform ${openMobileSubmenu === 'whatWeDo' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openMobileSubmenu === 'whatWeDo' && (
                  <div className="ml-4 space-y-2 border-l-2 border-paper-2 pl-4">
                    {menuData.whatWeDo.items.map((item) => (
                      <div key={item.label}>
                        {item.subItems ? (
                          <>
                            <div className="px-4 py-2 text-sm font-medium text-ink/80">
                              {item.label}
                            </div>
                            <div className="ml-2 space-y-1">
                              {item.subItems.map((sub) => (
                                <Link
                                  key={sub.to}
                                  to={sub.to}
                                  className="block rounded-xl px-4 py-2 text-sm text-ink/70 hover:bg-paper-2 hover:text-ink"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          </>
                        ) : (
                          <Link
                            to={item.to!}
                            className="block rounded-xl px-4 py-2 text-sm text-ink/80 hover:bg-paper-2 hover:text-ink"
                          >
                            {item.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>

              {/* Mobile Media */}
              <li>
                <button
                  onClick={() => setOpenMobileSubmenu(openMobileSubmenu === 'media' ? null : 'media')}
                  className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-lg text-ink hover:bg-paper-2"
                >
                  Media
                  <svg className={`size-4 transition-transform ${openMobileSubmenu === 'media' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openMobileSubmenu === 'media' && (
                  <div className="ml-4 space-y-1 border-l-2 border-paper-2 pl-4">
                    {menuData.media.items.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block rounded-xl px-4 py-2 text-sm text-ink/80 hover:bg-paper-2 hover:text-ink"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}