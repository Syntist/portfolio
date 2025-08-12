import { Box } from "@mui/material";
import ChatStream from "./chat";

export default async function Projects() {
  return (
    <Box>
      <ChatStream context="self" />
    </Box>
  );
}
