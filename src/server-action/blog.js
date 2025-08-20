"use server";

import db from "@/db/conn";
import axios from "axios";
import { ObjectId } from "mongodb";

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

export const deleteBlog = async (id) => {
  try {
    console.log("slug ", id)

    const del = await Blogs.deleteOne({ _id: new ObjectId(id) });

    if (!del.acknowledged) {
      throw new Error("Failed to delete blog");
    }

    return { success: true };
  } catch (error) {

    console.log("error ", error)
    console.error(error);
    return Promise.reject(error);
  }
};
