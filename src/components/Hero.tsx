import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Abstract Background Element */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent opacity-20 blur-3xl rounded-none transform rotate-45 pointer-events-none" />
      
      <div className="z-10 max-w-5xl w-full px-6 flex flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-muted-foreground uppercase tracking-[0.3em] text-sm md:text-base mb-4 brutal-border inline-block px-4 py-2">
            System Online
          </h2>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-foreground leading-none flex flex-col">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">
              Nikita
            </span>
            <span className="text-5xl md:text-7xl lg:text-8xl mt-2 font-bold tracking-tight">
              Web Developer
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex items-center gap-6"
        >
          <a href="#projects" className="brutal-border px-8 py-4 text-sm font-mono uppercase hover:bg-foreground hover:text-background transition-colors duration-300">
            View Protocol // Works
          </a>
          <a href="#contact" className="text-sm font-mono uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
            Initiate Contact
          </a>
        </motion.div>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-border" />
      <div className="absolute left-6 top-0 h-full w-px bg-border hidden md:block" />
      <div className="absolute right-6 top-0 h-full w-px bg-border hidden md:block" />
    </section>
  );
}
