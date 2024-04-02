import * as React from 'react';
// import { Wrapper, Heading, Description } from './style';
import { createProject, getProjects } from "@/server-action/project";
import { Box, Typography, Container, Grid } from '@mui/material';
import { ProjectCard } from "../../app/projects/ProjectCard";

export default async function ProjectsSection() {
  const projects = await getProjects();

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        paddingTop: "50px",
        paddingBottom: "50px"
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            marginBottom: "45px"
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: "40px",
              lineHeight: "1.5",
              display: "flex",
              width: "100%",
              alignItems: "flex-end",
              gap: "24px",
              fontWeight: "400",

              "&:after": {
                content: "''",
                flexGrow: "1",
                display: "block",
                height: "1px",
                backgroundColor: "currentcolor",
                opacity: "0.1",
                position: "relative",
                top: "-9px"
              }
            }}
          >
            My Projects
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {projects.map((project) => (
            <Grid
              key={project._id}
              item
              xs={6}
              md={4}
              sx={{
                display: "flex"
              }}
            >
              <ProjectCard key={project._id} url={project.github} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
