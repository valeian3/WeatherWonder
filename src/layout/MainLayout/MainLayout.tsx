import React, { useMemo } from "react";
import { Outlet } from "react-router-dom";

// mui components
import { AppBar, Box, CssBaseline, Toolbar, Container } from "@mui/material";

import { styled } from "@mui/material/styles";

// components
import Header from "./Header";

const Main = styled("main")(() => ({
  // background:
  //   "rgb(2,0,36) linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 10%, rgba(0,212,255,1) 100%)",
  // background: "grey",
  width: "100%",
  minHeight: "calc(100vh - 64px)",
  flexGrow: 1,
  padding: "20px",
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
      <AppBar elevation={0}>{header}</AppBar>

      {/* main content */}
      <Main>
        <Container maxWidth="lg" sx={{ marginTop: "64px" }}>
          {/* error boundary is missing, needs to wrap outlet component to catch errors when loading pages */}
          <Outlet />
        </Container>
      </Main>
    </Box>
  );
}

export default MainLayout;
