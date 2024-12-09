import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";
import Logo from "./shared/Logo";

const Header = () => {
  const auth = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
      <AppBar
          position="static"
          sx={{
            background: "linear-gradient(to right, rgba(15,12,41,0.7), rgba(48,43,99,0.7), rgba(36,36,62,0.7))",
            backdropFilter: "blur(10px)",
            boxShadow: "none",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
      >
        <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              px: 2,
              py: 1,
            }}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Logo />
            {!isMobile && (
                <Typography variant="h6" sx={{ color: "#fff", fontWeight: 600 }}>
                  Fitness AI Coach
                </Typography>
            )}
          </Box>

          <Box display="flex" alignItems="center" gap={2}>
            {auth?.isLoggedIn ? (
                <>
                  <NavigationLink
                      bg="#00fffc"
                      to="/chat"
                      text="Go To Chat"
                      textColor="black"
                  />
                  <NavigationLink
                      bg="#8A2BE2"
                      textColor="white"
                      to="/"
                      text="Logout"
                      onClick={auth.logout}
                  />
                </>
            ) : (
                <>
                  <NavigationLink
                      bg="#00fffc"
                      to="/login"
                      text="Login"
                      textColor="black"
                  />
                  <NavigationLink
                      bg="#8A2BE2"
                      textColor="white"
                      to="/signup"
                      text="Signup"
                  />
                </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
  );
};

export default Header;
