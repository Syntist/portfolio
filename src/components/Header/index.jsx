"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Login from "../Login";

const pages = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Assistant", path: "/assistant" },
];

function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleOpenMobileMenu = () => {
    setMobileMenuOpen(true);
  };

  const handleCloseMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          top: 0,
          background: scrolled
            ? "rgba(17, 20, 28, 0.85)"
            : "linear-gradient(to bottom, rgba(17,20,28,.9), rgba(17,20,28,.3) 70%, rgba(17,20,28,0))",
          backdropFilter: "blur(20px) saturate(150%)",
          WebkitBackdropFilter: "blur(20px) saturate(150%)",
          borderBottom: scrolled ? "1px solid rgba(255 255 255 / .1)" : "1px solid transparent",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          color: "#fff",
          zIndex: 1100,
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Toolbar disableGutters sx={{ minHeight: { xs: 56, md: 64 } }}>
            {/* Mobile menu button */}
            <Box sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}>
              <IconButton
                size="large"
                aria-label="open navigation menu"
                onClick={handleOpenMobileMenu}
                color="inherit"
                sx={{
                  p: 1,
                  transition: "transform 0.2s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    backgroundColor: "rgba(255 255 255 / 0.08)",
                  },
                }}
              >
                <MenuIcon fontSize="medium" />
              </IconButton>
            </Box>

            {/* Desktop logo */}
            <Typography
              variant="h6"
              noWrap
              component={Link}
              href="/"
              sx={{
                mr: 4,
                display: { xs: "none", md: "flex" },
                fontFamily: "var(--font-oswald)",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
                background: "var(--gradient-accent)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                fontSize: "1.3rem",
                transition: "transform 0.2s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              Syed Talha Khalid
            </Typography>

            {/* Mobile logo */}
            <Typography
              variant="h6"
              noWrap
              component={Link}
              href="/"
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "var(--font-oswald)",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
                background: "var(--gradient-accent)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                fontSize: "1.1rem",
              }}
            >
              Syed Talha
            </Typography>

            {/* Desktop navigation */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
                gap: 1,
              }}
            >
              {pages.map(({ label, path }) => {
                const active = pathname === path;
                return (
                  <Box key={path} sx={{ position: "relative" }}>
                    <Button
                      component={Link}
                      href={path}
                      sx={{
                        display: "block",
                        color: active ? "#fff" : "rgba(255 255 255 / .8)",
                        fontWeight: active ? 600 : 500,
                        position: "relative",
                        letterSpacing: ".3px",
                        textTransform: "none",
                        fontSize: "15px",
                        px: 3,
                        py: 1,
                        borderRadius: 2,
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&:hover": {
                          color: "#fff",
                          backgroundColor: "rgba(255 255 255 / 0.05)",
                          transform: "translateY(-1px)",
                        },
                      }}
                    >
                      {label}
                    </Button>
                    {active && (
                      <motion.div
                        layoutId="nav-underline"
                        style={{
                          position: "absolute",
                          left: 8,
                          right: 8,
                          bottom: 4,
                          height: 2,
                          borderRadius: 4,
                          background: "linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)",
                        }}
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </Box>
                );
              })}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Login />

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={handleCloseMobileMenu}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 280,
            background: "linear-gradient(135deg, rgba(17, 20, 28, 0.95), rgba(30, 30, 40, 0.95))",
            backdropFilter: "blur(20px) saturate(150%)",
            WebkitBackdropFilter: "blur(20px) saturate(150%)",
            borderRight: "1px solid rgba(255, 255, 255, 0.08)",
            color: "#fff",
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          {/* Mobile drawer header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 3,
              pb: 2,
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "var(--font-oswald)",
                fontWeight: 700,
                letterSpacing: ".1rem",
                background: "var(--gradient-accent)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Syed Talha
            </Typography>
            <IconButton
              onClick={handleCloseMobileMenu}
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                "&:hover": {
                  color: "#fff",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>


          {/* Mobile navigation items */}
          <List sx={{ p: 0 }}>
            {pages.map(({ label, path }, index) => {
              const active = pathname === path;
              return (
                <ListItem key={path} disablePadding sx={{ mb: 1 }}>
                  <ListItemButton
                    component={Link}
                    href={path}
                    onClick={handleCloseMobileMenu}
                    sx={{
                      borderRadius: 2,
                      py: 1.5,
                      px: 2,
                      position: "relative",
                      overflow: "hidden",
                      background: active
                        ? "linear-gradient(90deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15))"
                        : "transparent",
                      color: active ? "#fff" : "rgba(255, 255, 255, 0.8)",
                      fontWeight: active ? 600 : 500,
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        backgroundColor: active
                          ? "linear-gradient(90deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2))"
                          : "rgba(255, 255, 255, 0.05)",
                        color: "#fff",
                        transform: "translateX(8px)",
                      },
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: active ? 3 : 0,
                        background: "linear-gradient(180deg, #6366f1, #8b5cf6)",
                        transition: "width 0.3s ease",
                      },
                    }}
                  >
                    <ListItemText
                      primary={
                        <motion.span
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          style={{
                            fontSize: "1rem",
                            letterSpacing: ".5px",
                          }}
                        >
                          {label}
                        </motion.span>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Header;
