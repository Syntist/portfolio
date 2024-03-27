"use client";

import { createProject } from "@/server-action/project";
import { Box, TextField, Typography } from "@mui/material";
import { useFormState } from "react-dom";
import { SubmitButton } from "../SubmitButton";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const ProjectForm = () => {
  const [state, formAction] = useFormState(createProject, {});

  useEffect(() => {
    if (state?.acknowledged) toast.success("Project Added");
    else if (state?.errmsg) toast.error(state?.errmsg);
  }, [state]);

  return (
    <Box>
      <Typography>Add Project</Typography>
      <form action={formAction}>
        <TextField name="github" placeholder="url" label="GitHub" />
        <SubmitButton>Add</SubmitButton>
      </form>
    </Box>
  );
};
