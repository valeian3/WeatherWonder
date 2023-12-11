import React, { useMemo } from "react";
import { Outlet } from "react-router-dom";

// mui components
import { AppBar, Box, CssBaseline, Toolbar, Container } from "@mui/material";

import { styled } from "@mui/material/styles";

// components
import Header from "./Header";

const Main = styled("main")(() => ({
  width: "100%",
  minHeight: "calc(100vh - 64px)",
  background: "#D7D8F0",
  // flexGrow: 1, // not needed since there is no side navigation bar
  // padding: "20px",
  marginTop: "64px",
}));

function MainLayout() {
  const header = useMemo(
    () => (
      <Toolbar>
        <Header />
      </Toolbar>
    ),
    []
  );

  return (
    <Box>
      <CssBaseline />
      {/* header */}
      <AppBar sx={{ background: "#2D2A54" }} elevation={0}>
        {header}
      </AppBar>

      {/* main content */}
      <Main>
        {/* error boundary is missing, needs to wrap outlet component to catch errors when loading pages */}
        <Outlet />
      </Main>
    </Box>
  );
}

export default MainLayout;
