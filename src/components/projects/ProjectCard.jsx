import { ProjectInfo } from "@/sharedComponents/ProjectInfo";
import { Card } from "@mui/material";
import Link from "next/link";

export const ProjectCard = async ({ project }) => {

  return (
    <>
      <Link className="project-link" href={`/projects/${project?.handler}`}>
        <Card
          className="glass-card"
          sx={{
            p: 3,
            borderRadius: 'var(--radius)',
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            minHeight: '100%',
            position: 'relative',
            overflow: 'hidden',
            transition: 'border-color .4s ease, background .4s ease',
            background: 'linear-gradient(145deg, rgba(40 48 60 / .85), rgba(30 36 46 / .55))',
            border: '1px solid rgba(255 255 255 / .08)',
            '&:hover': {
              background:'linear-gradient(145deg, rgba(50 58 70 / .95), rgba(32 38 48 / .6))',
              borderColor:'rgba(255 255 255 / .18)'
            }
          }}
        >
          <span className="card-sheen" />
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
