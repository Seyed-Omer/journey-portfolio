import { motion } from "framer-motion";

interface StopDividerProps {
  nextStop: string;
}

const StopDivider = ({ nextStop }: StopDividerProps) => (
  <div className="flex flex-col items-center py-8">
    <div className="h-16 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
    <motion.p
      className="text-xs font-display text-primary/60 my-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      Next Stop → {nextStop}
    </motion.p>
    <div className="h-16 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
  </div>
);

export default StopDivider;
