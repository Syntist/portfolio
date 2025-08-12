"use client";

import { chatbot, testChatBot } from "@/server-action/chatbot";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

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
  }, [chat, response]);

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
    <div className="h-[92vh] flex flex-col bg-[rgb(var(--color-bg))] text-slate-100/95">
      <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6 flex flex-col">
        <div className="w-full max-w-5xl mx-auto flex flex-col gap-5">
          <div className="flex justify-start">
            <div className="rounded-xl bg-white/5 border border-white/10 px-5 py-4 shadow-sm w-full md:w-auto md:max-w-3xl text-sm leading-relaxed">
              <p className="opacity-90">How can I help you?</p>
            </div>
          </div>
          {chat?.map((entry, index) => (
            <div key={index} className="contents">
              <div
                className={`flex ${
                  entry.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`group relative px-5 py-4 rounded-xl w-full md:max-w-3xl text-sm leading-relaxed shadow-sm border backdrop-blur-md transition-colors ${
                    entry.role === "user"
                      ? "bg-gradient-to-br from-indigo-600 to-fuchsia-600 border-indigo-400/40 text-white shadow-[0_4px_18px_-4px_rgba(99,102,241,.55)]"
                      : "bg-white/6 border-white/10 text-white/90"
                  }`}
                >
                  <ReactMarkdown className="prose prose-invert prose-p:my-2 prose-pre:my-3 prose-code:px-1 prose-code:py-0.5 prose-code:bg-white/10 prose-code:rounded-md max-w-none break-words">
                    {entry?.parts?.[0]?.text || entry?.content}
                  </ReactMarkdown>
                </div>
              </div>
              {loading && chat.length - 1 === index && (
                <div className="flex justify-start">
                  <div className="px-5 py-4 rounded-xl w-full md:max-w-3xl text-sm leading-relaxed shadow-sm border border-white/10 bg-white/6 text-white/90">
                    <ReactMarkdown className="prose prose-invert max-w-none">
                      {response}
                    </ReactMarkdown>
                    <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-xs font-medium tracking-wide animate-pulse">
                      {!response ? "thinking..." : "typing..."}
                      <span className="flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce [animation-delay:.0s]"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce [animation-delay:.15s]"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce [animation-delay:.3s]"></span>
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          <div ref={chatEndRef} style={{ height: 1, width: "100%" }} />
        </div>
      </div>
      <div className="sticky bottom-0 border-t border-white/10 bg-[rgb(var(--color-bg))]/85 backdrop-blur supports-[backdrop-filter]:bg-[rgb(var(--color-bg))]/70 px-4 md:px-8 py-5">
        <div className="w-full max-w-5xl mx-auto flex items-end gap-4">
          <div className="flex-1 relative group">
            <textarea
              rows={1}
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              className="w-full resize-none rounded-xl bg-white/5 border border-white/10 focus:border-indigo-400/60 focus:ring-2 focus:ring-indigo-400/30 outline-none px-5 py-4 text-sm leading-relaxed placeholder:text-white/40 text-white/90 shadow-inner shadow-black/20 max-h-40 transition-colors"
            />
          </div>
          <button
            onClick={() => fetchChatStream(message)}
            disabled={!message.trim() || loading}
            className="relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-fuchsia-600 disabled:from-slate-500 disabled:to-slate-600 disabled:opacity-60 disabled:cursor-not-allowed px-6 py-4 text-sm font-semibold tracking-wide text-white shadow-[0_4px_20px_-4px_rgba(99,102,241,.5)] hover:shadow-[0_6px_24px_-4px_rgba(99,102,241,.65)] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-[rgb(var(--color-bg))]"
          >
            <PaperAirplaneIcon className="w-4 h-4 -rotate-45" />
            <span>{loading ? "Sending" : "Send"}</span>
            <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/15" />
          </button>
        </div>
      </div>
    </div>
  );
}
