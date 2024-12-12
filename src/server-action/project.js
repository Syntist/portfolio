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

export const updateProject = async (formData) => {
  try {
    if (!formData) throw { errmsg: "No formdata given" };

    const { _id, ...updateData } = formData;

    const project = await Projects.updateOne(
      { _id: new ObjectId(_id) },
      { $set: updateData }
    );

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
  const projects = await Projects.find({}).toArray();

  const plainProjects = projects.map((project) => {
    const plainProject = { ...project };

    plainProject._id = project?._id?.toString();

    return plainProject;
  });

  return plainProjects;
};

export const getProject = async (handler) => {
  const project = await Projects.findOne({ handler: handler });

  return { ...project, _id: project?._id?.toJSON() };
};

export const deleteProject = async (id) => {
  try {
    const project = await Projects.deleteOne({ _id: new ObjectId(id) });

    if (project) {
      revalidatePath("/");
      revalidatePath("/projects");
    }

    return { deleted: project.deletedCount > 0 };
  } catch (e) {
    return e.errorResponse;
  }
};
