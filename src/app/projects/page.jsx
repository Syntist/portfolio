import { getProjects } from "@/server-action/project";
import { ProjectCard } from "./ProjectCard";
import { Box } from "@mui/material";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <Box>
      <Box sx={{ width: "100%", margin: "0 auto 20px", padding: "0 24px", mt: 5 }}>
        {projects.map((project) => (
          <Box key={project?._id} mt={2}>
            <ProjectCard project={project} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
