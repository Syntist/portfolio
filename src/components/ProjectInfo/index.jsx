"use client";

import { Box, Link, Skeleton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import StarsIcon from "@mui/icons-material/Stars";
import { DeleteProject } from "../DeleteProject";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import { EditButton } from "../EditButton";
import { useEffect, useState } from "react";
import { getRepoData } from "@/server-action/github";

export const ProjectInfo = ({ id, url, handler, github }) => {
  const [project, setProject] = useState();

  useEffect(() => {
    getRepoData(github).then((res) => setProject(res));
  }, [github]);

  return (
    <>
      {project?.name ? (
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
                  fontSize: 22,
                  lineHeight: 1.3,
                  mb: 0,
                  wordBreak: "break-word",
                  color: '#fff',
                  fontWeight: 600,
                  letterSpacing: '.3px',
                  display: 'flex',
                  alignItems:'center',
                  gap: .5,
                  ".MuiSvgIcon-root": { fontSize: 20 }
                }}
              >
                {project?.name}
                {"        "}
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
              <Box>
                <EditButton sx={{ pointerEvents: "auto", zIndex: 1000}} handler={handler} />
                <DeleteProject id={id} />
              </Box>
            </Box>
            {project?.description && (
              <Typography
                variant="body1"
                sx={{
                  fontSize: 14.5,
                  lineHeight: 1.5,
                  color: 'rgba(255 255 255 / .7)',
                  mt: .5
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
                fontSize: 12.5,
                lineHeight: 1.2,
                wordBreak: "break-word",
                color: 'rgba(255 255 255 / .55)',
                display: 'flex',
                gap: '3px',
                alignItems: 'center',
                fontWeight:500
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
                fontSize: 12.5,
                lineHeight: 1.2,
                wordBreak: 'break-word',
                color: 'rgba(255 255 255 / .55)',
                display: 'flex',
                gap: '3px',
                alignItems: 'center',
                fontWeight:500,
                ".MuiSvgIcon-root": { width:14, height:14 }
              }}
            >
              <GitHubIcon />
              {project?.forks}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                fontSize: 12.5,
                lineHeight: 1.2,
                wordBreak: 'break-word',
                color: 'rgba(255 255 255 / .55)',
                display: 'flex',
                gap: '3px',
                alignItems: 'center',
                fontWeight:500,
                ".MuiSvgIcon-root": { width:14, height:14 }
              }}
            >
              <StarsIcon />
              {project?.stargazers_count}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                fontSize: 12.5,
                lineHeight: 1.2,
                wordBreak: 'break-word',
                color: 'rgba(255 255 255 / .4)',
                ml: 'auto',
                fontWeight:500
              }}
            >
              {project?.size}&nbsp;KB
            </Typography>
          </Box>
        </Box>
      ) : (
        <Skeleton variant="rectangular" width={"100%"} height={80} />
      )}
    </>
  );
};
