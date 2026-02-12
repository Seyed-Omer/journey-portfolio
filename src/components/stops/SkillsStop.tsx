import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

const categories = [
  { key: "programming" as const, label: "Programming & Databases", color: "bg-primary/20 border-primary/40 text-primary" },
  { key: "dataScience" as const, label: "Data Science & Analytics", color: "bg-neon-purple/20 border-accent/40 text-accent" },
  { key: "tools" as const, label: "BI & Tools", color: "bg-neon-green/20 border-neon-green/40 text-neon-green" },
  { key: "webUI" as const, label: "Web & UI/UX", color: "bg-neon-orange/20 border-neon-orange/40 text-neon-orange" },
  { key: "soft" as const, label: "Core Competencies", color: "bg-primary/10 border-primary/30 text-primary" },
];

const SkillsStop = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full">
        <motion.h2
          className="text-2xl md:text-3xl font-display neon-text mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ⚡ Stop 2 — Skills Station
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.key}
              className="glass rounded-xl p-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-sm font-display text-foreground mb-3">{cat.label}</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills[cat.key].map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs px-3 py-1.5 rounded-full border ${cat.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsStop;
