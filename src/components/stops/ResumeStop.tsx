import { motion } from "framer-motion";

const ResumeStop = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        className="max-w-md w-full glass rounded-2xl p-10 text-center neon-box"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-display neon-text mb-6">
          📄 Stop 7 — Resume
        </h2>
        <p className="text-muted-foreground mb-8">
          View or download my complete resume
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://drive.google.com/file/d/placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-sm px-6 py-3 rounded-xl neon-border text-primary hover:bg-primary/10 transition-colors"
          >
            👁 View Resume
          </a>
          <button
            className="font-display text-sm px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            onClick={() => {
              // Placeholder for actual resume download
              alert("Resume download will be available when you upload/host the PDF file.");
            }}
          >
            ⬇ Download Resume
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ResumeStop;
