import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import profileImg from "@/assets/profile.jpg";

const AboutStop = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      {/* Decorative glow */}
      <div className="absolute left-1/4 top-1/3 w-64 h-64 rounded-full opacity-10 blur-[80px]" style={{ background: "hsl(185 100% 50%)" }} />

      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-10 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring" }}
          className="flex justify-center"
        >
          <div className="relative group">
            {/* Rotating border */}
            <motion.div
              className="absolute -inset-2 rounded-2xl opacity-60"
              style={{
                background: "conic-gradient(from 0deg, hsl(185 100% 50%), hsl(280 80% 60%), hsl(145 80% 55%), hsl(185 100% 50%))",
              }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            />
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden bg-background">
              <img
                src={profileImg}
                alt="Seyed Omer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="inline-block px-3 py-1 rounded-full text-xs font-display neon-border text-primary mb-4"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "auto", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            🚏 Stop 1
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-display neon-text mb-4">
            About Me
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            {portfolioData.summary}
          </p>
          <div className="flex flex-wrap gap-2">
            {portfolioData.languages.map((lang, i) => (
              <motion.span
                key={lang}
                className="px-3 py-1.5 rounded-full text-xs neon-border text-primary"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                {lang}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutStop;
