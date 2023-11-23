import React, { FC } from "react";

// mui components
import { Box, Typography } from "@mui/material";

// mui assets
import LocationOnIcon from "@mui/icons-material/LocationOn";

// assets
import moon from "assets/images/moon.png";
import greyDotNightDark from "assets/images/grey-dot-dark.png";
import greyDotNightLight from "assets/images/grey-dot-light.png";
import greyDotNightDarkSmall from "assets/images/grey-dot-dark-small.png";

interface IWeatherData {
  date: string;
  location: string;
  temperature: number;
  condition: string | "partly cloudy" | "cloudy" | "rainy" | "sunny";
}

interface WeatherProps {
  weatherData: IWeatherData;
}

const Night: FC<WeatherProps> = ({}) => {
  return (
    <Box
      sx={{
        width: "414px",
        height: "151px",
        background:
          "rgb(83,105,118) linear-gradient(90deg, rgba(83,105,118,1) 0%, rgba(41,46,73,1) 100%)",
        borderRadius: "10px",
        padding: "20px",
        display: "flex",
        position: "relative",
      }}
    >
      <img
        src={greyDotNightDark}
        alt="greyDotNightDark"
        style={{
          width: "20px",
          height: "20px",

          position: "absolute",
          top: "16px",
          left: "40px",
        }}
      />
      <img
        src={greyDotNightDarkSmall}
        alt="greyDotNightDarkSmall"
        style={{
          width: "10px",
          height: "10px",

          position: "absolute",
          top: "36px",
          left: "123px",
        }}
      />
      <img
        src={greyDotNightDarkSmall}
        alt="greyDotNightDarkSmall"
        style={{
          width: "10px",
          height: "10px",

          position: "absolute",
          top: "55px",
          left: "176px",
        }}
      />
      <img
        src={greyDotNightDarkSmall}
        alt="greyDotNightDarkSmall"
        style={{
          width: "10px",
          height: "10px",

          position: "absolute",
          top: "26px",
          left: "225px",
        }}
      />
      <img
        src={greyDotNightLight}
        alt="greyDotNightLight"
        style={{
          width: "13px",
          height: "13px",

          position: "absolute",
          top: "16px",
          left: "370px",
        }}
      />
      <img
        src={moon}
        alt="moon"
        style={{
          width: "50px",
          height: "50px",

          position: "absolute",
          top: "24px",
          left: "340px",
          zIndex: "1",
        }}
      />

      <Box sx={{ display: "flex", width: "100%", marginLeft: "12.88px" }}>
        <Box sx={{ width: "30%" }}>
          <Typography
            sx={{
              fontSize: "4.5rem",
              color: "white",
              marginTop: "20px",
            }}
          >
            27°
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
            Tuesday, 23 December
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LocationOnIcon sx={{ color: "white" }} />
            <Typography
              sx={{
                fontSize: "0.875rem",
                color: "white",
              }}
            >
              Gonin Gora, Kad
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Night;
