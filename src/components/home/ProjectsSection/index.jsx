import * as React from "react";
import { getProjects } from "@/server-action/project";
import { Box, Container } from "@mui/material";
import { ProjectsGridClient } from "./ProjectsGridClient";

export default async function ProjectsSection() {
  const projects = await getProjects();
  return (
    <Box id="projects" sx={{ width:"100%", position:'relative', py:{ xs:6, md:8 } }}>
      <Container maxWidth="xl">
        <ProjectsGridClient projects={projects} />
      </Container>
    </Box>
  );
}
