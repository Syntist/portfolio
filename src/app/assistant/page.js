import { Box } from "@mui/material";
import ChatStream from "./chat";
import { personalContext } from "@/utils/chatContext";

export default async function Projects() {
  return (
    <Box mt={10}>
      <ChatStream context={personalContext} />
    </Box>
  );
}
