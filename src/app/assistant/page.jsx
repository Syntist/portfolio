import { Box } from "@mui/material";
import ChatStream from "./chat";

export default async function Projects() {
  return (
    <Box mt={10}>
      <ChatStream context="self" />
    </Box>
  );
}
