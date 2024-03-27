"use client";

import { SubmitButton } from "@/components/SubmitButton";
import { deleteProject } from "@/server-action/project";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";

export const DeleteProject = ({ id }) => {
  const [state, formAction] = useFormState(deleteProject, null);

  useEffect(() => {
    if (state?.deleted) toast.success("Deleted - " + id);
    else if (state?.deleted === false) toast.error("Error Deleting - " + id);
  }, [id, state]);

  return (
    <form action={formAction}>
      <input name="projectId" value={id} hidden readOnly />
      <SubmitButton>Delete</SubmitButton>
    </form>
  );
};
