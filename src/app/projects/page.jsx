import { ProjectCard } from "@/components/projects/ProjectCard";
import { getProjects } from "@/server-action/project";
import { Box, Container } from "@mui/material";
import { Suspense } from "react";
import { ProjectsPageHeader } from "./ProjectsPageHeader";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <Box>
      <ProjectsPageHeader />
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, marginTop: 5 }}>
        <Suspense>
          {projects.map((project) => (
            <Box key={project?._id.toString()} mb={3}>
              <ProjectCard project={project} />
            </Box>
          ))}
        </Suspense>
      </Container>
    </Box>
  );
}
