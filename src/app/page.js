import { createProject, getProjects } from "@/server-action/project";
import Image from "next/image";
import { ProjectCard } from "./projects/ProjectCard";
import { Box } from "@mui/system";

export default async function Home() {
  const projects = await getProjects();

  return (
    <main>
      <h1>Welcome, I am Syed Talha Khalid</h1>

      <p>desaawfawfaw awdawbdahwdb khawbd kawbd khawbdkh abwdh bawkdbka</p>
      <Box>
        {projects.map((project) => (
          <ProjectCard key={project._id} url={project.github} />
        ))}
      </Box>
    </main>
  );
}
