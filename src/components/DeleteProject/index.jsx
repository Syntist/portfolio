"use client";

import { deleteProject } from "@/server-action/project";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";

export const DeleteProject = ({ id }) => {
  const router = useRouter();
  const [loading, setLoading] = useState();

  const projectDeletion = (id) => {
    setLoading(true);
    deleteProject(id)
      .then(() => {
        toast.success("Project Deleted");
        router.push("/projects");
      })
      .catch((e) => toast.error(e))
      .finally(() => setLoading(false));
  };

  return (
    <IconButton
      color="error"
      disabled={loading}
      onClick={() => projectDeletion(id)}
    >
      <DeleteIcon />
    </IconButton>
  );
};
