import { Box } from "@mui/material";
import ChatStream from "./chat";

export default async function Projects() {
  return (
    <Box className="h-[calc(100vh-56px)] md:h-[calc(100vh-64px)]">
      <ChatStream context="self" />
    </Box>
  );
}
