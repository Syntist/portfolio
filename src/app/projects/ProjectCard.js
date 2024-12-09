import { getRepoData } from "@/server-action/github";
import { Card } from "@mui/material";
import Link from "next/link";
import { ProjectInfo } from "@/components/ProjectInfo";

export const ProjectCard = async ({ project }) => {
  const gitInfo = await getRepoData(project?.github);

  return (
    <>
      <Link
        href={`/projects/${project?.handler}`}
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
            backgroundColor: "#2b2b2b",
          }}
        >
          <ProjectInfo
            project={gitInfo.data}
            id={project?._id}
            url={project?.url}
          />
        </Card>
      </Link>
    </>
  );
};
