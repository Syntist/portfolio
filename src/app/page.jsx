import { EducationSection } from "@/components/home/EducationSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { IntroSection } from "@/components/home/IntroSection";
import { Proficiency } from "@/components/home/Proficiency";
import { WhatIDoSection } from "@/components/home/WhatIDoSection";
import ProjectsSection from "@/components/home/ProjectsSection";

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
