import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import IntroSection from "@/components/IntroSection";
import { Proficiency } from "@/components/Proficiency";
import ProjectsSection from "@/components/ProjectsSection";
import { WhatIDoSection } from "@/components/WhatIDoSection";

export default async function Home() {
  return (
    <main>
      <IntroSection />
      <ProjectsSection />
      <WhatIDoSection />
      <Proficiency />
      <EducationSection />
      <ExperienceSection />
    </main>
  );
}
