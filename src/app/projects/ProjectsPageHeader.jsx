"use client";

import * as React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { motion } from "framer-motion";

export function ProjectsPageHeader() {
  const { isAdmin } = useAuth();

  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 6, md: 8 },
        background: "linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05))",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 2 },
          }}
        >
          {/* Page Title */}
          <Box>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "var(--font-oswald)",
                  fontWeight: 700,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  background: "var(--gradient-accent)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 1,
                }}
              >
                Projects
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  fontWeight: 400,
                  maxWidth: { xs: "100%", md: "500px" },
                }}
              >
                Explore my portfolio of projects, showcasing various technologies and creative solutions.
              </Typography>
            </motion.div>
          </Box>

          {/* Add Project Button - Only visible to admin */}
          {isAdmin && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button
                component={Link}
                href="/projects/add"
                startIcon={<AddIcon />}
                sx={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textTransform: "none",
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
                Add Project
              </Button>
            </motion.div>
          )}
        </Box>
      </Container>
    </Box>
  );
}
