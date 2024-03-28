import IntroSection from "@/components/IntroSection";
import { Proficiency } from "@/components/Proficiency";
import ProjectsSection from "@/components/ProjectsSection";
import { WhatIDoSection } from "@/components/WhatIDoSection";
import { Typography } from "@mui/material";

export default async function Home() {
  return (
    <main>
      <IntroSection />
      <ProjectsSection />
      <WhatIDoSection />
      <Proficiency />
    </main>
  );
}
