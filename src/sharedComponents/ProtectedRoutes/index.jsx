"use client";

import { useAuth } from "@/hooks/useAuth";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const ProtectedRoutes = ({ children }) => {
  const { isAdmin, status } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAdmin && status === "unauthenticated") {
      router.push("/");
    }
  }, [isAdmin, status, router]);

  if (status === "loading") {
    return <CircularProgress />;
  }

  return children;
};
