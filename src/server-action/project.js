"use server";

import db from "@/db/conn";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

let Projects = db.collection("projects");
Projects.createIndex({ github: 1, url: 1, title: 1 }, { unique: true });

export const createProject = async (formData) => {
  try {
    if (!formData) throw { errmsg: "No formdata given" };

    const project = await Projects.insertOne(formData);

    if (project) {
      revalidatePath("/");
      revalidatePath("/projects");

      return { acknowledged: true };
    }
  } catch (e) {
    const error = e.errorResponse ? e.errorResponse : e;

    return Promise.reject(JSON.stringify(error));
  }
};

export const getProjects = async () => {
  const projects = Projects.find({}).toArray();

  return projects;
};

export const getProject = async (handler) => {
  const project = Projects.findOne({ handler: handler });

  return project;
};

export const deleteProject = async (prevState, formData) => {
  const projectId = formData.get("projectId");

  try {
    const project = await Projects.deleteOne({ _id: new ObjectId(projectId) });

    if (project) {
      revalidatePath("/");
      revalidatePath("/projects");
    }

    return { deleted: project.deletedCount > 0 };
  } catch (e) {
    return e.errorResponse;
  }
};
