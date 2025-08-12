"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const pages = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Assistant", path: "/assistant" },
];

function Header() {
  const pathname = usePathname();
  const [anchorElNav, setAnchorElNav] = React.useState();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        top: 0,
        background: scrolled
          ? "rgba(17, 20, 28, 0.72)"
          : "linear-gradient(to bottom, rgba(17,20,28,.85), rgba(17,20,28,.25) 70%, rgba(17,20,28,0))",
        backdropFilter: "blur(18px) saturate(140%)",
        WebkitBackdropFilter: "blur(18px) saturate(140%)",
        borderBottom: scrolled ? "1px solid rgba(255 255 255 / .08)" : "1px solid transparent",
        transition: "all .5s ease",
        color: "#fff",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "var(--font-oswald)",
              fontWeight: 600,
              letterSpacing: ".15rem",
              color: "inherit",
              textDecoration: "none",
              background: "var(--gradient-accent)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            TALHA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(({ label, path }) => (
                <MenuItem
                  key={label}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: "#000",
                  }}
                >
                  <Link href={path}>
                    <Typography textAlign="center">{label}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "var(--font-oswald)",
              fontWeight: 600,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
              background: "var(--gradient-accent)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            TALHA
          </Typography>
          <Box
            sx={{
              flexGrow: "1",
              display: { xs: "none", md: "flex" },
              gap: "10px",
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
                      color: active ? "#fff" : "rgba(255 255 255 / .75)",
                      fontWeight: 500,
                      position: "relative",
                      letterSpacing: ".5px",
                      textTransform: "none",
                      fontSize: "15px",
                      paddingInline: "18px",
                      transition: "color .4s ease",
                      '&:hover': { color: '#fff' }
                    }}
                  >
                    {label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        style={{
                          position: "absolute",
                          left: 12,
                          right: 12,
                          bottom: 6,
                          height: 3,
                          borderRadius: 6,
                          background: "linear-gradient(90deg,#6366f1,#ec4899,#f59e0b)",
                        }}
                        transition={{ type: 'spring', bounce: 0.35, duration: 0.65 }}
                      />
                    )}
                  </Button>
                </Box>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
