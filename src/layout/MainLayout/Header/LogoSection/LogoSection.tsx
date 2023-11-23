import React from "react";
import { Link as RouterLink } from "react-router-dom";

// mui components
import { Box, Link } from "@mui/material";

// assets
import AppLogo from "assets/images/app-icon.png";

function LogoSection() {
  return (
    <Link
      component={RouterLink}
      to={""}
      underline="none"
      sx={{ color: "inherit" }}
    >
      <Box display="flex" alignItems="center">
        <img src={AppLogo} alt="WeatherSearchLogo" height={35} />
        <Box component="span" ml={1} sx={{ fontSize: "1rem", color: "white" }}>
          Weather <i>Search</i>
        </Box>
      </Box>
    </Link>
  );
}

export default LogoSection;
