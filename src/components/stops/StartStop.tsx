import { motion } from "framer-motion";
import BusIcon from "../BusIcon";
import Typewriter from "../Typewriter";

interface StartStopProps {
  onStart: () => void;
}

const StartStop = ({ onStart }: StartStopProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center relative overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-10 blur-[100px]"
        style={{ background: "radial-gradient(circle, hsl(185 100% 50%), transparent)" }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 60, 0],
          scale: [1, 1.3, 0.8, 1],
        }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-8 blur-[80px]"
        style={{ background: "radial-gradient(circle, hsl(280 80% 60%), transparent)" }}
        animate={{
          x: [50, -100, 80, 50],
          y: [30, 100, -60, 30],
          scale: [0.8, 1.2, 1, 0.8],
        }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />

      {/* Animated road lines */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <motion.div
          className="h-1 road-line absolute bottom-10 left-0 right-0"
          animate={{ x: [-40, 0] }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      </div>

      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <BusIcon className="w-40 h-24 md:w-60 md:h-36 mb-6" />
        </motion.div>
      </motion.div>

      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-display neon-text mb-3"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, type: "spring" }}
      >
        Seyed Omer S.A
      </motion.h1>

      <motion.div
        className="text-lg md:text-xl text-muted-foreground mb-2 h-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Typewriter
          texts={[
            "Data Science & AI Enthusiast",
            "Full Stack Developer",
            "UI/UX Designer",
            "Problem Solver",
          ]}
        />
      </motion.div>

      <motion.p
        className="text-sm text-muted-foreground/60 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Interactive Bus Journey Portfolio
      </motion.p>

      <motion.button
        onClick={onStart}
        className="group relative font-display text-lg px-12 py-5 rounded-2xl bg-primary text-primary-foreground overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
          animate={{ x: ["-200%", "200%"] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
        <span className="relative z-10">🚌 Start Journey</span>
      </motion.button>

      <motion.div
        className="absolute bottom-10 flex flex-col items-center text-muted-foreground/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs mb-1">Scroll to explore</span>
        <motion.span
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          ↓
        </motion.span>
      </motion.div>
    </div>
  );
};

export default StartStop;
