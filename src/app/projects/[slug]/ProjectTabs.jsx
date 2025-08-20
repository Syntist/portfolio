"use client";

import React, { useEffect, useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import InteractiveMode from "./InteractiveMode";
import { getRepoReadme } from "@/server-action/github";
import { Summary } from "./Summary";
import { ProjectInfo } from "@/sharedComponents/ProjectInfo";
import { MarkdownRenderer } from "@/sharedComponents/MarkdownRenderer";
import { CustomProgress } from "@/sharedComponents/CustomProgress";

export default function ProjectTabs({ project, repoData }) {
  const [readmeData, setReadmeData] = useState();
  const [selectedTab, setSelectedTab] = useState(0);
  const [loading, setLoading] = useState(true);
  const [context, setContext] = useState("");
  const [summary, setSummary] = useState("");

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const numTab = project.description ? 3 : 2;

  useEffect(() => {
    setLoading(true);
    getRepoReadme(project.github)
      .then((res) => setReadmeData(res))
      .finally(() => setLoading(false));
  }, [project.github]);

  return (
    <Box
      sx={{ width: "100%", margin: "0 auto 20px", padding: "0 24px", mt: 5 }}
    >
      <ProjectInfo
        title={project?.title}
        description={project?.description}
        github={project.github}
        id={project._id}
        url={project.url}
        handler={project.handler}
        short={false}
      />

      {/* Tabs for Description and README */}
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        aria-label="Project tabs"
        textColor="primary"
        indicatorColor="primary"
        sx={{ mb: 2 }}
      >
        <Tab value={0} label="Summary" />
        {/* {project.description && <Tab label="Description" />} */}
        <Tab value={2} label="GitHub README" />
        <Tab value={3} label="Interactive Mode" />
      </Tabs>

      {selectedTab === 0 && (
        <Summary summary={summary} setSummary={setSummary} />
      )}

      {/* {selectedTab === 1 && project.description && (
        <Box sx={{ mt: 2, mb: 2 }}>
          <MarkdownPreview source={project.description} />
        </Box>
      )} */}

      {selectedTab === 2 && (
        <Box sx={{ mt: 2, mb: 2 }}>
          {loading ? (
            <CustomProgress size="lg" className={"m-auto"} />
          ) : (
            <MarkdownRenderer
              content={
                selectedTab === 0
                  ? project.description || readmeData
                  : readmeData
              }
            />
          )}
        </Box>
      )}

      {selectedTab === 3 && (
        <InteractiveMode
          project={project}
          context={context}
          setContext={setContext}
        />
      )}
    </Box>
  );
}
