"use client";

import { Button } from "@mui/material";

export const SubmitButton = ({ children, isPending, ...rest }) => {
  return (
    <Button disabled={isPending} type="submit" {...rest}>
      {children}
    </Button>
  );
};
