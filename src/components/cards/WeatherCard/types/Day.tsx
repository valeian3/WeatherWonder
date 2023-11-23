import React, { FC } from "react";

// mui components
import { Box, Typography } from "@mui/material";

// mui assets
import LocationOnIcon from "@mui/icons-material/LocationOn";

// assets
import sun from "assets/images/sun.png";
import backgroundSun from "assets/images/background-sun.png";

interface IWeatherData {
  date: string;
  location: string;
  temperature: number;
  condition: string | "partly cloudy" | "cloudy" | "rainy" | "sunny";
}

interface WeatherProps {
  weatherData: IWeatherData;
}

const Day: FC<WeatherProps> = ({ weatherData }) => {
  return (
    <Box
      sx={{
        width: "414px",
        height: "151px",
        // background: "rgb(0,210,255)",
        background:
          "rgb(0,210,255) linear-gradient(90deg, rgba(0,210,255,1) 0%, rgba(58,123,213,1) 100%)",
        borderRadius: "10px",
        padding: "20px",
        display: "flex",
        position: "relative",
      }}
    >
      {/* Background sun image*/}
      <img
        src={backgroundSun}
        alt="backgroundSun"
        style={{
          position: "absolute",
          top: 0,
          left: "263px",
          transform: "translateX(-50%)",
        }}
      />

      {/* Sun image*/}
      <img
        src={sun}
        alt="sun"
        style={{
          width: "50px",
          height: "50px",

          position: "absolute",
          top: "20px",
          left: "340px",
          zIndex: "1",
        }}
      />

      {/* Main content */}
      <Box sx={{ display: "flex", width: "100%", marginLeft: "12.88px" }}>
        <Box sx={{ width: "30%" }}>
          <Typography
            sx={{
              fontSize: "4.5rem",
              color: "white",
              marginTop: "20px",
            }}
          >
            {weatherData.temperature}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            marginTop: "64px",
            marginLeft: "5px",
          }}
        >
          <Typography
            sx={{
              fontSize: "0.875rem",
              color: "white",
            }}
          >
            {/* Tuesday, 23 December */}
            {weatherData.date}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LocationOnIcon sx={{ color: "white" }} />
            <Typography
              sx={{
                fontSize: "0.875rem",
                color: "white",
              }}
            >
              {weatherData.location}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Day;
