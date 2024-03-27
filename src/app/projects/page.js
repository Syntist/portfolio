import { ProjectForm } from "@/components/ProjectForm";
import { getRepoData } from "@/server-action/github";
import { getProjects } from "@/server-action/project";
import { ProjectCard } from "./ProjectCard";
import { Box } from "@mui/material";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <Box mt={10}>
      {projects.map((project) => (
        <Box key={project._id}>
          <ProjectCard id={project._id.toString()} url={project?.github} />
          <h1>{project?.github}</h1>
        </Box>
      ))}
      <ProjectForm />
    </Box>
  );
}
