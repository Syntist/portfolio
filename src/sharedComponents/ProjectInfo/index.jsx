"use client";

import { Box, Link, Skeleton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import StarsIcon from "@mui/icons-material/Stars";
import { DeleteProject } from "../DeleteProject";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import { EditButton } from "../EditButton";
import { Suspense, useEffect, useState } from "react";
import { getRepoData } from "@/server-action/github";
import { useAuth } from "@/hooks/useAuth";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const MarkdownPreview = dynamic(() => import("@uiw/react-markdown-preview"), {
  ssr: false,
});

export const ProjectInfo = ({
  id,
  url,
  handler,
  github,
  title,
  description,
  short = true,
}) => {
  const { isAdmin } = useAuth();
  const [project, setProject] = useState();
  const pathname = usePathname()


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
                  color: "#fff",
                  fontWeight: 600,
                  letterSpacing: ".3px",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
              paddingLeft: "9px",

                  ".MuiSvgIcon-root": { fontSize: 20 },
                }}
              >
                {title}
                {"        "}
                <Link className="ms-2" href={project?.html_url} target="_blank">
                  <GitHubIcon sx={{ paddingBottom: "3px" }} />
                </Link>
                {"        "}
                {url && (
                  <Link className="ms-2" href={url} target="_blank">
                    <OpenInBrowserIcon sx={{ paddingBottom: "3px" }} />
                  </Link>
                )}
              </Typography>
              {isAdmin && (
                <Box>
                  <EditButton
                    sx={{ pointerEvents: "auto", zIndex: 1000 }}
                    handler={handler}
                  />
                  <DeleteProject id={id} />
                </Box>
              )}
            </Box>
            {project?.description ||
              (description && (
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: 14.5,
                    lineHeight: 1.5,
                    color: "rgba(255 255 255 / .7)",
                    mt: 0.5,
                  }}
                >
                  <Suspense>
                    <MarkdownPreview
                      className={`wmde-markdown background ${short ? "truncate-2" : ""}`}
                      source={project?.description || description}
                    />
                  </Suspense>
                </Typography>
              ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              marginTop: "24px",
              alignItems: "center",
              paddingLeft: "9px",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontSize: 12.5,
                lineHeight: 1.2,
                wordBreak: "break-word",
                color: "rgba(255 255 255 / .55)",
                display: "flex",
                gap: "3px",
                alignItems: "center",
                fontWeight: 500,
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
                wordBreak: "break-word",
                color: "rgba(255 255 255 / .55)",
                display: "flex",
                gap: "3px",
                alignItems: "center",
                fontWeight: 500,
                ".MuiSvgIcon-root": { width: 14, height: 14 },
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
                wordBreak: "break-word",
                color: "rgba(255 255 255 / .55)",
                display: "flex",
                gap: "3px",
                alignItems: "center",
                fontWeight: 500,
                ".MuiSvgIcon-root": { width: 14, height: 14 },
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
                wordBreak: "break-word",
                color: "rgba(255 255 255 / .4)",
                ml: "auto",
                fontWeight: 500,
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
