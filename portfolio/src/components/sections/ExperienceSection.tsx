"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    period: "2023 — PRESENT",
    role: "Senior Security Engineer",
    company: "CyberNova Labs",
    type: "FULL-TIME",
    color: "var(--neon-cyan)",
    desc: "Lead security architecture for a cloud-native SaaS platform serving 500K+ users. Built automated threat detection pipeline that reduced MTTR by 70%. Mentoring team of 4 junior engineers.",
    achievements: ["Reduced attack surface by 60%", "Built zero-trust auth layer", "Led SOC2 Type II compliance"],
  },
  {
    period: "2022 — 2023",
    role: "Full-Stack Developer",
    company: "Stealth Startup",
    type: "CONTRACT",
    color: "var(--neon-purple)",
    desc: "Architected and built a real-time collaboration platform from zero to 10K daily active users. Implemented end-to-end encryption for all communications.",
    achievements: ["Next.js + WebSocket architecture", "E2E encrypted messaging", "0→10K DAU in 8 months"],
  },
  {
    period: "2021 — 2022",
    role: "Penetration Tester",
    company: "RedTeam Security",
    type: "FULL-TIME",
    color: "var(--neon-green)",
    desc: "Conducted 50+ penetration tests for enterprise clients across fintech, healthcare, and government sectors. Discovered and reported 15 critical CVEs responsibly.",
    achievements: ["15 CVEs disclosed", "50+ pentest engagements", "Hall of Fame: 3 major platforms"],
  },
  {
    period: "2020 — 2021",
    role: "Junior Developer",
    company: "DevCraft Agency",
    type: "FULL-TIME",
    color: "var(--neon-pink)",
    desc: "Developed full-stack web applications for SMB clients. Introduced security-first development practices adopted by entire team.",
    achievements: ["React, Node.js, PostgreSQL", "Introduced SAST tooling", "8 production apps shipped"],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 opacity-3 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--neon-purple), transparent 70%)", filter: "blur(100px)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-xs tracking-[0.4em] text-slate-500 mb-3" style={{ fontFamily: "'Share Tech Mono'" }}>
            SECTION_04
          </div>
          <h2 className="section-title text-4xl md:text-5xl mb-4">
            EXPERIENCE <span style={{ color: "var(--neon-cyan)", textShadow: "0 0 20px var(--neon-cyan)" }}>LOG</span>
          </h2>
          <div className="h-px w-24 mx-auto" style={{ background: "var(--neon-cyan)", boxShadow: "0 0 8px var(--neon-cyan)" }} />
        </motion.div>

        <div ref={ref} className="relative">
          {/* Vertical timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px origin-top"
            style={{
              background: "linear-gradient(180deg, var(--neon-cyan), rgba(0,245,255,0.1))",
              boxShadow: "0 0 8px var(--neon-cyan)",
              transform: "translateX(-50%)",
            }}
          />

          <div className="space-y-12">
            {experiences.map(({ period, role, company, type, color, desc, achievements }, i) => {
              const isRight = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isRight ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.2, duration: 0.7 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${isRight ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Dot on timeline */}
                  <div
                    className="absolute left-0 md:left-1/2 top-6 w-3 h-3 rounded-full border-2 -translate-x-[5px] md:-translate-x-1/2 z-10"
                    style={{
                      background: "#020408",
                      borderColor: color,
                      boxShadow: `0 0 12px ${color}`,
                    }}
                  />

                  {/* Content card */}
                  <div className={`md:w-[calc(50%-2rem)] ml-6 md:ml-0 ${isRight ? "md:pr-10" : "md:pl-10"}`}>
                    <motion.div
                      whileHover={{ borderColor: `${color}44` }}
                      className="glass p-6 transition-all duration-300"
                      style={{ borderColor: "rgba(0,245,255,0.06)" }}
                    >
                      {/* Period + type badge */}
                      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                        <span className="text-xs text-slate-500" style={{ fontFamily: "'Share Tech Mono'" }}>
                          {period}
                        </span>
                        <span
                          className="text-xs px-2 py-0.5 border"
                          style={{
                            fontFamily: "'Share Tech Mono'",
                            color,
                            borderColor: `${color}44`,
                            fontSize: "0.6rem",
                          }}
                        >
                          {type}
                        </span>
                      </div>

                      <h3 className="text-lg font-black mb-1" style={{ fontFamily: "'Orbitron'", color: "white", fontSize: "0.9rem" }}>
                        {role}
                      </h3>
                      <p className="text-sm mb-3" style={{ color, fontFamily: "'Share Tech Mono'" }}>
                        {company}
                      </p>
                      <p className="text-sm text-slate-400 leading-relaxed mb-4">{desc}</p>

                      {/* Achievements */}
                      <ul className="space-y-1.5">
                        {achievements.map((a, ai) => (
                          <li key={ai} className="flex items-start gap-2 text-xs text-slate-500"
                            style={{ fontFamily: "'Share Tech Mono'" }}>
                            <span style={{ color }}>▸</span>
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
