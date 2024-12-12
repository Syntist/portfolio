import { getRepoData } from "@/server-action/github";
import { Card } from "@mui/material";
import Link from "next/link";
import { ProjectInfo } from "@/components/ProjectInfo";

export const ProjectCard = async ({ project }) => {

  return (
    <>
      <Link
        className="project-link"
        href={`/projects/${project?.handler}`}
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
            minHeight: "100%",
          }}
        >
          <ProjectInfo
            id={project?._id}
            github={project?.github}
            url={project?.url}
            handler={project.handler}
          />
        </Card>
      </Link>
    </>
  );
};
