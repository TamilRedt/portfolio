"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Code2, Cpu, Lock } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Full-Stack Dev", desc: "React, Next.js, Node.js, Python — end-to-end." },
  { icon: Shield, title: "Security Mindset", desc: "Every line of code reviewed through an attacker's lens." },
  { icon: Cpu, title: "Systems Thinking", desc: "From kernel exploits to cloud architecture." },
  { icon: Lock, title: "Ethical Hacking", desc: "Bug bounty hunter. 15+ CVEs responsibly disclosed." },
];

const skills = [
  { label: "Frontend Development", pct: 92 },
  { label: "Backend Development", pct: 85 },
  { label: "Penetration Testing", pct: 78 },
  { label: "Cloud & DevOps", pct: 72 },
  { label: "Reverse Engineering", pct: 65 },
];

function ProgressBar({ label, pct, delay }: { label: string; pct: number; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm" style={{ fontFamily: "'Share Tech Mono'" }}>
        <span className="text-slate-400">{label}</span>
        <span style={{ color: "var(--neon-cyan)" }}>{pct}%</span>
      </div>
      <div className="h-[3px] bg-[rgba(0,245,255,0.08)] rounded overflow-hidden">
        <motion.div
          className="h-full rounded"
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          style={{
            background: "linear-gradient(90deg, var(--neon-cyan), var(--neon-purple))",
            boxShadow: "0 0 8px var(--neon-cyan)",
          }}
        />
      </div>
    </div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden hex-pattern">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-xs tracking-[0.4em] text-slate-500 mb-3" style={{ fontFamily: "'Share Tech Mono'" }}>
            SECTION_01
          </div>
          <h2 className="section-title text-4xl md:text-5xl mb-4" style={{ color: "white" }}>
            ABOUT <span style={{ color: "var(--neon-cyan)", textShadow: "0 0 20px var(--neon-cyan)" }}>ME</span>
          </h2>
          <div className="h-px w-24 mx-auto" style={{ background: "var(--neon-cyan)", boxShadow: "0 0 8px var(--neon-cyan)" }} />
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: bio */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-5"
            >
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a <span style={{ color: "var(--neon-cyan)" }}>full-stack developer</span> and{" "}
                <span style={{ color: "var(--neon-cyan)" }}>cybersecurity researcher</span> who builds things that are
                both beautiful and secure. I believe the best software is invisible — it just works, while silently
                keeping threats at bay.
              </p>
              <p className="text-base text-slate-400 leading-relaxed">
                From crafting pixel-perfect UIs to dissecting network protocols at 2am — I operate across the full stack.
                My bug bounty work has uncovered critical vulnerabilities in platforms used by millions, earning me a spot
                on multiple Hall of Fames.
              </p>
              <p className="text-base text-slate-400 leading-relaxed">
                When I'm not writing code or hunting bugs, I contribute to open-source security tools,
                write technical articles, and mentor the next generation of security engineers.
              </p>
            </motion.div>

            {/* Terminal snippet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="glass p-4 font-mono text-sm"
              style={{ borderColor: "rgba(0,245,255,0.2)" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-2 text-xs text-slate-500">~/whoami.sh</span>
              </div>
              <div className="space-y-1 text-xs" style={{ fontFamily: "'Share Tech Mono'" }}>
                <div><span style={{ color: "var(--neon-green)" }}>tamil@arsan</span><span className="text-slate-500">:~$</span> <span className="text-slate-300">whoami</span></div>
                <div className="text-slate-400 pl-0">Developer | Security Researcher | CTF Player</div>
                <div className="mt-2"><span style={{ color: "var(--neon-green)" }}>tamil@rasan</span><span className="text-slate-500">:~$</span> <span className="text-slate-300">cat interests.txt</span></div>
                <div className="text-slate-400">["web security", "reverse engineering", "cloud", "ai/ml"]</div>
                <div className="mt-2"><span style={{ color: "var(--neon-green)" }}>tamil@rasan</span><span className="text-slate-500">:~$</span> <span style={{ color: "var(--neon-cyan)" }}>█</span></div>
              </div>
            </motion.div>

            {/* Progress bars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              {skills.map(({ label, pct }, i) => (
                <ProgressBar key={label} label={label} pct={pct} delay={0.7 + i * 0.1} />
              ))}
            </motion.div>
          </div>

          {/* Right: highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15 }}
                whileHover={{ y: -4, borderColor: "rgba(0,245,255,0.5)" }}
                className="glass p-6 group transition-all duration-300"
                style={{ cursor: "default" }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center mb-4 border transition-colors duration-300 group-hover:border-[var(--neon-cyan)]"
                  style={{ borderColor: "rgba(0,245,255,0.3)" }}
                >
                  <Icon size={18} style={{ color: "var(--neon-cyan)" }} />
                </div>
                <h3
                  className="font-bold text-sm tracking-wide mb-2"
                  style={{ fontFamily: "'Orbitron'", color: "white", fontSize: "0.75rem" }}
                >
                  {title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
