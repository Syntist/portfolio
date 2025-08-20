"use client";

import React, { useState } from "react";
import { deleteBlog } from "@/server-action/blog";
import { toast } from "react-toastify";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

const DeleteBlog = ({ id, title }) => {
  const { isAdmin } = useAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    const confirmed = confirm(
      `Are you sure you want to delete the blog "${title}"?`
    );
    if (confirmed) {
      setLoading(true);

      try {
        await deleteBlog(id);
        router.refresh();
      } catch (error) {
        console.error("Failed to delete blog:", error);
        toast.error("Failed to delete blog");
      } finally {
        setLoading(false);
      }
    }
  };

  if (isAdmin)
    return (
      <IconButton
        color="error"
        disabled={loading}
        onClick={(e) => {
          e.stopPropagation(); // Prevent parent Link navigation
          e.preventDefault();
          handleDelete(id);
        }}
      >
        <DeleteIcon />
      </IconButton>
    );
};

export default DeleteBlog;
