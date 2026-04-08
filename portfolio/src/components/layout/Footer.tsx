"use client";
import { Github, Linkedin, Twitter, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[rgba(0,245,255,0.08)] py-12 grid-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Terminal size={16} style={{ color: "var(--neon-cyan)" }} />
            <span className="text-sm text-slate-500" style={{ fontFamily: "'Share Tech Mono'" }}>
              alex@cipher:~$ <span style={{ color: "var(--neon-cyan)" }}>echo "Built with passion"</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-10 h-10 flex items-center justify-center border border-[rgba(0,245,255,0.2)] hover:border-[var(--neon-cyan)] transition-colors group"
                style={{ color: "rgba(224,232,255,0.4)" }}
                aria-label={label}
              >
                <Icon size={16} className="group-hover:text-[var(--neon-cyan)] transition-colors" />
              </motion.a>
            ))}
          </div>

          <div className="text-xs text-slate-600" style={{ fontFamily: "'Share Tech Mono'" }}>
            © 2024 ALEX CIPHER. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
