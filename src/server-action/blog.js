"use server";

import db from "@/db/conn";

const Blogs = db.collection("blogs");

export const getBlogs = async () => {
  const cursor = Blogs.find({}).sort({ createdAt: -1 });
  const blogs = await cursor.toArray();


  return blogs.map((b) => ({
    ...b,
    _id: b._id?.toJSON?.() ?? String(b._id),
  }));
};


export const getBlog = async (slug) => {
  const blog = await Blogs.findOne({ title: slug });

  if (!blog) {
    throw new Error("Blog not found");
  }

  return {
    ...blog,
    _id: blog._id?.toJSON?.() ?? String(blog._id),
  };
};
