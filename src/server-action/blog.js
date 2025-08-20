"use server";

import db from "@/db/conn";
import axios from "axios";

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

export const generateBlog = async () => {
  try {
    const response = await axios.get(
      "https://articles-generator-peach.vercel.app/api/generate-articles/cron"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};
