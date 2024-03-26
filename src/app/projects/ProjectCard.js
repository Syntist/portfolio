import { getRepoData } from "@/server-action/github";
import { Box, Card } from "@mui/material";

export const ProjectCard = async ({ url }) => {
  const project = await getRepoData(url);
  console.log(project)

  return (
    <a href={url} target="_blank">
    <Card> 
      <Box>
        <h1>{project?.data?.name}</h1>
        <p>{project?.data?.description}</p>
        <p>{project?.data?.language}</p>
        <p>{project?.data?.forks}</p>
        <p>{project?.data?.stargazers_count}</p>
        <p>{project?.data?.size}</p>
      </Box>
    </Card>
    </a>
  );
};
