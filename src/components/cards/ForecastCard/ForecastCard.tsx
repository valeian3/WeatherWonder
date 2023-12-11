import React, { FC, CSSProperties } from "react";

// mui components
import { Box, Typography, SxProps } from "@mui/material";

// types
import { IForecastDay } from "types/weather";

interface ForecastCardProps {
  style?: CSSProperties;
  date: IForecastDay;
  sx?: SxProps;
}

const ForecastCard: FC<ForecastCardProps> = ({ style, date, sx }) => {
  return (
    <Box
      style={{ ...style }}
      sx={{
        width: "140px",
        height: "250px",
        backgroundColor: "#2D2A54",
        borderRadius: "30px",
        boxShadow: "0 4px 4px 0px #7777774f",
        color: "#D7D8F0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "24px",
        ...sx,
      }}
    >
      <img
        src={date.day.condition.icon}
        alt="condition_image"
        style={{
          width: "85px",
          height: "auto",
          marginBottom: "42px",
        }}
      />
      <Typography
        sx={{
          fontSize: "0.938rem",
          marginBottom: "2px",
          textAlign: "center",
        }}
      >
        {date.day.condition.text}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          sx={{
            fontSize: "0.938rem",
            margin: "unset",
          }}
        >
          {date.day.maxtemp_c}°
        </Typography>
        <Typography sx={{ fontSize: "0.938rem", margin: "unset" }}>
          /
        </Typography>
        <Typography
          sx={{
            fontSize: "0.938rem",
            margin: "unset",
            color: "grey",
          }}
        >
          {date.day.mintemp_c}°
        </Typography>
      </Box>
    </Box>
  );
};

export default ForecastCard;
