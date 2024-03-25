"use client";

import { Button } from "@mui/material";
import { useFormStatus } from "react-dom";


export const SubmitButton = ({ children }) => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
      {children}
    </Button>
  );
};
