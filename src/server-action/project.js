"use server";

import db from "@/db/conn";
import { revalidatePath } from "next/cache";

let Projects = db.collection("projects");
Projects.createIndex({ github: 1 }, { unique: true });

export const createProject = async (prevState, formData) => {
  const github = formData.get("github");

	if(!github.includes('https://github.com/')) return {errmsg: "Should be a github link"}

  try {
    const project = await Projects.insertOne({
      github,
    });

    if (project) {
      revalidatePath("/");
      return project;
    }errorResponse
  } catch (e) {
    return e.errorResponse
  }
};

export const getProjects = async () => {
  const projects = Projects.find({}).toArray();

  return projects;
};
