"use client";

import { useAuth } from "@/hooks/useAuth";
import { generateBlog } from "@/server-action/blog.js";
import { CustomButton } from "@/sharedComponents/CustomButton";
import { CustomProgress } from "@/sharedComponents/CustomProgress";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const GenerateBlog = () => {
  const { isAdmin } = useAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const generate = async () => {
    setLoading(true);
    try {
      const content = await generateBlog();
      router.refresh();
      toast.success("Blog generated successfully");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (isAdmin)
    return (
      <CustomButton
        onClick={generate}
        disabled={loading}
        startIcon={loading ? <CustomProgress size="lg" /> : null}
      >
        {loading ? "Generating..." : "Generate Blog"}
      </CustomButton>
    );
};
