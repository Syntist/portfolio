import { getBlog } from "@/server-action/blog";
import { MarkdownRenderer } from "@/sharedComponents/MarkdownRenderer";

export default async function BlogPage({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-full lg:w-[92%] mb-5">
        <div
          className="border border-white/10 transition-colors duration-300 hover:border-white/20"
          style={{ borderRadius: "10px" }}
        >
          <MarkdownRenderer content={blog.content} />
        </div>
      </div>
    </div>
  );
}