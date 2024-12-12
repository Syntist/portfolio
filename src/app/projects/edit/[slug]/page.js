import { Box } from "@mui/material";
import React from "react";
import { ProjectForm } from "../../add/ProjectForm";
import { getProject } from "@/server-action/project";


export default async function Projects({ params }) {
  const { slug } = await params;
  
  const project = await getProject(slug);

  return (
    <Box mt={10}>
      <ProjectForm data={project} />
    </Box>
  );
}
