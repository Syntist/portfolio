"use client";

import { chatbot, testChatBot } from "@/server-action/chatbot";
import { TextField, Button, Typography, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function ChatStream({ context }) {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [openai, setOpenai] = useState(false);

  const [response, setResponse] = useState("");

  const [loading, setLoading] = useState("");

  const updateChat = (msg, role) => {
    if (!openai) {
      setChat((prev) => [
        ...prev,
        {
          role: role,
          parts: [{ text: msg }],
        },
      ]);
    } else {
      setChat((prev) => [
        ...prev,
        {
          role: role,
          content: msg,
        },
      ]);
    }
  };

  const chatEndRef = useRef(null);

  // Scroll to the end of the chat whenever chat updates
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chat]);

  const fetchChatStream = async (data) => {
    setLoading(true);
    setMessage("");
    updateChat(data, "user");

    const stream = await (openai ? testChatBot : chatbot)(data, chat, context);

    const reader = stream.getReader();
    const decoder = new TextDecoder();

    let msg;

    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        setResponse("");
        updateChat(msg, openai ? "assistant" : "model");

        break;
      }
      msg = msg
        ? msg + decoder.decode(value, { stream: true })
        : decoder.decode(value, { stream: true });
      setResponse((prev) => prev + decoder.decode(value, { stream: true }));
    }
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      fetchChatStream(message);
    }
  };

  return (
    <Box
      sx={{
        height: "92vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#1e1e1e",
        color: "#f5f5f5",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          padding: 2,
          overflowY: "auto",
          backgroundColor: "#2e2e2e",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Box
            sx={{
              padding: 1.5,
              backgroundColor: "#555",
              color: "#fff",
              borderRadius: 2,
              maxWidth: "70%",
            }}
          >
            <Typography variant="body1">How can I help you?</Typography>
          </Box>
        </Box>

        {chat?.map((entry, index) => (
          <>
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent:
                  entry.role === "user" ? "flex-end" : "flex-start",
              }}
            >
              <Box
                sx={{
                  padding: 1.5,
                  backgroundColor: entry.role === "user" ? "#1E88E5" : "#555",
                  color: "#fff",
                  borderRadius: 2,
                  maxWidth: "70%",
                }}
              >
                <Typography variant="body1">
                  <ReactMarkdown>
                    {entry?.parts?.[0]?.text || entry?.content}
                  </ReactMarkdown>
                </Typography>
              </Box>
            </Box>

            {loading && chat.length - 1 === index && (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Box
                  sx={{
                    padding: 1.5,
                    backgroundColor: "#555",
                    color: "#fff",
                    borderRadius: 2,
                    maxWidth: "70%",
                  }}
                >
                  <Typography variant="body1">
                    <ReactMarkdown>{response}</ReactMarkdown>
                  </Typography>
                  {/* Typing Indicator */}
                  <Box
                    sx={{
                      marginTop: 1,
                      padding: "4px 12px",
                      backgroundColor: "#444",
                      color: "#ddd",
                      borderRadius: "8px",
                      display: "inline-block",
                      fontSize: "0.9rem",
                      fontStyle: "italic",
                      border: "1px solid #666",
                      animation: "pulse 1.5s infinite",
                    }}
                  >
                    {!response ? "thinking..." : "typing..."}
                  </Box>
                </Box>
              </Box>
            )}
          </>
        ))}
      </Box>

      {/* Chat Input */}
      <Box
        sx={{
          position: "sticky",
          bottom: 0,
          backgroundColor: "#1e1e1e",
          padding: 2,
          borderTop: "1px solid #444",
          display: "flex",
          alignItems: "center",
        }}
      >
        <TextField
          fullWidth
          multiline
          variant="outlined"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          sx={{
            input: { color: "#fff" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#555" },
              "&:hover fieldset": { borderColor: "#888" },
              "&.Mui-focused fieldset": { borderColor: "#1E88E5" },
            },
            marginRight: 1,
          }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#1E88E5",
            "&:hover": { backgroundColor: "#1565C0" },
          }}
          onClick={() => fetchChatStream(message)}
          disabled={loading}
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}
