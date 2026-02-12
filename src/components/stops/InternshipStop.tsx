import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

const InternshipStop = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-3xl w-full">
        <motion.h2
          className="text-2xl md:text-3xl font-display neon-text mb-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          💼 Stop 4 — Internship Zone
        </motion.h2>

        <div className="relative border-l-2 border-primary/30 ml-4 space-y-10">
          {portfolioData.internships.map((intern, idx) => (
            <motion.div
              key={idx}
              className="ml-8 glass rounded-xl p-6 relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-6 w-4 h-4 rounded-full stop-marker" />

              <p className="text-xs text-primary font-display mb-1">{intern.period}</p>
              <h3 className="text-lg font-display text-foreground">{intern.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">
                {intern.company} — {intern.location}
              </p>
              <ul className="space-y-1">
                {intern.points.map((p, i) => (
                  <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternshipStop;
