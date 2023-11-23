import React from "react";
import { Link as RouterLink } from "react-router-dom";

// mui components
import { Box, Link } from "@mui/material";

// components
import LogoSection from "./LogoSection";

function Header() {
  return (
    <>
      <Box>
        <LogoSection />
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ mr: 2 }}>
        <Link component={RouterLink} to={"/"} color="white" underline="none">
          Home
        </Link>
      </Box>
      <Box>
        <Link
          component={RouterLink}
          to={"/about/"}
          color="white"
          underline="none"
        >
          About
        </Link>
      </Box>
    </>
  );
}

export default Header;
