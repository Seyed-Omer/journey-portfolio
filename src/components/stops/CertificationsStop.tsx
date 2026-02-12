import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

const badgeColors = [
  "from-primary/20 to-primary/5 border-primary/40",
  "from-accent/20 to-accent/5 border-accent/40",
  "from-neon-green/20 to-neon-green/5 border-neon-green/40",
  "from-neon-orange/20 to-neon-orange/5 border-neon-orange/40",
  "from-primary/20 to-primary/5 border-primary/40",
  "from-accent/20 to-accent/5 border-accent/40",
];

const CertificationsStop = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-3xl w-full">
        <motion.h2
          className="text-2xl md:text-3xl font-display neon-text mb-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          🏅 Stop 6 — Certifications
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {portfolioData.certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              className={`rounded-xl p-5 border bg-gradient-to-br ${badgeColors[idx % badgeColors.length]} flex items-center gap-3`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <span className="text-2xl">🎖️</span>
              <span className="text-sm font-medium text-foreground">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsStop;
