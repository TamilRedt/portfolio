"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    label: "FRONTEND",
    color: "var(--neon-cyan)",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 80 },
      { name: "Three.js", level: 65 },
      { name: "Vue.js", level: 70 },
    ],
  },
  {
    label: "BACKEND",
    color: "var(--neon-purple)",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "Python / FastAPI", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 78 },
      { name: "Redis", level: 72 },
      { name: "GraphQL", level: 75 },
    ],
  },
  {
    label: "SECURITY",
    color: "var(--neon-green)",
    skills: [
      { name: "Burp Suite", level: 90 },
      { name: "Metasploit", level: 82 },
      { name: "Wireshark", level: 88 },
      { name: "Nmap / Masscan", level: 92 },
      { name: "Ghidra / IDA", level: 70 },
      { name: "OSINT Tooling", level: 85 },
    ],
  },
  {
    label: "DEVOPS & CLOUD",
    color: "var(--neon-pink)",
    skills: [
      { name: "Docker / K8s", level: 78 },
      { name: "AWS / GCP", level: 74 },
      { name: "CI/CD Pipelines", level: 80 },
      { name: "Linux / Bash", level: 92 },
      { name: "Terraform", level: 68 },
      { name: "Nginx / Caddy", level: 82 },
    ],
  },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs text-slate-400 group-hover:text-white transition-colors"
          style={{ fontFamily: "'Share Tech Mono'" }}>
          {name}
        </span>
        <span className="text-xs" style={{ color, fontFamily: "'Share Tech Mono'" }}>
          {level}%
        </span>
      </div>
      <div className="h-[2px] bg-[rgba(255,255,255,0.05)] rounded overflow-hidden">
        <motion.div
          className="h-full rounded"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.0, delay, ease: "easeOut" }}
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})`, boxShadow: `0 0 6px ${color}` }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Background glow blobs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 -translate-y-1/2 opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--neon-cyan), transparent)", filter: "blur(80px)" }} />
      <div className="absolute top-1/2 right-0 w-80 h-80 -translate-y-1/2 opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--neon-purple), transparent)", filter: "blur(80px)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-xs tracking-[0.4em] text-slate-500 mb-3" style={{ fontFamily: "'Share Tech Mono'" }}>
            SECTION_02
          </div>
          <h2 className="section-title text-4xl md:text-5xl mb-4">
            TECH <span style={{ color: "var(--neon-cyan)", textShadow: "0 0 20px var(--neon-cyan)" }}>ARSENAL</span>
          </h2>
          <div className="h-px w-24 mx-auto" style={{ background: "var(--neon-cyan)", boxShadow: "0 0 8px var(--neon-cyan)" }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map(({ label, color, skills }, ci) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              className="glass p-6 group hover:border-opacity-50 transition-all duration-300"
              style={{ borderColor: `${color}22` }}
              whileHover={{ borderColor: `${color}55` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-4 w-1 rounded" style={{ background: color, boxShadow: `0 0 8px ${color}` }} />
                <span
                  className="text-xs tracking-[0.3em] font-bold"
                  style={{ fontFamily: "'Orbitron'", color, fontSize: "0.65rem" }}
                >
                  {label}
                </span>
                <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${color}44, transparent)` }} />
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {skills.map(({ name, level }, si) => (
                  <SkillBar key={name} name={name} level={level} color={color} delay={0.3 + si * 0.08} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {["Git", "VS Code", "Obsidian", "Kali Linux", "Proxychains", "Hashcat", "John", "SQLMap", "Shodan", "HTB", "TryHackMe"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-xs tracking-wider border transition-all duration-200 hover:border-[var(--neon-cyan)] hover:text-[var(--neon-cyan)] cursor-default"
              style={{
                fontFamily: "'Share Tech Mono'",
                borderColor: "rgba(0,245,255,0.15)",
                color: "rgba(224,232,255,0.4)",
              }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
