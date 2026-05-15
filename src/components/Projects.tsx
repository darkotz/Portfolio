import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "QM Group",
    category: "Landing Page",
    image: "/project_1.png",
    link: "https://www.qmgroup.se"
  },
  {
    id: 2,
    title: "Ovolo",
    category: "E-Commerce",
    image: "/project_2.png",
    link: "https://ovolo-alpha.vercel.app"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-background border-b border-border">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            Output <span className="text-muted-foreground">/ Works</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.a
              key={project.id}
              href={project.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group block"
            >
              <div className="brutal-border overflow-hidden relative aspect-video bg-accent mb-6 brutal-shadow-hover transition-all duration-300">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              <div className="flex justify-between items-end border-b border-border pb-4">
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-wide group-hover:text-muted-foreground transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-muted-foreground mt-2 uppercase tracking-widest">
                    {project.category}
                  </p>
                </div>
                <div className="text-muted-foreground font-mono text-sm group-hover:text-foreground transition-colors">
                  [VIEW]
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
