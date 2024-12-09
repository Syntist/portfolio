import ChatStream from "@/app/assistant/chat";
import { retrieveGitHubRepoInfo } from "@/utils/utils";
import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function InteractiveMode({ project, context, setContext }) {
  const [loading, setLoading] = useState(context ? false : true);

  useEffect(() => {
    if (!context) {
      setLoading(true);
      retrieveGitHubRepoInfo(project.github)
        .then((res) => setContext(res))
        .finally(() => setLoading(false));
    }
  }, [context, project.github, setContext]);

  return (
    <>{loading ? <CircularProgress /> : <ChatStream context={context} />}</>
  );
}
