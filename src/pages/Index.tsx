import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "@/components/Particles";
import ProgressTracker from "@/components/ProgressTracker";
import StartStop from "@/components/stops/StartStop";
import AboutStop from "@/components/stops/AboutStop";
import SkillsStop from "@/components/stops/SkillsStop";
import EducationStop from "@/components/stops/EducationStop";
import InternshipStop from "@/components/stops/InternshipStop";
import ProjectsStop from "@/components/stops/ProjectsStop";
import CertificationsStop from "@/components/stops/CertificationsStop";
import ResumeStop from "@/components/stops/ResumeStop";
import ContactStop from "@/components/stops/ContactStop";
import StopDivider from "@/components/StopDivider";
import { busStops } from "@/data/portfolio";

const Index = () => {
  const [currentStop, setCurrentStop] = useState(0);
  const [journeyStarted, setJourneyStarted] = useState(false);
  const stopRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleStart = () => {
    setJourneyStarted(true);
    setCurrentStop(1);
    setTimeout(() => {
      stopRefs.current[1]?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  const handleStopClick = (stop: number) => {
    if (stop === 0 && !journeyStarted) return;
    if (stop > 0) setJourneyStarted(true);
    setCurrentStop(stop);
    stopRefs.current[stop]?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = stopRefs.current.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setCurrentStop(idx);
          }
        });
      },
      { threshold: 0.3 }
    );

    stopRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [journeyStarted]);

  const stopNames = busStops.map((s) => s.label);

  const stops = [
    <AboutStop key="about" />,
    <SkillsStop key="skills" />,
    <EducationStop key="edu" />,
    <InternshipStop key="intern" />,
    <ProjectsStop key="proj" />,
    <CertificationsStop key="cert" />,
    <ResumeStop key="resume" />,
    <ContactStop key="contact" />,
  ];

  return (
    <div className="bg-background min-h-screen relative">
      <Particles />

      {journeyStarted && (
        <ProgressTracker currentStop={currentStop} onStopClick={handleStopClick} />
      )}

      <div ref={(el) => { stopRefs.current[0] = el; }}>
        <StartStop onStart={handleStart} />
      </div>

      <AnimatePresence>
        {journeyStarted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {stops.map((StopComponent, idx) => (
              <div key={idx}>
                <StopDivider nextStop={stopNames[idx + 1]} />
                <div ref={(el) => { stopRefs.current[idx + 1] = el; }}>
                  {StopComponent}
                </div>
              </div>
            ))}

            {/* Footer */}
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground/50 text-xs font-display">
                🚌 End of Journey — Built with ❤️ by Seyed Omer S.A
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
