"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [greeting, setGreeting] = useState("morning");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("morning");
    else if (hour < 18) setGreeting("afternoon");
    else setGreeting("evening");

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 2.2, duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-black/5 py-4" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 flex items-center justify-between">
        
        {/* Logo / Greeting Block */}
        <Link href="/" className="flex flex-col group">
          <p className="text-sm font-medium text-disable mb-1 transition-colors group-hover:text-foreground">
            Good {greeting}!
          </p>
          <div className="font-heading font-semibold text-lg leading-none overflow-hidden relative h-[20px]">
            <motion.div 
              className="absolute flex flex-col transition-transform duration-500 group-hover:-translate-y-[20px]"
            >
              <div className="h-[20px] flex items-center">Tamilarasan</div>
              <div className="h-[20px] flex items-center cl-txt-orange">Web Developer</div>
            </motion.div>
          </div>
        </Link>

        {/* Socials - Desktop */}
        <div className="hidden md:flex items-center gap-2 text-sm font-medium">
          <span className="cl-txt-disable mr-2">Socials</span>
          <span className="cl-txt-disable">/</span>
          <a href="#" className="txt-link px-2 hover:text-accent-orange transition-colors">li</a>
          <span className="cl-txt-disable">/</span>
          <a href="#" className="txt-link px-2 hover:text-accent-orange transition-colors">dr</a>
          <span className="cl-txt-disable">/</span>
          <a href="#" className="txt-link px-2 hover:text-accent-orange transition-colors">tw</a>
        </div>

        {/* Action Button & Menu Toggle */}
        <div className="flex items-center gap-8">
          <a 
            href="mailto:arasanredt@gmail.com" 
            className="hidden md:block font-heading font-semibold text-lg cl-txt-orange relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-accent-orange after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-300"
          >
            Let's talk!
          </a>
          
          <button className="text-sm font-medium uppercase tracking-wider txt-link">
            Menu
          </button>
        </div>

      </div>
    </motion.header>
  );
}
