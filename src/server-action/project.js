"use server";

import db from "@/db/conn";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

let Projects = db.collection("projects");
Projects.createIndex({ github: 1 }, { unique: true });

export const createProject = async (prevState, formData) => {
  const github = formData.get("github");

  if (!github.includes("https://github.com/"))
    return { errmsg: "Should be a github link" };

  try {
    const project = await Projects.insertOne({
      github,
    });

    if (project) {
      revalidatePath("/");
      revalidatePath("/projects");

      return {acknowledged: true};
    }
  } catch (e) {
    return e.errorResponse;
  }
};

export const getProjects = async () => {
  const projects = Projects.find({}).toArray();

  return projects;
};

export const deleteProject = async (prevState, formData) => {
  const projectId = formData.get("projectId");

  try {
    const project = await Projects.deleteOne({ _id: new ObjectId(projectId)});

    if (project) {
      revalidatePath("/");
      revalidatePath("/projects");
    }

    return { deleted: project.deletedCount > 0 };
  } catch (e) {
    return e.errorResponse;
  }
};
