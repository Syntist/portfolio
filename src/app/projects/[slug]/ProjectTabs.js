"use client";

import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import dynamic from "next/dynamic";
import "@uiw/react-markdown-preview/markdown.css";
import { ProjectInfo } from "@/components/ProjectInfo";
import InteractiveMode from "./InteractiveMode";

// Dynamically import MarkdownPreview to avoid SSR issues
const MarkdownPreview = dynamic(() => import("@uiw/react-markdown-preview"), {
  ssr: false,
});

export default function ProjectTabs({ project, readmeData, repoData }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [context, setContext] = useState("");

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const numTab = project.description ? 2 : 1;

  return (
    <Box sx={{ width: "100%", margin: "0 auto 20px", padding: "0 24px", mt: 10 }}>
      <ProjectInfo project={repoData} id={project._id} url={project.url} />

      {/* Tabs for Description and README */}
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        aria-label="Project tabs"
        textColor="primary"
        indicatorColor="primary"
        sx={{ mb: 2 }}
      >
        {project.description && <Tab label="Description" />}
        <Tab label="GitHub README" />
        <Tab label="Interactive Mode" />
      </Tabs>
      {selectedTab < numTab && (
        <Box sx={{ mt: 2 }}>
          <MarkdownPreview
            source={
              selectedTab === 0 ? project.description || readmeData : readmeData
            }
          />
        </Box>
      )}

      {selectedTab === numTab && (
        <InteractiveMode
          project={project}
          context={context}
          setContext={setContext}
        />
      )}
    </Box>
  );
}
