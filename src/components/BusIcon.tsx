import { motion } from "framer-motion";

const BusIcon = ({ className = "" }: { className?: string }) => (
  <motion.svg
    viewBox="0 0 64 40"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
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
    {/* Headlights */}
    <circle cx="52" cy="22" r="3" className="fill-primary" />
    <circle cx="8" cy="22" r="3" className="fill-destructive" />
    {/* Wheels */}
    <circle cx="16" cy="32" r="5" className="fill-muted-foreground" />
    <circle cx="16" cy="32" r="2" className="fill-secondary" />
    <circle cx="44" cy="32" r="5" className="fill-muted-foreground" />
    <circle cx="44" cy="32" r="2" className="fill-secondary" />
  </motion.svg>
);

export default BusIcon;
