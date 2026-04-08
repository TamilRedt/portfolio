import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

export const metadata: Metadata = {
  title: "Tamil Arasan| Developer & Security Researcher",
  description: "Full-stack developer and cybersecurity enthusiast. Building secure, performant applications and exploring the frontier of digital defense.",
  keywords: ["developer", "cybersecurity", "portfolio", "full-stack", "react", "nextjs"],
  openGraph: {
    title: "Tamil Arasan| Developer & Security Researcher",
    description: "Full-stack developer and cybersecurity enthusiast.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&family=Rajdhani:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#020408] text-slate-200 antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
