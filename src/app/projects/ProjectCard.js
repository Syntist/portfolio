import { getRepoData } from "@/server-action/github";
import { Box, Button, Card, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import StarsIcon from "@mui/icons-material/Stars";
import { deleteProject } from "@/server-action/project";
import { SubmitButton } from "@/components/SubmitButton";
import { DeleteProject } from "@/components/DeleteProject";

export const ProjectCard = async ({ id, url }) => {
  const project = await getRepoData(url);

  return (
    <>
      <Link
        href={url}
        target="_blank"
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
            border: "1px solid #ddd",
          }}
        >
          <Box
            sx={{
              flexGrow: "1",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: "24px",
                lineHeight: "1.5",
                marginBottom: "16px",
                wordBreak: "break-word",
              }}
            >
              {project?.data?.name}
            </Typography>
            {project?.data?.description && (
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  lineHeight: "1.2",
                  color: "#586069",
                }}
              >
                {project?.data?.description}
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              marginTop: "24px",
              alignItems: "center",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontSize: "14px",
                lineHeight: "1.2",
                wordBreak: "break-word",
                color: "#6a737d",
                display: "flex",
                gap: "3px",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  borderRadius: "100%",
                  backgroundColor: "rgb(241, 224, 90)",
                }}
              ></Box>
              {project?.data?.language}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                fontSize: "14px",
                lineHeight: "1.2",
                wordBreak: "break-word",
                color: "#6a737d",
                display: "flex",
                gap: "3px",
                alignItems: "center",

                ".MuiSvgIcon-root": {
                  width: "14px",
                  height: "14px",
                },
              }}
            >
              <GitHubIcon />
              {project?.data?.forks}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                fontSize: "14px",
                lineHeight: "1.2",
                wordBreak: "break-word",
                color: "#6a737d",
                display: "flex",
                gap: "3px",
                alignItems: "center",

                ".MuiSvgIcon-root": {
                  width: "14px",
                  height: "14px",
                },
              }}
            >
              <StarsIcon />
              {project?.data?.stargazers_count}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                fontSize: "14px",
                lineHeight: "1.2",
                wordBreak: "break-word",
                color: "#6a737d",
                marginLeft: "auto",
              }}
            >
              {project?.data?.size}&nbsp;KB
            </Typography>
          </Box>
        </Card>
      </Link>
      {id && <DeleteProject id={id} />}
    </>
  );
};
