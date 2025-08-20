import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown.css";

export const MarkdownRenderer = ({ content, className }) => {
  return (
    <div className={`markdown-body border-r-2 mb-2 ${className}`} style={{padding: "15px", borderRadius: "10px", marginBottom: "2px"}} >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
};

