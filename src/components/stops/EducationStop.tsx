import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

const EducationStop = () => {
  const { education } = portfolioData;
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        className="max-w-lg w-full glass rounded-2xl p-8 neon-box"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-display neon-text mb-8 text-center">
          🎓 Stop 3 — Education Hub
        </h2>

        <div className="space-y-4 text-center">
          <h3 className="text-lg font-display text-foreground">{education.degree}</h3>
          <p className="text-muted-foreground">{education.college}</p>
          <div className="flex justify-center gap-6 mt-4">
            <div className="neon-border rounded-xl px-6 py-3">
              <p className="text-2xl font-display text-primary">{education.cgpa}</p>
              <p className="text-xs text-muted-foreground">CGPA</p>
            </div>
            <div className="neon-border rounded-xl px-6 py-3">
              <p className="text-lg font-display text-primary">{education.year}</p>
              <p className="text-xs text-muted-foreground">Duration</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EducationStop;
