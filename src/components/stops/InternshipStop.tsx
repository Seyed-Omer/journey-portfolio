import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

const InternshipStop = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="absolute right-1/4 top-1/3 w-64 h-64 rounded-full opacity-8 blur-[80px]" style={{ background: "hsl(30 100% 60%)" }} />

      <div className="max-w-3xl w-full relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-display neon-border text-primary mb-4">
            🚏 Stop 4
          </span>
          <h2 className="text-3xl md:text-4xl font-display neon-text">
            Internship Zone
          </h2>
        </motion.div>

        <div className="relative ml-4">
          {/* Animated timeline line */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-neon-green"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ originY: 0 }}
          />

          <div className="space-y-10">
            {portfolioData.internships.map((intern, idx) => (
              <motion.div
                key={idx}
                className="ml-8 glass rounded-2xl p-6 relative group hover:neon-box transition-all duration-500"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.3, type: "spring" }}
              >
                {/* Pulsing timeline dot */}
                <motion.div
                  className="absolute -left-[37px] top-6 w-4 h-4 rounded-full stop-marker"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2, delay: idx * 0.5 }}
                />

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary font-display">
                    {intern.period}
                  </span>
                </div>
                <h3 className="text-lg font-display text-foreground group-hover:text-primary transition-colors">
                  {intern.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {intern.company} — {intern.location}
                </p>
                <ul className="space-y-2">
                  {intern.points.map((p, i) => (
                    <motion.li
                      key={i}
                      className="text-sm text-foreground/75 flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.3 + i * 0.1 }}
                    >
                      <span className="text-primary mt-0.5">▸</span>
                      {p}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipStop;
