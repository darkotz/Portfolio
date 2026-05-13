import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-40 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="font-bold text-xl tracking-tighter uppercase">
          NKT<span className="text-muted-foreground">_WEB</span>
        </a>
        
        <div className="hidden md:flex gap-8 font-mono text-sm uppercase tracking-widest">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Works</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </div>

        <button className="md:hidden flex flex-col gap-1.5 cursor-pointer">
          <div className="w-6 h-0.5 bg-foreground" />
          <div className="w-6 h-0.5 bg-foreground" />
          <div className="w-4 h-0.5 bg-foreground self-end" />
        </button>
      </div>
    </motion.nav>
  );
}
