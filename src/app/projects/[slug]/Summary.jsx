import { getProjectSummary, refreshSummary } from "@/server-action/chatbot";
import { Box, Button, CircularProgress } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { RefreshOutlined } from "@mui/icons-material";
import { useAuth } from "@/hooks/useAuth";
import { MarkdownRenderer } from "@/sharedComponents/MarkdownRenderer";


export const Summary = ({ summary, setSummary }) => {
  const [loading, setLoading] = useState(true);
  const { isAdmin } = useAuth();
  const { slug } = useParams();

  const summaryRefresh = () => {
    setLoading(true);
    setSummary("");
    refreshSummary(slug)
      .then((res) => setSummary(res.summary))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (!summary) {
      setLoading(true);
      getProjectSummary(slug)
        .then((data) => setSummary(data.summary))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [slug, summary]);

  return (
    <Box sx={{ mt: 2, mb: 2, position: "relative" }}>
      {loading && !summary ? (
        <CircularProgress />
      ) : (
        <Box sx={{ position: "relative" }}>
          {isAdmin && (
            <Button
              onClick={summaryRefresh}
              size="small"
              sx={{
                position: "absolute",
                top: { xs: -90, sm: -60 }, // top for mobile (xs) and larger screens (sm+)
                right: { xs: 52, sm: 8 },
                minWidth: "auto",
                p: 1,
                borderRadius: "50%",
              }}
            >
              <RefreshOutlined fontSize="small" />
            </Button>
          )}
          <MarkdownRenderer content={summary} />
        </Box>
      )}
    </Box>
  );
};
