import React, { FC, CSSProperties } from "react";

// mui components
import { Box, Typography, SxProps } from "@mui/material";

interface WeatherProps {
  date: string | undefined;
  location: string;
  temp_c: number;
  temp_f: number;
  condition: string;
  image?: string;
  style?: CSSProperties;
  sx?: SxProps;
}

const WeatherCard: FC<WeatherProps> = ({
  condition,
  location,
  date,
  temp_c,
  temp_f,
  image,
  sx,
  style,
}) => {
  let defaultSX: SxProps = {
    background:
      "rgb(0,210,255) linear-gradient(90deg, rgba(0,210,255,1) 0%, rgba(58,123,213,1) 100%)",
  };

  switch (condition.toLocaleLowerCase()) {
    case "sunny":
      defaultSX = {
        background:
          "rgb(218,114,17) linear-gradient(45deg, rgba(218,114,17,1) 0%, rgba(245,217,41,1) 100%)",
      };
      break;
    case "cloudy":
      defaultSX = {
        background:
          "rgb(132,140,207) linear-gradient(45deg, rgba(132,140,207,1) 0%, rgba(173,178,225,1) 100%)",
      };
      break;
    case "partly cloudy":
      defaultSX = {
        background:
          "rgb(5,57,192) linear-gradient(45deg, rgba(5,57,192,1) 0%, rgba(103,209,255,1) 100%)",
      };
      break;
    case "rainy":
      defaultSX = {
        background:
          "rgb(5,57,192) linear-gradient(45deg, rgba(5,57,192,1) 0%, rgba(73,167,242,1) 100%)",
      };
      break;
    default:
  }

  let SX: SxProps = defaultSX;
  SX = {
    ...SX,
    ...sx,

    width: "652px",
    height: "465px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  let STYLE = { ...style };

  if (location === "") return <></>;

  return (
    <Box sx={{ ...SX }} style={{ ...STYLE }}>
      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: "10px",
          padding: "20px",
          width: "424px",
          height: "188px",
          boxShadow: "0 0px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box sx={{ display: "flex", width: "100%" }}>
          {/* icon and condition wrapper */}
          <Box sx={{ width: "65%", height: "inherit" }}>
            <Typography
              sx={{
                color: "white",
              }}
            >
              {/* Sunny */}
              {condition}
            </Typography>
            {/* condition image */}
            <img
              src={image}
              alt="condition_image"
              style={{
                // width: "100px",
                // height: "auto",

                position: "absolute",
                top: "70px",
                left: "100px",
                zIndex: "1",
              }}
            />
          </Box>
          {/* temperature and location wrapper */}
          <Box
            sx={{
              width: "35%",
            }}
          >
            <Typography
              sx={{
                fontSize: "1rem",
                color: "white",
                fontWeight: "bold",
              }}
            >
              {/* example: New York, USA */}
              {location ? location : "-"}
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "0.875rem",
              }}
            >
              {/* example: Tuesday, 23 December */}
              {date ? date : "-"}
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: "2.25rem",
                marginTop: "10px",
              }}
            >
              {/* example: 24° */}
              {temp_c}°
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              {/* example: 75°F */}
              {temp_f}°F
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WeatherCard;
