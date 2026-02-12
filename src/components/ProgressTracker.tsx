import { motion } from "framer-motion";
import { busStops } from "@/data/portfolio";
import BusIcon from "./BusIcon";

interface ProgressTrackerProps {
  currentStop: number;
  onStopClick: (stop: number) => void;
}

const ProgressTracker = ({ currentStop, onStopClick }: ProgressTrackerProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 glass py-3 px-4">
      <div className="max-w-5xl mx-auto relative">
        {/* Road line */}
        <div className="h-1 bg-road rounded-full relative mx-8">
          <motion.div
            className="h-full bg-primary rounded-full"
            animate={{ width: `${(currentStop / (busStops.length - 1)) * 100}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>

        {/* Stops */}
        <div className="flex justify-between mt-1 px-4">
          {busStops.map((stop) => (
            <button
              key={stop.id}
              onClick={() => onStopClick(stop.id)}
              className="flex flex-col items-center group relative"
            >
              <div
                className={`w-3 h-3 rounded-full -mt-[10px] transition-all duration-300 ${
                  stop.id <= currentStop ? "stop-marker" : "bg-road"
                }`}
              />
              <span
                className={`text-[9px] mt-1 font-display transition-colors hidden sm:block ${
                  stop.id === currentStop ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {stop.label}
              </span>
            </button>
          ))}
        </div>

        {/* Bus position */}
        <motion.div
          className="absolute -top-5"
          animate={{
            left: `${(currentStop / (busStops.length - 1)) * 95 + 2}%`,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <BusIcon className="w-10 h-6" />
        </motion.div>
      </div>
    </div>
  );
};

export default ProgressTracker;
