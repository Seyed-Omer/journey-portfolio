import { motion } from "framer-motion";

const ResumeStop = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="absolute right-1/3 top-1/3 w-64 h-64 rounded-full opacity-10 blur-[80px]" style={{ background: "hsl(185 100% 50%)" }} />

      <motion.div
        className="max-w-md w-full glass rounded-2xl p-10 text-center neon-box relative z-10 overflow-hidden"
        initial={{ opacity: 0, rotateX: 15 }}
        whileInView={{ opacity: 1, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring" }}
      >
        {/* Animated border shimmer */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: "conic-gradient(from 0deg, transparent, hsl(185 100% 50% / 0.2), transparent, hsl(280 80% 60% / 0.2), transparent)",
          }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        />
        <div className="absolute inset-[1px] rounded-2xl bg-card" />

        <div className="relative z-10">
          <motion.div
            className="text-5xl mb-4"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            📄
          </motion.div>

          <span className="inline-block px-3 py-1 rounded-full text-xs font-display neon-border text-primary mb-4">
            🚏 Stop 7
          </span>
          <h2 className="text-2xl md:text-3xl font-display neon-text mb-3">
            Resume Station
          </h2>
          <p className="text-muted-foreground text-sm mb-8">
            View or download my complete resume
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://drive.google.com/file/d/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-sm px-6 py-3 rounded-xl neon-border text-primary hover:bg-primary/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              👁 View Resume
            </motion.a>
            <motion.button
              className="font-display text-sm px-6 py-3 rounded-xl bg-primary text-primary-foreground"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => alert("Upload your resume PDF to enable download.")}
            >
              ⬇ Download
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ResumeStop;
