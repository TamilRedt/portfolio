export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-[1600px] mx-auto px-6 grid md:grid-cols-2 gap-12">
        
        <div>
          <h2 className="font-heading font-bold text-5xl mb-8">Let's build<br /><span className="text-accent-orange">together.</span></h2>
          <a href="mailto:arasanredt@gmail.com" className="text-xl font-medium txt-link after:bg-background">
            arasanredt@gmail.com
          </a>
        </div>

        <div className="flex flex-col md:items-end justify-between">
          <div className="flex gap-8 text-lg font-medium mb-12">
            <a href="#" className="txt-link after:bg-background hover:text-accent-orange transition-colors">LinkedIn</a>
            <a href="#" className="txt-link after:bg-background hover:text-accent-orange transition-colors">GitHub</a>
            <a href="#" className="txt-link after:bg-background hover:text-accent-orange transition-colors">Twitter/X</a>
          </div>
          
          <div className="text-sm text-background/50 uppercase tracking-widest">
            © {new Date().getFullYear()} Tamilarasan. Built with Next.js & Framer Motion.
          </div>
        </div>

      </div>
    </footer>
  );
}
