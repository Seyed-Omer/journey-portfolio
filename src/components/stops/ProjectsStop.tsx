import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

const techIcons: Record<string, string> = {
  Figma: "🎨",
  "HTML/CSS": "🌐",
  "HTML5/CSS": "📱",
};

const ProjectsStop = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="absolute left-1/3 top-1/2 w-72 h-72 rounded-full opacity-8 blur-[100px]" style={{ background: "hsl(185 100% 50%)" }} />

      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-display neon-border text-primary mb-4">
            🚏 Stop 5
          </span>
          <h2 className="text-3xl md:text-4xl font-display neon-text">
            Project Showcase
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {portfolioData.projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="glass rounded-2xl p-6 group cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, type: "spring" }}
              whileHover={{ y: -8 }}
            >
              {/* Hover gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{techIcons[proj.tech] || "🚀"}</span>
                    <h3 className="text-base font-display text-foreground group-hover:text-primary transition-colors duration-300">
                      {proj.title}
                    </h3>
                  </div>
                  <span className="text-xs text-muted-foreground font-display">{proj.year}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{proj.description}</p>
                <motion.span
                  className="text-xs px-3 py-1 rounded-full neon-border text-primary inline-block"
                  whileHover={{ scale: 1.1 }}
                >
                  {proj.tech}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsStop;
