import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

const certIcons = ["🏆", "☕", "☁️", "🤖", "💡", "🌐"];
const gradients = [
  "from-primary/25 to-primary/5",
  "from-accent/25 to-accent/5",
  "from-neon-green/25 to-neon-green/5",
  "from-neon-orange/25 to-neon-orange/5",
  "from-primary/20 to-accent/5",
  "from-accent/20 to-primary/5",
];

const CertificationsStop = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-3xl w-full relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-display neon-border text-primary mb-4">
            🚏 Stop 6
          </span>
          <h2 className="text-3xl md:text-4xl font-display neon-text">
            Certifications
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {portfolioData.certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              className={`rounded-2xl p-5 bg-gradient-to-br ${gradients[idx]} border border-border/30 flex items-center gap-4 group cursor-pointer`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring" }}
              whileHover={{ scale: 1.03, x: 5 }}
            >
              <motion.span
                className="text-3xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: idx * 0.3 }}
              >
                {certIcons[idx]}
              </motion.span>
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {cert}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsStop;
