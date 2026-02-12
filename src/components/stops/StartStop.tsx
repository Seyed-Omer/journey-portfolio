import { motion } from "framer-motion";
import BusIcon from "../BusIcon";

interface StartStopProps {
  onStart: () => void;
}

const StartStop = ({ onStart }: StartStopProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <BusIcon className="w-40 h-24 md:w-56 md:h-36 mb-8" />
      </motion.div>

      <motion.h1
        className="text-3xl md:text-5xl lg:text-6xl font-display neon-text mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Seyed Omer S.A
      </motion.h1>

      <motion.p
        className="text-muted-foreground text-base md:text-lg mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Industrial Real-Time Project Portfolio
      </motion.p>

      <motion.p
        className="text-sm text-muted-foreground mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        B.Tech CSE — Data Science & AI
      </motion.p>

      <motion.button
        onClick={onStart}
        className="font-display text-lg px-10 py-4 rounded-xl bg-primary text-primary-foreground neon-box hover:scale-105 transition-transform"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        🚌 Start Journey
      </motion.button>

      <motion.div
        className="absolute bottom-8 flex flex-col items-center text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-xs">Scroll to explore</span>
        <span>↓</span>
      </motion.div>
    </div>
  );
};

export default StartStop;
