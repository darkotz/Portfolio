import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-background border-b border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">
              System Specs <br/> <span className="text-muted-foreground">About Me</span>
            </h2>
            
            <div className="space-y-6 font-mono text-sm leading-relaxed text-muted-foreground">
              <p>
                <span className="text-foreground">{"> "} INITIALIZING_PROFILE: </span>
                I'm Nikita, a web developer with 3 years of hands-on experience building robust, dynamic, and visually striking digital experiences.
              </p>
              <p>
                <span className="text-foreground">{"> "} EXP: </span>
                My background includes creating dedicated websites for various campaigns, meaning I understand the intersection of marketing intent and technical execution.
              </p>
              <p>
                <span className="text-foreground">{"> "} STACK: </span>
                React, TypeScript, Tailwind CSS, Modern Tooling. Always exploring the bleeding edge of UI design and development architectures.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="brutal-border p-8 bg-accent relative"
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 bg-foreground" />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-foreground" />
            
            <h3 className="text-xl uppercase font-bold mb-6 tracking-widest">Capabilities</h3>
            <ul className="space-y-4">
              {[
                "Frontend Development",
                "Campaign Websites",
                "UI/UX Implementation",
                "Performance Optimization"
              ].map((skill, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-8 h-px bg-muted-foreground" />
                  <span className="font-mono text-sm text-primary">{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
