import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

const ProjectsStop = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <motion.h2
          className="text-2xl md:text-3xl font-display neon-text mb-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          🚀 Stop 5 — Project Showcase
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {portfolioData.projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="glass rounded-xl p-6 group hover:neon-box transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-base font-display text-foreground group-hover:text-primary transition-colors">
                  {proj.title}
                </h3>
                <span className="text-xs text-muted-foreground">{proj.year}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{proj.description}</p>
              <span className="text-xs px-2 py-1 rounded-full neon-border text-primary">
                {proj.tech}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsStop;
