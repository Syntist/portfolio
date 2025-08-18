import { EducationSection } from "@/components/home/EducationSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { IntroSection } from "@/components/home/IntroSection";
import { Proficiency } from "@/components/home/Proficiency";
import ProjectsSection from "@/components/home/ProjectsSection";
import { WhatIDoSection } from "@/components/home/WhatIDoSection";

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
