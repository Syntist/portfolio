"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { CustomProgress } from "../CustomProgress";

export const ProtectedRoutes = ({ children }) => {
  const { isAdmin, status } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAdmin && status === "unauthenticated") {
      router.push("/");
    }
  }, [isAdmin, status, router]);

  if (status === "loading") {
    return <CustomProgress size="lg" className={"m-auto"} />
  }

  return children;
};
