import React from "react";
import { ProjectForm } from "./ProjectForm";
import { ProtectedRoutes } from "@/sharedComponents/ProtectedRoutes";

export default async function Projects() {
  return (
    <ProtectedRoutes>
      <ProjectForm />
    </ProtectedRoutes>
  );
}
