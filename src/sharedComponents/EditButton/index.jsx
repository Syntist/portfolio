"use client";

import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

export const EditButton = ({ handler }) => {
  const router = useRouter();

  return (
    <IconButton
      color="info"
      onClick={(e) => {
        e.stopPropagation(); // Prevent parent Link navigation
        e.preventDefault();
        router.push(`/projects/edit/${handler}`);
      }}
    >
      <EditIcon />
    </IconButton>
  );
};
