import { Button } from "@mui/material";
import { motion } from "framer-motion";

export const CustomButton = ({ onClick, disabled, children, startIcon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Button
        onClick={() => onClick()}
        disabled={disabled}
        startIcon={startIcon}
        sx={{
          background: "linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899) !important",
          color: "#fff",
          fontWeight: 600,
          fontSize: "1rem",
          textTransform: "none",
          backgroundImage: "revert",
          px: 3,
          py: 1.5,
          borderRadius: 2,
          boxShadow: "0 4px 20px rgba(99, 102, 241, 0.3)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 30px rgba(99, 102, 241, 0.4)",
            background: "linear-gradient(135deg, #5b5fc7, #7c3aed, #d946ef)",
          },
          "&:active": {
            transform: "translateY(-1px)",
          },
        }}
      >
        {children}
      </Button>
    </motion.div>
  );
};
