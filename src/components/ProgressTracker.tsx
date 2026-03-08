import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { busStops } from "@/data/portfolio";
import BusIcon from "./BusIcon";

interface ProgressTrackerProps {
  currentStop: number;
  onStopClick: (stop: number) => void;
}

const ProgressTracker = ({ currentStop, onStopClick }: ProgressTrackerProps) => {
  const [isMoving, setIsMoving] = useState(false);
  const [showArrival, setShowArrival] = useState(false);
  const prevStop = useRef(currentStop);

  useEffect(() => {
    if (prevStop.current !== currentStop) {
      setIsMoving(true);
      setShowArrival(false);
      
      const arriveTimeout = setTimeout(() => {
        setIsMoving(false);
        setShowArrival(true);
      }, 800);

      const hideArrival = setTimeout(() => {
        setShowArrival(false);
      }, 2500);

      prevStop.current = currentStop;
      return () => {
        clearTimeout(arriveTimeout);
        clearTimeout(hideArrival);
      };
    }
  }, [currentStop]);

  const progress = (currentStop / (busStops.length - 1)) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 glass py-2 px-4">
      <div className="max-w-5xl mx-auto relative">
        {/* Route label */}
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] font-display text-primary/80 tracking-wider">
            🚌 ROUTE: PORTFOLIO EXPRESS
          </span>
          <span className="text-[10px] font-display text-muted-foreground">
            Stop {currentStop}/{busStops.length - 1}
          </span>
        </div>

        {/* Road */}
        <div className="relative h-10 mx-2">
          {/* Road background */}
          <div className="absolute top-4 left-0 right-0 h-3 bg-road rounded-full overflow-hidden">
            {/* Road center dashes */}
            <motion.div
              className="absolute top-[5px] left-0 right-0 h-[2px]"
              style={{
                background: "repeating-linear-gradient(90deg, hsl(var(--bus-yellow) / 0.5) 0px, hsl(var(--bus-yellow) / 0.5) 8px, transparent 8px, transparent 18px)",
              }}
              animate={isMoving ? { x: [-18, 0] } : {}}
              transition={isMoving ? { repeat: Infinity, duration: 0.3, ease: "linear" } : {}}
            />
            {/* Progress fill */}
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, hsl(var(--primary) / 0.3), hsl(var(--primary) / 0.15))" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </div>

          {/* Stop markers */}
          {busStops.map((stop) => {
            const stopProgress = (stop.id / (busStops.length - 1)) * 100;
            return (
              <button
                key={stop.id}
                onClick={() => onStopClick(stop.id)}
                className="absolute flex flex-col items-center group"
                style={{ left: `${stopProgress}%`, transform: "translateX(-50%)", top: 0 }}
              >
                {/* Stop pole */}
                <div
                  className={`w-[2px] h-3 transition-all duration-300 ${
                    stop.id <= currentStop ? "bg-primary/60" : "bg-muted-foreground/20"
                  }`}
                />
                {/* Stop circle */}
                <div className="relative">
                  <div
                    className={`w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                      stop.id === currentStop
                        ? "border-primary bg-primary/20 scale-110"
                        : stop.id < currentStop
                        ? "border-primary/50 bg-primary/10"
                        : "border-muted-foreground/30 bg-background/50"
                    }`}
                  >
                    {stop.id <= currentStop && (
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                  </div>
                  {/* Active stop pulse */}
                  {stop.id === currentStop && !isMoving && (
                    <motion.div
                      className="absolute inset-0 rounded-full border border-primary/40"
                      initial={{ scale: 1, opacity: 0.6 }}
                      animate={{ scale: 2.5, opacity: 0 }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
                    />
                  )}
                </div>
              </button>
            );
          })}

          {/* Bus */}
          <motion.div
            className="absolute -top-[14px]"
            animate={{
              left: `${progress}%`,
            }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ transform: "translateX(-50%)" }}
          >
            <BusIcon
              className="w-16 h-8"
              isMoving={isMoving}
              isStopped={showArrival}
            />
          </motion.div>
        </div>

        {/* Stop labels */}
        <div className="flex justify-between mx-2 mt-0.5">
          {busStops.map((stop) => (
            <span
              key={stop.id}
              className={`text-[8px] font-display transition-colors text-center w-0 flex-1 ${
                stop.id === currentStop ? "text-primary" : "text-muted-foreground/50"
              }`}
              style={{ fontSize: stop.id === currentStop ? "8px" : "7px" }}
            >
              <span className="hidden sm:inline">{stop.label}</span>
              <span className="sm:hidden">{stop.icon}</span>
            </span>
          ))}
        </div>

        {/* Arrival notification */}
        <AnimatePresence>
          {showArrival && currentStop > 0 && (
            <motion.div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full neon-border bg-card/90"
              initial={{ opacity: 0, y: -5, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -5, scale: 0.9 }}
            >
              <span className="text-[10px]">📍</span>
              <span className="text-[10px] font-display text-primary">
                Arrived: {busStops[currentStop]?.label}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProgressTracker;
