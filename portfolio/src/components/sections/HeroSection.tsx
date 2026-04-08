"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Shield, Code2, Terminal } from "lucide-react";

const roles = [
  "FULL-STACK DEVELOPER",
  "CYBERSECURITY RESEARCHER",
  "PENETRATION TESTER",
  "OPEN SOURCE CONTRIBUTOR",
];

function TypingEffect() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((roleIdx + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <span
      className="inline-block text-lg md:text-xl tracking-[0.25em]"
      style={{ fontFamily: "'Share Tech Mono'", color: "var(--neon-cyan)" }}
    >
      {displayed}
      <span className="animate-pulse">_</span>
    </span>
  );
}

/* Particle Canvas */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    let raf: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 245, 255, ${p.opacity})`;
        ctx.fill();

        // Connect close particles
        particles.slice(i + 1).forEach(p2 => {
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 245, 255, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg scanlines"
    >
      <ParticleCanvas />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, var(--neon-cyan), transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, var(--neon-purple), transparent 70%)", filter: "blur(60px)" }} />

      {/* Corner brackets */}
      {[
        "top-20 left-8 border-t border-l",
        "top-20 right-8 border-t border-r",
        "bottom-20 left-8 border-b border-l",
        "bottom-20 right-8 border-b border-r",
      ].map((cls, i) => (
        <motion.div
          key={i}
          className={`absolute ${cls} w-16 h-16`}
          style={{ borderColor: "rgba(0,245,255,0.3)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 + i * 0.1 }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 glass text-xs tracking-widest"
          style={{ fontFamily: "'Share Tech Mono'" }}
        >
          <span className="w-2 h-2 rounded-full bg-[var(--neon-green)] animate-pulse"
            style={{ boxShadow: "0 0 8px var(--neon-green)" }} />
          <span className="text-slate-400">AVAILABLE FOR OPPORTUNITIES</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-4 tracking-tight"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          <span
            className="glitch"
            data-text="ALEX"
            style={{
              color: "white",
              textShadow: "0 0 40px rgba(255,255,255,0.1)",
            }}
          >
            ALEX
          </span>
          <br />
          <span
            className="glitch"
            data-text="CIPHER"
            style={{
              color: "var(--neon-cyan)",
              textShadow: "0 0 30px var(--neon-cyan), 0 0 60px rgba(0,245,255,0.3)",
            }}
          >
            CIPHER
          </span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="h-8 mb-10"
        >
          <TypingEffect />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="max-w-2xl mx-auto text-base md:text-lg text-slate-400 mb-12 leading-relaxed font-light"
          style={{ fontFamily: "'Rajdhani'" }}
        >
          Building secure, high-performance applications at the intersection of
          software engineering and cybersecurity. I write code that's both elegant and impenetrable.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative px-8 py-3 text-sm tracking-widest font-semibold overflow-hidden transition-all duration-300"
            style={{
              fontFamily: "'Share Tech Mono'",
              background: "var(--neon-cyan)",
              color: "#020408",
              boxShadow: "0 0 20px rgba(0,245,255,0.4)",
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Code2 size={14} />
              VIEW PROJECTS
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
          </a>

          <a
            href="#contact"
            className="group px-8 py-3 text-sm tracking-widest font-semibold border transition-all duration-300 hover:bg-[rgba(0,245,255,0.08)]"
            style={{
              fontFamily: "'Share Tech Mono'",
              borderColor: "var(--neon-cyan)",
              color: "var(--neon-cyan)",
            }}
          >
            <span className="flex items-center gap-2">
              <Shield size={14} />
              HIRE ME
            </span>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto"
        >
          {[
            { value: "3+", label: "YEARS EXP" },
            { value: "40+", label: "PROJECTS" },
            { value: "15+", label: "CVEs FOUND" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-black" style={{ fontFamily: "'Orbitron'", color: "var(--neon-cyan)" }}>
                {value}
              </div>
              <div className="text-xs tracking-widest text-slate-500 mt-1" style={{ fontFamily: "'Share Tech Mono'" }}>
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest text-slate-600" style={{ fontFamily: "'Share Tech Mono'" }}>
          SCROLL
        </span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={16} style={{ color: "var(--neon-cyan)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
