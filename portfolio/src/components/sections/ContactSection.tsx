"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Github, Linkedin, Terminal } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Replace with your EmailJS config or backend endpoint
    try {
      // Example EmailJS integration:
      // await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      await new Promise(r => setTimeout(r, 1800)); // Simulate API call
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const contactInfo = [
    { icon: Mail, label: "EMAIL", value: "arasanredt@gmail.com", href: "mailto:alex@cipher.dev" },
    { icon: MapPin, label: "LOCATION", value: "Bangalore, Karnataka, India", href: null },
    { icon: Github, label: "GITHUB", value: "github.com/TamilRedt", href: "https://github.com" },
    { icon: Linkedin, label: "LINKEDIN", value: "linkedin.com/in/alexcipher", href: "https://linkedin.com" },
  ];

  const inputClass = `
    w-full bg-[rgba(0,245,255,0.02)] border border-[rgba(0,245,255,0.12)] px-4 py-3 text-sm
    text-slate-300 placeholder-slate-600 outline-none
    focus:border-[var(--neon-cyan)] focus:bg-[rgba(0,245,255,0.04)]
    transition-all duration-200
  `;

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[300px] -translate-x-1/2 opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, var(--neon-cyan), transparent 70%)", filter: "blur(60px)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-xs tracking-[0.4em] text-slate-500 mb-3" style={{ fontFamily: "'Share Tech Mono'" }}>
            SECTION_05
          </div>
          <h2 className="section-title text-4xl md:text-5xl mb-4">
            INITIATE <span style={{ color: "var(--neon-cyan)", textShadow: "0 0 20px var(--neon-cyan)" }}>CONTACT</span>
          </h2>
          <div className="h-px w-24 mx-auto mb-6" style={{ background: "var(--neon-cyan)", boxShadow: "0 0 8px var(--neon-cyan)" }} />
          <p className="text-slate-400 max-w-lg mx-auto text-sm leading-relaxed">
            Have a project, a vulnerability to report, or want to bring me on board?
            I respond within 24 hours.
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-5 gap-10">
          {/* Left: info panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Status */}
            <div className="glass p-6" style={{ borderColor: "rgba(57,255,20,0.2)" }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--neon-green)] animate-pulse"
                  style={{ boxShadow: "0 0 8px var(--neon-green)" }} />
                <span className="text-xs tracking-widest text-[var(--neon-green)]" style={{ fontFamily: "'Share Tech Mono'" }}>
                  AVAILABLE FOR HIRE
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Currently open to full-time roles, long-term contracts, and interesting freelance projects in
                <span style={{ color: "var(--neon-cyan)" }}> security engineering</span> and
                <span style={{ color: "var(--neon-cyan)" }}> full-stack development</span>.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <motion.div
                  key={label}
                  whileHover={{ x: 4 }}
                  className="glass p-4 flex items-center gap-4 group transition-all duration-200"
                >
                  <div
                    className="w-8 h-8 flex items-center justify-center border flex-shrink-0"
                    style={{ borderColor: "rgba(0,245,255,0.2)", color: "var(--neon-cyan)" }}
                  >
                    <Icon size={14} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-600 mb-0.5" style={{ fontFamily: "'Share Tech Mono'" }}>{label}</div>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer"
                        className="text-sm text-slate-300 hover:text-[var(--neon-cyan)] transition-colors"
                        style={{ fontFamily: "'Share Tech Mono'" }}>
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm text-slate-300" style={{ fontFamily: "'Share Tech Mono'" }}>{value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Resume download */}
            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-3 w-full py-3 text-sm tracking-widest font-semibold border transition-all duration-300 hover:bg-[rgba(0,245,255,0.1)] group"
              style={{
                fontFamily: "'Share Tech Mono'",
                borderColor: "var(--neon-cyan)",
                color: "var(--neon-cyan)",
                boxShadow: "0 0 10px rgba(0,245,255,0.1)",
              }}
            >
              <Terminal size={14} />
              DOWNLOAD RESUME
              <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
            </a>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass p-8 h-full" style={{ borderColor: "rgba(0,245,255,0.1)" }}>
              {/* Form header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1.5">
                  {["#ff5f57", "#febc2e", "#28c840"].map(c => (
                    <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                  ))}
                </div>
                <span className="text-xs text-slate-600 ml-2" style={{ fontFamily: "'Share Tech Mono'" }}>
                  new_message.sh
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-slate-500 mb-2 tracking-widest"
                      style={{ fontFamily: "'Share Tech Mono'" }}>
                      NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className={inputClass}
                      style={{ fontFamily: "'Rajdhani'" }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 mb-2 tracking-widest"
                      style={{ fontFamily: "'Share Tech Mono'" }}>
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className={inputClass}
                      style={{ fontFamily: "'Rajdhani'" }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-500 mb-2 tracking-widest"
                    style={{ fontFamily: "'Share Tech Mono'" }}>
                    MESSAGE *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project or opportunity..."
                    className={inputClass}
                    style={{ fontFamily: "'Rajdhani'", resize: "none" }}
                  />
                </div>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    type="submit"
                    disabled={status === "sending" || status === "sent"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-3 py-3 text-sm tracking-widest font-semibold transition-all duration-300 disabled:opacity-60"
                    style={{
                      fontFamily: "'Share Tech Mono'",
                      background: status === "sent" ? "var(--neon-green)" : "var(--neon-cyan)",
                      color: "#020408",
                      boxShadow: `0 0 20px rgba(0,245,255,0.4)`,
                    }}
                  >
                    {status === "idle" && <><Send size={14} /> SEND MESSAGE</>}
                    {status === "sending" && <><span className="animate-spin">◌</span> TRANSMITTING...</>}
                    {status === "sent" && <>✓ MESSAGE SENT</>}
                    {status === "error" && <>✗ RETRY</>}
                  </motion.button>

                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 text-sm tracking-widest border transition-all duration-300 hover:bg-[rgba(191,0,255,0.08)]"
                    style={{
                      fontFamily: "'Share Tech Mono'",
                      borderColor: "var(--neon-purple)",
                      color: "var(--neon-purple)",
                    }}
                  >
                    INVITE ME TO YOUR COMPANY
                  </motion.a>
                </div>

                {status === "sent" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-center"
                    style={{ fontFamily: "'Share Tech Mono'", color: "var(--neon-green)" }}
                  >
                    ✓ Transmission successful. I'll respond within 24 hours.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs text-center text-red-400"
                    style={{ fontFamily: "'Share Tech Mono'" }}
                  >
                    ✗ Transmission failed. Please try again or email directly.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
