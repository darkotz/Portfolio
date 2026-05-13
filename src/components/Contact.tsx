import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Initiate <span className="text-muted-foreground">Contact</span>
          </h2>
          <p className="font-mono text-muted-foreground text-sm">
            [ STATUS: AVAILABLE FOR NEW PROTOCOLS ]
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">ID / Name</label>
                <input 
                  type="text" 
                  className="w-full bg-accent border-2 border-border p-4 text-foreground font-mono focus:border-foreground focus:outline-none transition-colors"
                  placeholder="ENTER_NAME"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Network / Email</label>
                <input 
                  type="email" 
                  className="w-full bg-accent border-2 border-border p-4 text-foreground font-mono focus:border-foreground focus:outline-none transition-colors"
                  placeholder="ENTER_EMAIL"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Payload / Message</label>
              <textarea 
                rows={5}
                className="w-full bg-accent border-2 border-border p-4 text-foreground font-mono focus:border-foreground focus:outline-none transition-colors resize-none"
                placeholder="ENTER_DATA"
              />
            </div>

            <button 
              type="button"
              className="w-full brutal-border bg-foreground text-background font-bold uppercase tracking-widest py-4 hover:bg-background hover:text-foreground transition-all duration-300 brutal-shadow"
            >
              Transmit Data
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
