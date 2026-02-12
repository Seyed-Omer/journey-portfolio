import { motion, useInView } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { useRef, useState, useEffect } from "react";

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = target;
    const duration = 1500;
    const stepTime = duration / end;
    const timer = setInterval(() => {
      start++;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const EducationStop = () => {
  const { education } = portfolioData;
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="absolute left-1/3 bottom-1/4 w-56 h-56 rounded-full opacity-10 blur-[80px]" style={{ background: "hsl(145 80% 55%)" }} />

      <motion.div
        className="max-w-lg w-full relative z-10"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", bounce: 0.3 }}
      >
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-display neon-border text-primary mb-4">
            🚏 Stop 3
          </span>
          <h2 className="text-3xl md:text-4xl font-display neon-text">
            Education Hub
          </h2>
        </div>

        <motion.div
          className="glass rounded-2xl p-8 neon-box text-center"
          whileHover={{ boxShadow: "0 0 30px hsl(185 100% 50% / 0.3)" }}
        >
          <motion.div
            className="text-5xl mb-4"
            animate={{ rotateY: [0, 360] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            🎓
          </motion.div>
          <h3 className="text-lg font-display text-foreground mb-2">{education.degree}</h3>
          <p className="text-muted-foreground text-sm mb-6">{education.college}</p>

          <div className="flex justify-center gap-6">
            <motion.div
              className="neon-border rounded-xl px-6 py-4 bg-gradient-to-br from-primary/10 to-transparent"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-3xl font-display text-primary">
                <AnimatedCounter target={7} />.35
              </p>
              <p className="text-xs text-muted-foreground mt-1">CGPA</p>
            </motion.div>
            <motion.div
              className="neon-border rounded-xl px-6 py-4 bg-gradient-to-br from-accent/10 to-transparent"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-xl font-display text-accent">
                <AnimatedCounter target={2026} />
              </p>
              <p className="text-xs text-muted-foreground mt-1">Graduation</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EducationStop;
