"use client";

import { getProjects } from "@/server-action/project";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";


export const GetProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((data) => {
      setProjects(data);
    });
  }, []);

  return (
    <Box mt={10}>
      <Box
        sx={{ width: "100%", margin: "0 auto 20px", padding: "0 24px", mt: 10 }}
      >
        {projects.map((project) => (
          <Box key={project?._id} mt={2}>
            <ProjectCard project={project} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
