import { createProject, getProjects } from "@/server-action/project";
import Image from "next/image";
import { Box } from "@mui/system";
import IntroSection from "@/components/IntroSection";
import ProjectsSection from "@/components/ProjectsSection";

export default async function Home() {
  return (
    <main>
      <IntroSection />
      <ProjectsSection />
    </main>
  );
}
