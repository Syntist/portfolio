import Link from "next/link";
import { getBlogs } from "@/server-action/blog";
import { LocalTime } from "./LocalTime";
import { GenerateBlog } from "./GenerateBlog";
import DeleteBlog from "./DeleteBlog";

export default async function BlogsPage() {
  const blogs = await getBlogs();

  console.log(blogs)

  return (
    <div>
      <div className="container-xl mt-5 mb-5">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold">Blogs</h1>
            <GenerateBlog />
          </div>
          <p className="mt-2 text-white/70">Insights, notes, and write-ups.</p>
        </div>

        {Array.isArray(blogs) && blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => {
              const title = blog.title || "";
              const href = `/blogs/${blog?.slug}` || "";
              const date = blog?.createdAt;
              const excerpt = blog?.excerpt || null;
              const img = blog?.image_url || null;
              const read_time = blog?.read_time || null;

              return (
                <Link
                  key={blog._id}
                  href={href}
                  className="project-link glass-card"
                >
                  <div className="aspect-[16/9] w-full bg-white/5">
                    {img ? (
                      <img
                        src={img}
                        alt={title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-white/10 to-white/0" />
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      {date && <LocalTime date={date} />}
                      <span className="before:content-['•'] before:mx-2 before:text-white/30" />
                      <span>{read_time} min read</span>
                    </div>
                    <h2 className="mt-2 text-lg font-semibold leading-snug">
                      {title}
                    </h2>
                    {excerpt && (
                      <p className="mt-1 text-sm text-white/70">{excerpt}</p>
                    )}
                    <div className="mt-4 flex items-center text-sm font-medium text-teal-300">
                      <span className="inline-flex items-center">
                        Read more
                        <svg
                          className="ml-1 h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10 10.293 6.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>

                      {/* push to the right */}
                      <div className="ml-auto">
                        <DeleteBlog id={blog?._id} title={title} />
                      </div>
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
