import { motion } from "framer-motion";
import BusIcon from "./BusIcon";

interface StopDividerProps {
  nextStop: string;
}

const StopDivider = ({ nextStop }: StopDividerProps) => (
  <div className="flex flex-col items-center py-6">
    <motion.div
      className="h-20 w-px"
      style={{
        background: "linear-gradient(to bottom, transparent, hsl(185 100% 50% / 0.4), transparent)",
      }}
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true }}
    />
    <motion.div
      className="flex items-center gap-2 py-2"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <BusIcon className="w-8 h-5 opacity-40" />
      <span className="text-xs font-display text-primary/60">
        Next → {nextStop}
      </span>
    </motion.div>
    <motion.div
      className="h-20 w-px"
      style={{
        background: "linear-gradient(to bottom, transparent, hsl(280 80% 60% / 0.3), transparent)",
      }}
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true }}
    />
  </div>
);

export default StopDivider;
