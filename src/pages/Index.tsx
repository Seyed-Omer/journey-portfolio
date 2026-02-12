import { useState, useEffect, useRef } from "react";
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
    }, 100);
  };

  const handleStopClick = (stop: number) => {
    if (stop === 0 && !journeyStarted) return;
    if (stop > 0) setJourneyStarted(true);
    setCurrentStop(stop);
    stopRefs.current[stop]?.scrollIntoView({ behavior: "smooth" });
  };

  // Track scroll position to update current stop
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
      { threshold: 0.4 }
    );

    stopRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [journeyStarted]);

  const stopNames = busStops.map((s) => s.label);

  return (
    <div className="bg-background min-h-screen">
      {journeyStarted && (
        <ProgressTracker currentStop={currentStop} onStopClick={handleStopClick} />
      )}

      <div ref={(el) => { stopRefs.current[0] = el; }}>
        <StartStop onStart={handleStart} />
      </div>

      {journeyStarted && (
        <>
          <StopDivider nextStop={stopNames[1]} />
          <div ref={(el) => { stopRefs.current[1] = el; }}>
            <AboutStop />
          </div>

          <StopDivider nextStop={stopNames[2]} />
          <div ref={(el) => { stopRefs.current[2] = el; }}>
            <SkillsStop />
          </div>

          <StopDivider nextStop={stopNames[3]} />
          <div ref={(el) => { stopRefs.current[3] = el; }}>
            <EducationStop />
          </div>

          <StopDivider nextStop={stopNames[4]} />
          <div ref={(el) => { stopRefs.current[4] = el; }}>
            <InternshipStop />
          </div>

          <StopDivider nextStop={stopNames[5]} />
          <div ref={(el) => { stopRefs.current[5] = el; }}>
            <ProjectsStop />
          </div>

          <StopDivider nextStop={stopNames[6]} />
          <div ref={(el) => { stopRefs.current[6] = el; }}>
            <CertificationsStop />
          </div>

          <StopDivider nextStop={stopNames[7]} />
          <div ref={(el) => { stopRefs.current[7] = el; }}>
            <ResumeStop />
          </div>

          <StopDivider nextStop={stopNames[8]} />
          <div ref={(el) => { stopRefs.current[8] = el; }}>
            <ContactStop />
          </div>

          {/* Footer */}
          <div className="text-center py-10 text-muted-foreground text-xs font-display">
            🚌 End of Journey — Built by Seyed Omer S.A
          </div>
        </>
      )}
    </div>
  );
};

export default Index;
