import { motion } from "framer-motion";
import BusIcon from "./BusIcon";

interface StopDividerProps {
  nextStop: string;
}

const StopDivider = ({ nextStop }: StopDividerProps) => (
  <div className="flex flex-col items-center py-8 relative overflow-hidden">
    {/* Road section */}
    <motion.div
      className="w-full max-w-md relative h-16 flex items-center justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Road */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-6 bg-road/40 rounded-full overflow-hidden">
        <motion.div
          className="absolute top-[11px] inset-x-0 h-[2px]"
          style={{
            background:
              "repeating-linear-gradient(90deg, hsl(var(--bus-yellow) / 0.4) 0px, hsl(var(--bus-yellow) / 0.4) 10px, transparent 10px, transparent 22px)",
          }}
          animate={{ x: [-22, 0] }}
          transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
        />
      </div>

      {/* Driving bus */}
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "100%" }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="relative z-10"
      >
        <BusIcon className="w-20 h-10" isMoving={true} />
      </motion.div>
    </motion.div>

    {/* Next stop sign */}
    <motion.div
      className="flex items-center gap-2 mt-2 px-4 py-2 rounded-xl neon-border bg-card/60"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
    >
      <span className="text-xs">🚏</span>
      <span className="text-xs font-display text-primary/80">
        Next Stop → {nextStop}
      </span>
    </motion.div>
  </div>
);

export default StopDivider;
