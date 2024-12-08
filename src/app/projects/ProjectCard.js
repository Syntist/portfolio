import { getRepoData } from "@/server-action/github";
import { Box, Card, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import StarsIcon from "@mui/icons-material/Stars";
import { DeleteProject } from "@/components/DeleteProject";
import Link from "next/link";
import { ProjectInfo } from "@/components/ProjectInfo";

export const ProjectCard = async ({ id, url, handler }) => {
  const project = await getRepoData(url);

  return (
    <>
      <Link
        href={`/projects/${handler}`}
        sx={{
          display: "flex",
          fontFamily: "roboto",
          width: "100%",
          textDecoration: "none",
          transition: "transform 0.3s ease",
          transform: "scale(1)",

          "&:hover": {
            transform: "scale(1.01)",
          },
        }}
      >
        <Card
          sx={{
            padding: "24px",
            borderRadius: "10px",
            display: "flex",
            width: "100%",
            flexDirection: "column",
            border: "1px solid #373737",
            backgroundColor: "#2b2b2b"
          }}
        >
          <ProjectInfo project={project.data} />
        </Card>
      </Link>
      {id && <DeleteProject id={id} />}
    </>
  );
};
