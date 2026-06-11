import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tamilarasan | Web Developer & AI Automation Builder",
  description: "I build modern websites, business dashboards, automation systems, and online tools that help local businesses move from offline operations to digital systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${manrope.variable} font-sans bg-background text-foreground antialiased selection:bg-accent-orange selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
