import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

const categories = [
  { key: "programming" as const, label: "Programming", icon: "💻", gradient: "from-primary/20 to-primary/5", border: "border-primary/30" },
  { key: "dataScience" as const, label: "Data Science", icon: "📊", gradient: "from-accent/20 to-accent/5", border: "border-accent/30" },
  { key: "tools" as const, label: "BI & Tools", icon: "🛠️", gradient: "from-neon-green/20 to-neon-green/5", border: "border-neon-green/30" },
  { key: "webUI" as const, label: "Web & UI/UX", icon: "🎨", gradient: "from-neon-orange/20 to-neon-orange/5", border: "border-neon-orange/30" },
  { key: "soft" as const, label: "Core Skills", icon: "🧠", gradient: "from-primary/15 to-accent/5", border: "border-primary/20" },
];

const skillColors: Record<string, string> = {
  programming: "text-primary border-primary/40",
  dataScience: "text-accent border-accent/40",
  tools: "text-neon-green border-neon-green/40",
  webUI: "text-neon-orange border-neon-orange/40",
  soft: "text-primary border-primary/30",
};

const SkillsStop = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="absolute right-1/4 top-1/2 w-72 h-72 rounded-full opacity-8 blur-[100px]" style={{ background: "hsl(280 80% 60%)" }} />

      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-display neon-border text-primary mb-4">
            🚏 Stop 2
          </span>
          <h2 className="text-3xl md:text-4xl font-display neon-text">
            Skills Station
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.key}
              className={`rounded-2xl p-6 bg-gradient-to-br ${cat.gradient} border ${cat.border} backdrop-blur-sm group hover:scale-[1.03] transition-transform duration-300`}
              initial={{ opacity: 0, y: 40, rotate: idx % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, type: "spring" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-sm font-display text-foreground">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills[cat.key].map((skill, si) => (
                  <motion.span
                    key={skill}
                    className={`text-xs px-3 py-1.5 rounded-full border bg-background/30 ${skillColors[cat.key]}`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.12 + si * 0.05 }}
                  >
                    {skill}
                  </motion.span>
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
