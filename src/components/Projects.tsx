"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    { title: "HouseOfDev", role: "Web Dev & Automation", year: "2024" },
    { title: "Sudersan Clinic", role: "UI/UX & Frontend", year: "2023" },
    { title: "AI Agent System", role: "Backend & Logic", year: "2023" },
    { title: "Client Dashboard", role: "Full Stack", year: "2022" },
  ];

  return (
    <section className="py-32 bg-background">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20">
          <h2 className="font-heading font-black uppercase text-[8vw] leading-[0.85] tracking-tighter flex flex-col">
            <span>Projects I</span>
            <div className="flex items-start gap-4">
              <span>worked on</span>
              <span className="text-2xl text-disable mt-2 font-medium tracking-normal">(Portfolio)</span>
            </div>
          </h2>
        </div>

        {/* Project List */}
        <div className="border-t border-black/10">
          {projects.map((project, index) => (
            <a key={index} href="#" className="group block border-b border-black/10 py-12 relative overflow-hidden">
              {/* Background Hover Fill */}
              <div className="absolute inset-0 bg-foreground scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-[0.76,0,0.24,1]" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 px-4">
                <h3 className="font-heading font-bold text-5xl md:text-6xl group-hover:text-background transition-colors duration-500">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-12 text-lg font-medium text-disable group-hover:text-background/70 transition-colors duration-500">
                  <span className="hidden md:block w-48">{project.role}</span>
                  <span>{project.year}</span>
                  <div className="w-12 h-12 rounded-full border border-black/10 group-hover:border-background/20 flex items-center justify-center group-hover:bg-accent-orange group-hover:text-white transition-all duration-500">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
