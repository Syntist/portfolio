import { Box, IconButton, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import StarsIcon from "@mui/icons-material/Stars";
import { DeleteProject } from "../DeleteProject";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

export const ProjectInfo = ({ project, id, url }) => {
  return (
    <Box>
      <Box
        sx={{
          flexGrow: "1",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: "24px",
              lineHeight: "1.5",
              marginBottom: "0",
              wordBreak: "break-word",
              color: "#fff",
            }}
          >
            {project?.name} {"        "}
            <Link href={project?.html_url} target="_blank">
              <GitHubIcon />
            </Link>
            {"        "}
            {url && (
              <Link href={url} target="_blank">
                <OpenInBrowserIcon />
              </Link>
            )}
          </Typography>

          <DeleteProject id={id} />
        </Box>
        {project?.description && (
          <Typography
            variant="body1"
            sx={{
              fontSize: "16px",
              lineHeight: "1.2",
              color: "#e9e9e9",
            }}
          >
            {project?.description}
          </Typography>
        )}
      </Box>
      <Box></Box>
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
            color: "#C0C0C0",
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
          {project?.language}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            fontSize: "14px",
            lineHeight: "1.2",
            wordBreak: "break-word",
            color: "#C0C0C0",
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
          {project?.forks}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            fontSize: "14px",
            lineHeight: "1.2",
            wordBreak: "break-word",
            color: "#C0C0C0",
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
          {project?.stargazers_count}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            fontSize: "14px",
            lineHeight: "1.2",
            wordBreak: "break-word",
            color: "#C0C0C0",
            marginLeft: "auto",
          }}
        >
          {project?.size}&nbsp;KB
        </Typography>
      </Box>
    </Box>
  );
};
