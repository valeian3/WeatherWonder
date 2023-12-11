import React, { FC, CSSProperties } from "react";

// mui components
import { Box, Typography, SxProps } from "@mui/material";

// types
import { IWeatherForecast, ILocation, IWeather } from "types/weather";

interface SectionProps {
  current: IWeather;
  location: ILocation;
  forecast: IWeatherForecast;
  style?: CSSProperties;
  sx?: SxProps;
  isFetchingWeatherData: boolean;
}

const Section: FC<SectionProps> = ({
  location,
  current,
  forecast,
  isFetchingWeatherData,
  style,
  sx,
}) => {
  if (isFetchingWeatherData) return <Typography>loading</Typography>;
  if (forecast.forecastday.length === 0)
    return (
      <Box
        sx={{
          width: "40%",
          height: "calc(100vh - 64px)",
          background: "#2D2A54",
          color: "#D7D8F0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>
          Search for weather data in any city in the world
        </Typography>
      </Box>
    );
  return (
    <Box
      sx={{
        width: "40%",
        height: "calc(100vh - 64px)",
        background: "#2D2A54",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{ fontSize: "5.125rem", margin: "unset", marginTop: "12px" }}
      >
        {location.name}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "120px",
        }}
      >
        <img
          src={current.condition.icon}
          alt="condition_image"
          style={{
            width: "128px",
            height: "auto",
          }}
        />
        <Typography
          sx={{
            fontSize: "5.75rem",
            margin: "unset",
            marginTop: "44px",
            marginLeft: "40px",
          }}
        >
          {current.temp_c}°
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          marginTop: "40px",
          marginLeft: "10px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              fontSize: "1.125rem",
            }}
          >
            {forecast.forecastday[0].day.maxtemp_c}
          </Typography>
          <Typography sx={{ fontSize: "1.125rem" }}>/</Typography>
          <Typography sx={{ fontSize: "1.125rem", color: "grey" }}>
            {forecast.forecastday[0].day.mintemp_c}°
          </Typography>
        </Box>

        <Typography
          sx={{
            fontSize: "1.125rem",
            marginTop: "14px",
            marginLeft: "5px",
          }}
        >
          {current.condition.text}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: "1rem",
          marginTop: "100px",
        }}
      >
        Current weather conditions
      </Typography>
    </Box>
  );
};

export default Section;
