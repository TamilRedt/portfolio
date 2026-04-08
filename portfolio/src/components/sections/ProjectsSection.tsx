"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink, Shield, Code2, Lock, Cpu } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SENTINEL — WAF",
    subtitle: "Web Application Firewall",
    desc: "A high-performance, rule-based WAF built in Rust. Detects and blocks SQLi, XSS, SSRF, path traversal, and zero-day payload patterns in real time with sub-millisecond latency.",
    tech: ["Rust", "eBPF", "Redis", "Docker", "Nginx"],
    icon: Shield,
    color: "var(--neon-cyan)",
    github: "https://github.com",
    demo: "https://demo.example.com",
    stars: 312,
    category: "SECURITY",
  },
  {
    id: 2,
    title: "NEXUS DASHBOARD",
    subtitle: "Security Operations Center",
    desc: "Real-time threat intelligence platform aggregating data from 20+ feeds. Visualizes attack vectors, geo-maps intrusions, and auto-generates incident reports.",
    tech: ["Next.js", "WebSockets", "Python", "PostgreSQL", "D3.js"],
    icon: Cpu,
    color: "var(--neon-purple)",
    github: "https://github.com",
    demo: "https://demo.example.com",
    stars: 189,
    category: "FULLSTACK",
  },
  {
    id: 3,
    title: "PHANTOM PROXY",
    subtitle: "Anonymous Routing Network",
    desc: "An onion-routing implementation for privacy-first browsing. Features multi-hop encryption, traffic obfuscation, and a lightweight browser extension.",
    tech: ["Go", "TLS 1.3", "React", "gRPC", "Kubernetes"],
    icon: Lock,
    color: "var(--neon-green)",
    github: "https://github.com",
    demo: null,
    stars: 450,
    category: "SECURITY",
  },
  {
    id: 4,
    title: "CIPHER CMS",
    subtitle: "Headless Content Platform",
    desc: "A security-first headless CMS with built-in RBAC, audit logging, encrypted field storage, and a GraphQL API. Deployed by 200+ organizations.",
    tech: ["Node.js", "GraphQL", "MongoDB", "React", "JWT"],
    icon: Code2,
    color: "var(--neon-pink)",
    github: "https://github.com",
    demo: "https://demo.example.com",
    stars: 278,
    category: "FULLSTACK",
  },
  {
    id: 5,
    title: "CVE HUNTER",
    subtitle: "Automated Vulnerability Scanner",
    desc: "ML-powered vulnerability detection tool that analyzes codebases for security anti-patterns. Integrates with GitHub Actions for continuous security scanning.",
    tech: ["Python", "TensorFlow", "FastAPI", "Docker", "Git"],
    icon: Shield,
    color: "var(--neon-cyan)",
    github: "https://github.com",
    demo: "https://demo.example.com",
    stars: 520,
    category: "SECURITY",
  },
  {
    id: 6,
    title: "ZERO TRUST API",
    subtitle: "Authentication Gateway",
    desc: "Enterprise-grade zero-trust API gateway with mTLS, SPIFFE/SPIRE identity, rate limiting, and real-time anomaly detection using behavioral analysis.",
    tech: ["Go", "mTLS", "SPIFFE", "Redis", "Prometheus"],
    icon: Lock,
    color: "var(--neon-purple)",
    github: "https://github.com",
    demo: null,
    stars: 203,
    category: "SECURITY",
  },
];

const filters = ["ALL", "SECURITY", "FULLSTACK"];

export default function ProjectsSection() {
  const [active, setActive] = useState("ALL");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = active === "ALL" ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" className="relative py-32 overflow-hidden hex-pattern">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-xs tracking-[0.4em] text-slate-500 mb-3" style={{ fontFamily: "'Share Tech Mono'" }}>
            SECTION_03
          </div>
          <h2 className="section-title text-4xl md:text-5xl mb-4">
            FEATURED <span style={{ color: "var(--neon-cyan)", textShadow: "0 0 20px var(--neon-cyan)" }}>PROJECTS</span>
          </h2>
          <div className="h-px w-24 mx-auto mb-10" style={{ background: "var(--neon-cyan)", boxShadow: "0 0 8px var(--neon-cyan)" }} />

          {/* Filters */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="px-5 py-2 text-xs tracking-widest transition-all duration-200"
                style={{
                  fontFamily: "'Share Tech Mono'",
                  background: active === f ? "var(--neon-cyan)" : "transparent",
                  color: active === f ? "#020408" : "rgba(224,232,255,0.4)",
                  border: `1px solid ${active === f ? "var(--neon-cyan)" : "rgba(0,245,255,0.15)"}`,
                  boxShadow: active === f ? "0 0 15px rgba(0,245,255,0.4)" : "none",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(({ id, title, subtitle, desc, tech, icon: Icon, color, github, demo, stars, category }) => (
            <motion.div
              key={id}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="glass group relative overflow-hidden transition-all duration-300 flex flex-col"
              style={{ borderColor: "rgba(0,245,255,0.08)" }}
            >
              {/* Top color accent */}
              <div className="h-[2px]" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at top left, ${color}08, transparent 60%)` }}
              />

              <div className="p-6 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 flex items-center justify-center border"
                      style={{ borderColor: `${color}44`, color }}
                    >
                      <Icon size={14} />
                    </div>
                    <span
                      className="text-xs tracking-widest px-2 py-0.5"
                      style={{
                        fontFamily: "'Share Tech Mono'",
                        color: color,
                        border: `1px solid ${color}33`,
                        fontSize: "0.6rem",
                      }}
                    >
                      {category}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-500" style={{ fontFamily: "'Share Tech Mono'" }}>
                    <span>★</span>
                    <span>{stars}</span>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-black mb-1"
                  style={{ fontFamily: "'Orbitron'", color: "white", fontSize: "0.9rem" }}
                >
                  {title}
                </h3>
                <p className="text-xs text-slate-500 mb-3" style={{ fontFamily: "'Share Tech Mono'" }}>{subtitle}</p>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-5">{desc}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {tech.map(t => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 border"
                      style={{
                        fontFamily: "'Share Tech Mono'",
                        borderColor: "rgba(255,255,255,0.06)",
                        color: "rgba(224,232,255,0.4)",
                        fontSize: "0.6rem",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-slate-400 hover:text-[var(--neon-cyan)] transition-colors"
                    style={{ fontFamily: "'Share Tech Mono'" }}
                  >
                    <Github size={13} />
                    <span>SOURCE</span>
                  </a>
                  {demo && (
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs transition-colors"
                      style={{ fontFamily: "'Share Tech Mono'", color }}
                    >
                      <ExternalLink size={13} />
                      <span>LIVE DEMO</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 text-sm tracking-widest border hover:bg-[rgba(0,245,255,0.08)] transition-all duration-300"
            style={{
              fontFamily: "'Share Tech Mono'",
              borderColor: "rgba(0,245,255,0.3)",
              color: "var(--neon-cyan)",
            }}
          >
            <Github size={14} />
            VIEW ALL ON GITHUB
          </a>
        </motion.div>
      </div>
    </section>
  );
}
