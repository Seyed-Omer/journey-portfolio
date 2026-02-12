import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import profileImg from "@/assets/profile.jpg";

const AboutStop = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden neon-box">
            <img
              src={profileImg}
              alt="Seyed Omer"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-display neon-text mb-4">
            🚏 Stop 1 — About Me
          </h2>
          <p className="text-foreground/90 leading-relaxed mb-4">
            {portfolioData.summary}
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            {portfolioData.languages.map((lang) => (
              <span key={lang} className="px-3 py-1 rounded-full neon-border text-primary">
                {lang}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutStop;
