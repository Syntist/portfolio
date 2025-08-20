"use client";

import { generateBlog } from "@/server-action/blog.js";
import { CustomButton } from "@/sharedComponents/CustomButton";
import { CustomProgress } from "@/sharedComponents/CustomProgress";
import { useState } from "react";

export const GenerateBlog = () => {
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    try {
      const content = await generateBlog();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CustomButton
      onClick={generate}
      disabled={loading}
      startIcon={
        loading ? (
          <CustomProgress size="lg" />
        ) : null
      }
    >
      {loading ? "Generating..." : "Generate Blog"}
    </CustomButton>
  );
};
