import ChatStream from "@/app/assistant/chat";
import { contextSession } from "@/server-action/chatbot";
import { CustomProgress } from "@/sharedComponents/CustomProgress";
import { Box } from "@mui/material";
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

  if (loading) {
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          height: '200px'
        }}
      >
        <CustomProgress size="lg" className={"m-auto"} />
      </Box>
    );
  }

  return (
    <Box className="h-[calc(100dvh-90px)] md:h-[calc(100vh-100px)]" >
      <ChatStream context={context} isProjectMode={true} />
    </Box>
  );
}
