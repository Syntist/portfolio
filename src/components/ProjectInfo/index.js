import { Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import StarsIcon from "@mui/icons-material/Stars";

export const ProjectInfo = ({ project }) => {

  return (
    <Box>
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
            color: "#fff",
          }}
        >
          {project?.name}
        </Typography>
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
