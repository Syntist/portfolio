"use client";

import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import dynamic from "next/dynamic";
import "@uiw/react-markdown-preview/markdown.css";
import { ProjectInfo } from "@/components/ProjectInfo";
import ChatStream from "@/app/assistant/chat";

// Dynamically import MarkdownPreview to avoid SSR issues
const MarkdownPreview = dynamic(() => import("@uiw/react-markdown-preview"), {
  ssr: false,
});

export default function ProjectTabs({ project, readmeData, repoData, context }) {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ width: "80%", margin: "0 auto", mt: 10 }}>
      <ProjectInfo project={repoData} />

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
        <Tab label="Interactive Information" />
      </Tabs>
      {selectedTab < 2 && (
        <Box sx={{ mt: 2 }}>
          <MarkdownPreview
            source={
              selectedTab === 0 ? project.description || readmeData : readmeData
            }
          />
        </Box>
      )}

      {selectedTab === 2 && <ChatStream context={context} />}
    </Box>
  );
}
