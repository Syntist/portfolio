"use server";

import { connectDB } from "@/db/conn";
// import axios from "axios"; // Disabled temporarily
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

async function getBlogsCollection() {
  const db = await connectDB();
  const Blogs = db.collection("blogs");

  Blogs.createIndex({ slug: 1 }, { unique: true });

  return Blogs;
}

export const getBlogs = async () => {
  const _cookies = cookies();
  const Blogs = await getBlogsCollection();

  const cursor = Blogs.find({}, { projection: { content: 0 } }).sort({
    createdAt: -1,
  });
  const blogs = await cursor.toArray();

  return blogs;
};

export const getBlog = async (slug) => {
  const Blogs = await getBlogsCollection();
  const blog = await Blogs.findOne({ slug: slug });

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
    // DISABLED: External blog generator may be compromised
    throw new Error("Blog generation is temporarily disabled for security reasons");
    
    // const response = await axios.get(
    //   "https://articles-generator-peach.vercel.app/api/generate-articles/portfolio"
    // );
    // revalidatePath("/blogs");
    // return response.data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

export const deleteBlog = async (id) => {
  try {
    const Blogs = await getBlogsCollection();
    const del = await Blogs.deleteOne({ _id: new ObjectId(id) });

    if (!del.acknowledged) {
      throw new Error("Failed to delete blog");
    }

    revalidatePath("/blogs");
    return { success: true };
  } catch (error) {
    console.log("error ", error);
    console.error(error);
    return Promise.reject(error);
  }
};
