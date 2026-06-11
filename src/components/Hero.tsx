"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { useEffect, useState } from "react";

const slidingWords = ["Web", "Startups", "Business", "Future"];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % slidingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-end overflow-hidden">
      
      {/* Background Depth/Parallax Placeholder */}
      <div className="absolute inset-0 -z-10 bg-[#e3e0d8]">
        {/* We use a subtle noise or gradient to match the premium feel since we lack the exact WebGL depth map photo */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 w-full relative z-10 flex flex-col gap-12">
        
        {/* Top Info Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 text-sm font-medium uppercase tracking-widest text-disable">
              <span className="w-12 h-[1px] bg-disable" />
              <ul className="flex gap-4">
                <li>Website Design</li>
                <li>AI Automation</li>
                <li>Dashboards</li>
              </ul>
              <span className="w-12 h-[1px] bg-disable hidden md:block" />
            </div>

            <a href="mailto:arasanredt@gmail.com" className="group flex items-center gap-3 font-heading font-bold text-xl hover:text-accent-orange transition-colors">
              <span className="txt-link">How can I help?</span>
              <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-accent-orange group-hover:border-accent-orange group-hover:text-white transition-all">
                <ArrowDownRight size={18} />
              </div>
            </a>
          </div>

          <div className="max-w-sm">
            <p className="text-disable font-medium text-lg leading-snug">
              I'm a web developer & automation builder specialized in digital transformation. I work for startups, local businesses, and modern brands.
            </p>
          </div>
        </motion.div>

        {/* Massive Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7, duration: 0.8 }}
          className="font-heading font-black uppercase text-[12vw] leading-[0.85] tracking-tighter"
        >
          <div className="flex flex-col">
            <span>Design</span>
            <div className="flex items-center gap-6">
              <span>for</span>
              <div className="h-[12vw] overflow-hidden cl-txt-orange relative w-full">
                <motion.div
                  animate={{ y: `-${currentWord * 100}%` }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.8 }}
                  className="absolute inset-0 flex flex-col"
                >
                  {slidingWords.map((word) => (
                    <div key={word} className="h-full flex items-center">{word}</div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
