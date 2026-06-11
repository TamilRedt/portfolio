"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Asterisk, Code2, Database, Layout, Server } from "lucide-react";
import { useRef } from "react";

const Marquee = ({ text, reverse, colorClass }: { text: string[], reverse?: boolean, colorClass: string }) => {
  return (
    <div className={`py-6 overflow-hidden flex whitespace-nowrap ${colorClass}`}>
      <motion.div
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
        className="flex items-center gap-12"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-12">
            {text.map((item, idx) => (
              <div key={idx} className="flex items-center gap-6">
                <span className="font-heading font-bold text-3xl uppercase">{item}</span>
                <Asterisk size={32} className="animate-spin-slow" />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function Intro() {
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["0 1", "1 0.5"]
  });

  const blurValue = useTransform(scrollYProgress, [0, 1], ["blur(10px)", "blur(0px)"]);
  const opacityValue = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <section className="relative pt-32 bg-background">
      <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-[1fr_2fr] gap-16 mb-32">
        
        {/* Tools / Industry Leaders Equivalent */}
        <div>
          <div className="w-full h-[1px] bg-black/10 mb-8" />
          <h4 className="font-heading font-semibold text-lg mb-8">Technologies I use</h4>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex items-center gap-3 text-disable hover:text-foreground transition-colors"><Code2 size={24} /> Next.js</div>
            <div className="flex items-center gap-3 text-disable hover:text-foreground transition-colors"><Layout size={24} /> Tailwind CSS</div>
            <div className="flex items-center gap-3 text-disable hover:text-foreground transition-colors"><Database size={24} /> Supabase</div>
            <div className="flex items-center gap-3 text-disable hover:text-foreground transition-colors"><Server size={24} /> Vercel</div>
          </div>
        </div>

        {/* Blur Fading Text */}
        <div className="relative">
          <motion.div ref={textRef} style={{ filter: blurValue, opacity: opacityValue }} className="font-heading text-3xl md:text-5xl font-semibold leading-tight text-foreground">
            <span className="text-xl md:text-2xl text-disable block mb-6 font-sans font-normal">(Intro)</span>
            Digital transformation should be intuitive, accessible, and empowering. I use modern web technologies to create solutions that resonate with your customers.
            <br /><br />
            By applying clean design, robust architecture, and strategic automation, I’ve helped local businesses improve customer experience, increase engagement, and drive growth.
          </motion.div>
        </div>

      </div>

      {/* Double Marquee */}
      <div className="relative flex flex-col">
        <Marquee 
          text={["4 Years Experience", "Full Stack Developer", "10+ Projects Delivered"]} 
          colorClass="bg-foreground text-background" 
        />
        <Marquee 
          text={["Product Design", "Brand Strategy", "Visual Design"]} 
          colorClass="bg-accent-orange text-white" 
          reverse 
        />
      </div>
    </section>
  );
}
