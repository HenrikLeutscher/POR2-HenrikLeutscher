import IntroSection from "../components/IntroSection";
import ProjectSection from "../components/ProjectSection";
import AboutSection from "../components/AboutSection";
import SkillSection from "../components/SkillSection";
import { ProjectData } from "../data/ProjectData";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 flex flex-col gap-10">
      <IntroSection />
      <ProjectSection ProjectData={ProjectData} />
      <AboutSection />
      <SkillSection />
    </div>
  );
}
