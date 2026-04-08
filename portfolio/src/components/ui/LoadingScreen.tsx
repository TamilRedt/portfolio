"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  const phases = [
    "INITIALIZING SYSTEM...",
    "LOADING MODULES...",
    "ESTABLISHING SECURE CONNECTION...",
    "ACCESS GRANTED",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + Math.random() * 8 + 2;
      });
    }, 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress < 30) setPhase(0);
    else if (progress < 60) setPhase(1);
    else if (progress < 90) setPhase(2);
    else setPhase(3);
  }, [progress]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020408] grid-bg scanlines"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hex decoration */}
      <div className="absolute inset-0 hex-pattern opacity-30" />

      {/* Corner brackets */}
      {[["top-8 left-8", "border-t border-l"], ["top-8 right-8", "border-t border-r"],
        ["bottom-8 left-8", "border-b border-l"], ["bottom-8 right-8", "border-b border-r"]].map(([pos, border], i) => (
        <motion.div
          key={i}
          className={`absolute ${pos} w-12 h-12 border-[var(--neon-cyan)] ${border}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          style={{ borderColor: "var(--neon-cyan)" }}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center gap-8 w-80">
        {/* Logo / Name */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div
            className="text-4xl font-black mb-1 glitch"
            data-text="AC"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              color: "var(--neon-cyan)",
              textShadow: "0 0 20px var(--neon-cyan)",
            }}
          >
            AC
          </div>
          <div className="text-xs tracking-[0.5em] text-slate-500" style={{ fontFamily: "'Share Tech Mono'" }}>
            PORTFOLIO_v2.0
          </div>
        </motion.div>

        {/* Progress bar */}
        <div className="w-full space-y-2">
          <div className="h-[2px] bg-slate-800 rounded overflow-hidden">
            <motion.div
              className="h-full rounded"
              style={{
                background: "linear-gradient(90deg, var(--neon-cyan), var(--neon-purple))",
                boxShadow: "0 0 10px var(--neon-cyan)",
                width: `${Math.min(progress, 100)}%`,
              }}
              transition={{ ease: "easeOut" }}
            />
          </div>
          <div className="flex justify-between text-xs" style={{ fontFamily: "'Share Tech Mono'" }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={phase}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-[var(--neon-cyan)]"
              >
                {phases[phase]}
              </motion.span>
            </AnimatePresence>
            <span className="text-slate-500">{Math.min(Math.round(progress), 100)}%</span>
          </div>
        </div>

        {/* Scanning lines effect */}
        <div className="grid grid-cols-4 gap-1 w-full">
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.div
              key={i}
              className="h-1 rounded"
              style={{ background: "var(--neon-cyan)", opacity: 0.3 }}
              animate={{ opacity: [0.1, 0.8, 0.1] }}
              transition={{ duration: 1.5, delay: i * 0.08, repeat: Infinity }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
