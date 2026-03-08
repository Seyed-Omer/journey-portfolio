import { motion } from "framer-motion";

interface BusIconProps {
  className?: string;
  isMoving?: boolean;
  isStopped?: boolean;
}

const BusIcon = ({ className = "", isMoving = false, isStopped = false }: BusIconProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={
        isMoving
          ? { y: [0, -2, 0.5, -1, 0] }
          : isStopped
          ? { y: [0, -1, 0], transition: { duration: 0.3 } }
          : {}
      }
      transition={isMoving ? { repeat: Infinity, duration: 0.35, ease: "easeInOut" } : {}}
    >
      <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Shadow under bus */}
        <ellipse cx="60" cy="56" rx="50" ry="3" fill="hsl(var(--foreground) / 0.1)" />

        {/* Exhaust smoke */}
        {isMoving && (
          <>
            <motion.circle
              cx="5" cy="46" r="2.5"
              fill="hsl(var(--muted-foreground) / 0.15)"
              animate={{ cx: [-5, -18], cy: [44, 36], r: [2, 5], opacity: [0.3, 0] }}
              transition={{ repeat: Infinity, duration: 0.7, ease: "easeOut" }}
            />
            <motion.circle
              cx="5" cy="46" r="2"
              fill="hsl(var(--muted-foreground) / 0.1)"
              animate={{ cx: [-8, -24], cy: [42, 30], r: [1.5, 4], opacity: [0.2, 0] }}
              transition={{ repeat: Infinity, duration: 0.9, ease: "easeOut", delay: 0.25 }}
            />
          </>
        )}

        {/* Bus body - main shape */}
        <rect x="12" y="10" width="96" height="38" rx="8" fill="hsl(var(--bus-yellow))" />
        {/* Roof accent */}
        <rect x="14" y="10" width="92" height="6" rx="4" fill="hsl(var(--bus-yellow))" opacity="0.85" />
        <rect x="14" y="10" width="92" height="3" rx="2" fill="hsl(var(--foreground) / 0.08)" />

        {/* Side stripe */}
        <rect x="12" y="30" width="96" height="4" fill="hsl(var(--primary))" opacity="0.7" />

        {/* Windows row */}
        <rect x="20" y="16" width="12" height="11" rx="2" fill="hsl(var(--primary) / 0.5)" />
        <rect x="35" y="16" width="12" height="11" rx="2" fill="hsl(var(--primary) / 0.5)" />
        <rect x="50" y="16" width="12" height="11" rx="2" fill="hsl(var(--primary) / 0.5)" />
        <rect x="65" y="16" width="12" height="11" rx="2" fill="hsl(var(--primary) / 0.5)" />
        <rect x="80" y="16" width="12" height="11" rx="2" fill="hsl(var(--primary) / 0.5)" />

        {/* Window reflections */}
        <rect x="21" y="17" width="3" height="9" rx="1" fill="hsl(var(--foreground) / 0.1)" />
        <rect x="36" y="17" width="3" height="9" rx="1" fill="hsl(var(--foreground) / 0.1)" />
        <rect x="51" y="17" width="3" height="9" rx="1" fill="hsl(var(--foreground) / 0.1)" />
        <rect x="66" y="17" width="3" height="9" rx="1" fill="hsl(var(--foreground) / 0.1)" />
        <rect x="81" y="17" width="3" height="9" rx="1" fill="hsl(var(--foreground) / 0.1)" />

        {/* Front windshield */}
        <path d="M96 14 L108 18 L108 28 L96 28 Z" fill="hsl(var(--primary) / 0.4)" rx="2" />
        <path d="M97 15 L100 16 L100 27 L97 27 Z" fill="hsl(var(--foreground) / 0.08)" />

        {/* Door */}
        <rect x="22" y="34" width="10" height="12" rx="1.5" fill="hsl(var(--secondary))" />
        <rect x="26" y="34" width="1" height="12" fill="hsl(var(--foreground) / 0.1)" />

        {/* Headlights */}
        <motion.rect
          x="104" y="22" width="6" height="8" rx="2"
          fill="hsl(var(--primary))"
          animate={isMoving ? { opacity: [1, 0.6, 1] } : { opacity: 0.8 }}
          transition={isMoving ? { repeat: Infinity, duration: 0.5 } : {}}
        />
        {isMoving && (
          <motion.rect
            x="110" y="20" width="8" height="12" rx="3"
            fill="hsl(var(--primary) / 0.15)"
            animate={{ width: [8, 14, 8], opacity: [0.2, 0.05, 0.2] }}
            transition={{ repeat: Infinity, duration: 0.5 }}
          />
        )}

        {/* Tail lights */}
        <rect x="12" y="36" width="4" height="6" rx="1.5" fill="hsl(var(--destructive))" />
        {isStopped && (
          <motion.rect
            x="8" y="34" width="6" height="10" rx="2"
            fill="hsl(var(--destructive) / 0.3)"
            animate={{ opacity: [0.4, 0.1, 0.4] }}
            transition={{ repeat: Infinity, duration: 0.6 }}
          />
        )}

        {/* Bumpers */}
        <rect x="10" y="46" width="100" height="3" rx="1.5" fill="hsl(var(--muted-foreground) / 0.5)" />

        {/* Front wheel */}
        <circle cx="86" cy="50" r="7" fill="hsl(var(--foreground) / 0.7)" />
        <circle cx="86" cy="50" r="5" fill="hsl(var(--muted-foreground) / 0.4)" />
        <motion.g
          animate={isMoving ? { rotate: 360 } : { rotate: 0 }}
          transition={isMoving ? { repeat: Infinity, duration: 0.25, ease: "linear" } : { duration: 0.4 }}
          style={{ transformOrigin: "86px 50px" }}
        >
          <circle cx="86" cy="50" r="2.5" fill="hsl(var(--secondary))" />
          <line x1="86" y1="44" x2="86" y2="56" stroke="hsl(var(--foreground) / 0.15)" strokeWidth="1" />
          <line x1="80" y1="50" x2="92" y2="50" stroke="hsl(var(--foreground) / 0.15)" strokeWidth="1" />
          <line x1="82" y1="46" x2="90" y2="54" stroke="hsl(var(--foreground) / 0.15)" strokeWidth="0.7" />
          <line x1="90" y1="46" x2="82" y2="54" stroke="hsl(var(--foreground) / 0.15)" strokeWidth="0.7" />
        </motion.g>

        {/* Rear wheel */}
        <circle cx="34" cy="50" r="7" fill="hsl(var(--foreground) / 0.7)" />
        <circle cx="34" cy="50" r="5" fill="hsl(var(--muted-foreground) / 0.4)" />
        <motion.g
          animate={isMoving ? { rotate: 360 } : { rotate: 0 }}
          transition={isMoving ? { repeat: Infinity, duration: 0.25, ease: "linear" } : { duration: 0.4 }}
          style={{ transformOrigin: "34px 50px" }}
        >
          <circle cx="34" cy="50" r="2.5" fill="hsl(var(--secondary))" />
          <line x1="34" y1="44" x2="34" y2="56" stroke="hsl(var(--foreground) / 0.15)" strokeWidth="1" />
          <line x1="28" y1="50" x2="40" y2="50" stroke="hsl(var(--foreground) / 0.15)" strokeWidth="1" />
          <line x1="30" y1="46" x2="38" y2="54" stroke="hsl(var(--foreground) / 0.15)" strokeWidth="0.7" />
          <line x1="38" y1="46" x2="30" y2="54" stroke="hsl(var(--foreground) / 0.15)" strokeWidth="0.7" />
        </motion.g>

        {/* Route number sign */}
        <rect x="96" y="12" width="14" height="8" rx="2" fill="hsl(var(--background))" />
        <text x="103" y="19" textAnchor="middle" fill="hsl(var(--primary))" fontSize="6" fontWeight="bold" fontFamily="monospace">GO</text>
      </svg>
    </motion.div>
  );
};

export default BusIcon;
