import React, { FC, CSSProperties } from "react";

// mui components
import { Box, SxProps } from "@mui/material";

// components
import Content from "./Content";

interface CurrentWeatherSectionProps {
  sx?: SxProps;
  style?: CSSProperties;
}

const CurrentWeatherSection: FC<CurrentWeatherSectionProps> = ({
  sx,
  style,
}) => {
  let defaultSX: SxProps = {
    width: "40%",
    height: "calc(100vh - 64px)",
    background: "#2D2A54",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  let SX: SxProps = defaultSX;
  SX = {
    ...SX,
    ...sx,
  };

  let STYLE: CSSProperties = { ...style };

  return (
    <Box style={{ ...STYLE }} sx={{ ...SX }}>
      <Content />
    </Box>
  );
};

export default CurrentWeatherSection;
