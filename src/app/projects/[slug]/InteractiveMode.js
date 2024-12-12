import ChatStream from "@/app/assistant/chat";
import { contextSession } from "@/server-action/chatbot";
import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function InteractiveMode({ project, context, setContext }) {
  const [loading, setLoading] = useState(context ? false : true);

  useEffect(() => {
    if (!context) {
      setLoading(true);
      contextSession(project._id, project.github)
        .then((res) => setContext(res))
        .finally(() => setLoading(false));
    }
  }, [context, project._id, project.github, setContext]);

  return (
    <>{loading ? <CircularProgress /> : <ChatStream context={context} />}</>
  );
}
