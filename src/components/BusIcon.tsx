import { motion } from "framer-motion";

interface BusIconProps {
  className?: string;
  isMoving?: boolean;
}

const BusIcon = ({ className = "", isMoving = false }: BusIconProps) => (
  <motion.svg
    viewBox="0 0 64 40"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    animate={isMoving ? { y: [0, -1.5, 0, -0.5, 0] } : { y: 0 }}
    transition={isMoving ? { repeat: Infinity, duration: 0.4, ease: "easeInOut" } : { duration: 0.3 }}
  >
    {/* Exhaust smoke when moving */}
    {isMoving && (
      <>
        <motion.circle
          cx="2" cy="28" r="2"
          fill="hsl(var(--muted-foreground) / 0.3)"
          animate={{ cx: [-2, -10], cy: [28, 22], r: [1.5, 4], opacity: [0.4, 0] }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "easeOut" }}
        />
        <motion.circle
          cx="2" cy="28" r="1.5"
          fill="hsl(var(--muted-foreground) / 0.2)"
          animate={{ cx: [-4, -14], cy: [26, 18], r: [1, 3], opacity: [0.3, 0] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeOut", delay: 0.3 }}
        />
      </>
    )}

    {/* Bus body */}
    <rect x="4" y="4" width="52" height="26" rx="6" className="fill-bus" />
    <rect x="6" y="6" width="48" height="10" rx="3" className="fill-primary/30" />

    {/* Windows */}
    <rect x="10" y="8" width="8" height="6" rx="1" className="fill-primary/60" />
    <rect x="21" y="8" width="8" height="6" rx="1" className="fill-primary/60" />
    <rect x="32" y="8" width="8" height="6" rx="1" className="fill-primary/60" />
    <rect x="43" y="8" width="8" height="6" rx="1" className="fill-primary/60" />

    {/* Door */}
    <rect x="14" y="18" width="7" height="10" rx="1" className="fill-secondary" />

    {/* Headlights - glow when moving */}
    <motion.circle
      cx="52" cy="22" r="3"
      className="fill-primary"
      animate={isMoving ? { opacity: [1, 0.5, 1] } : { opacity: 1 }}
      transition={isMoving ? { repeat: Infinity, duration: 0.6 } : {}}
    />
    {isMoving && (
      <motion.ellipse
        cx="58" cy="22" rx="4" ry="2"
        fill="hsl(var(--primary) / 0.3)"
        animate={{ opacity: [0.4, 0.1, 0.4], rx: [4, 6, 4] }}
        transition={{ repeat: Infinity, duration: 0.6 }}
      />
    )}
    <circle cx="8" cy="22" r="3" className="fill-destructive" />

    {/* Wheels with spinning spokes */}
    <circle cx="16" cy="32" r="5" className="fill-muted-foreground" />
    <motion.g
      animate={isMoving ? { rotate: 360 } : { rotate: 0 }}
      transition={isMoving ? { repeat: Infinity, duration: 0.3, ease: "linear" } : { duration: 0.5 }}
      style={{ transformOrigin: "16px 32px" }}
    >
      <circle cx="16" cy="32" r="2" className="fill-secondary" />
      <line x1="16" y1="28" x2="16" y2="36" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" />
      <line x1="12" y1="32" x2="20" y2="32" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" />
    </motion.g>

    <circle cx="44" cy="32" r="5" className="fill-muted-foreground" />
    <motion.g
      animate={isMoving ? { rotate: 360 } : { rotate: 0 }}
      transition={isMoving ? { repeat: Infinity, duration: 0.3, ease: "linear" } : { duration: 0.5 }}
      style={{ transformOrigin: "44px 32px" }}
    >
      <circle cx="44" cy="32" r="2" className="fill-secondary" />
      <line x1="44" y1="28" x2="44" y2="36" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" />
      <line x1="40" y1="32" x2="48" y2="32" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" />
    </motion.g>
  </motion.svg>
);

export default BusIcon;
