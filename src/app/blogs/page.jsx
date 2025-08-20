import Link from "next/link";
import { getBlogs } from "@/server-action/blog";

export default async function BlogsPage() {
  const blogs = await getBlogs();

  const getTitle = (blog) => {
    return blog.content.split("\n")[0].split("# ")[1];
  };

  const stripMarkdown = (md = "") =>
    md
      .replace(/```[\s\S]*?```/g, " ") // code blocks
      .replace(/!\[[^\]]*\]\([^)]*\)/g, " ") // images
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1") // links
      .replace(/^#{1,6}\s*/gm, "") // headings
      .replace(/`([^`]+)`/g, "$1") // inline code
      .replace(/\*\*|__|\*|_/g, "") // emphasis
      .replace(/^>\s*/gm, "") // quotes
      .replace(/^(-|\*|\+|\d+\.)\s+/gm, "") // lists
      .replace(/\r/g, "")
      .trim();

  const getExcerpt = (blog, maxLen = 180) => {
    const lines = blog?.content?.split("\n") ?? [];
    const body = lines.length > 1 ? lines.slice(1).join("\n") : blog?.content ?? "";
    const plain = stripMarkdown(body).replace(/\s+/g, " ").trim();
    if (plain.length <= maxLen) return plain;
    const cut = plain.slice(0, maxLen);
    const lastSpace = cut.lastIndexOf(" ");
    return `${lastSpace > 0 ? cut.slice(0, lastSpace) : cut}…`;
  };

  const formatDate = (dateLike) => {
    if (!dateLike) return null;
    try {
      const d = new Date(dateLike);
      if (isNaN(d)) return null;
      return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
    } catch {
      return null;
    }
  };

  const readingTime = (blog) => {
    const words = stripMarkdown(blog?.content ?? "").split(/\s+/).filter(Boolean).length;
    const mins = Math.max(1, Math.round(words / 200));
    return `${mins} min read`;
  };

  return (
    <div>
      <div className="container-xl mt-10 mb-10">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold">Blogs</h1>
          <p className="mt-2 text-white/70">Insights, notes, and write-ups.</p>
        </div>

        {Array.isArray(blogs) && blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => {
              const title = getTitle(blog) || "Untitled";
              const href = `/blogs/${blog?.title}`;
              const date = formatDate(blog?.createdAt);
              const excerpt = getExcerpt(blog);
              const img = blog?.image_url || null;

              return (
                <Link
                  key={blog._id}
                  href={href}
                  className="project-link glass-card"
                >
                  <div className="aspect-[16/9] w-full bg-white/5">
                    {img ? (
                      <img src={img} alt={title} loading="lazy" className="h-full w-full object-cover" />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-white/10 to-white/0" />
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      {date && <span>{date}</span>}
                      <span className="before:content-['•'] before:mx-2 before:text-white/30" />
                      <span>{readingTime(blog)}</span>
                    </div>
                    <h2 className="mt-2 text-lg font-semibold leading-snug">{title}</h2>
                    {excerpt && <p className="mt-1 text-sm text-white/70">{excerpt}</p>}
                    <div className="mt-4 inline-flex items-center text-sm font-medium text-teal-300">
                      Read more
                      <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10 10.293 6.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <span className="card-sheen" />
                </Link>
              );
            })}
          </div>
        ) : (
          <p className="text-white/70">No blogs found.</p>
        )}
      </div>
    </div>
  );
}
