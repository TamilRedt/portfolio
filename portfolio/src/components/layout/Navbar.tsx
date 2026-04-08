"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(l => l.href.slice(1));
      for (const s of sections.reverse()) {
        const el = document.getElementById(s);
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActive(s); break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-[rgba(0,245,255,0.1)]" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div
            className="text-xl font-black"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              color: "var(--neon-cyan)",
              textShadow: "0 0 15px var(--neon-cyan)",
            }}
          >
            AC
          </div>
          <div className="hidden sm:block text-xs tracking-widest text-slate-500 group-hover:text-[var(--neon-cyan)] transition-colors"
            style={{ fontFamily: "'Share Tech Mono'" }}>
            /PORTFOLIO
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="relative text-sm tracking-widest transition-all duration-200 group"
                style={{
                  fontFamily: "'Share Tech Mono'",
                  color: active === href.slice(1) ? "var(--neon-cyan)" : "rgba(224,232,255,0.6)",
                }}
              >
                <span className="group-hover:text-[var(--neon-cyan)] transition-colors">
                  {label}
                </span>
                {active === href.slice(1) && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 right-0 h-px"
                    style={{ background: "var(--neon-cyan)", boxShadow: "0 0 8px var(--neon-cyan)" }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume button */}
        <a
          href="/resume.pdf"
          download
          className="hidden md:flex items-center gap-2 px-4 py-2 text-xs tracking-widest border transition-all duration-300 hover:bg-[rgba(0,245,255,0.1)]"
          style={{
            fontFamily: "'Share Tech Mono'",
            borderColor: "var(--neon-cyan)",
            color: "var(--neon-cyan)",
            boxShadow: "0 0 10px rgba(0,245,255,0.2)",
          }}
        >
          <span>RESUME</span>
          <span>↓</span>
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
        >
          {[0, 1, 2].map(i => (
            <motion.span
              key={i}
              className="block h-px w-6 bg-[var(--neon-cyan)]"
              animate={open
                ? i === 0 ? { rotate: 45, y: 8 } : i === 1 ? { opacity: 0 } : { rotate: -45, y: -8 }
                : { rotate: 0, y: 0, opacity: 1 }
              }
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-[rgba(0,245,255,0.1)]"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="text-sm tracking-widest text-slate-400 hover:text-[var(--neon-cyan)] transition-colors"
                    style={{ fontFamily: "'Share Tech Mono'" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-widest border border-[var(--neon-cyan)] text-[var(--neon-cyan)]"
                  style={{ fontFamily: "'Share Tech Mono'" }}
                >
                  DOWNLOAD RESUME ↓
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
