import React from "react";

// mui components
import { Box, Typography } from "@mui/material";

// redux
import { useSelector } from "react-redux";

// types
import { DefaultRootStateProps } from "types";
import { IWeather, IWeatherForecast } from "types/weather";

interface CityNameProps {
  name: string;
}

const CityName: React.FC<CityNameProps> = ({ name }) => {
  if (!name) return null;
  return (
    <Typography
      sx={{ fontSize: "5.125rem", margin: "unset", marginTop: "12px" }}
    >
      {name}
    </Typography>
  );
};

interface CurrentConditionProps {
  currentCondition: IWeather;
}

const CurrentCondition: React.FC<CurrentConditionProps> = ({
  currentCondition,
}) => {
  if (!currentCondition) return null;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "120px",
      }}
    >
      <img
        src={currentCondition.condition.icon}
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
        {currentCondition.temp_c}°
      </Typography>
    </Box>
  );
};

interface TemperatureRangeProps {
  forecastToday: IWeatherForecast;
  currentCondition: IWeather;
}

const TemperatureRange: React.FC<TemperatureRangeProps> = ({
  forecastToday,
  currentCondition,
}) => {
  if (!forecastToday) return null;
  if (!currentCondition) return null;
  return (
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
          {forecastToday.forecastday[0].day.maxtemp_c}
        </Typography>
        <Typography sx={{ fontSize: "1.125rem" }}>/</Typography>
        <Typography sx={{ fontSize: "1.125rem", color: "grey" }}>
          {forecastToday.forecastday[0].day.mintemp_c}°
        </Typography>
      </Box>

      <Typography
        sx={{
          fontSize: "1.125rem",
          marginTop: "14px",
          marginLeft: "5px",
        }}
      >
        {currentCondition.condition.text}
      </Typography>
    </Box>
  );
};

function Content() {
  const { location, current, forecast, isFetchingWeatherData } = useSelector(
    (state: DefaultRootStateProps) => state.weather
  );

  if (!location) return null;
  if (!current) return null;
  if (forecast.forecastday.length === 0) return null;
  if (isFetchingWeatherData)
    return <Typography>Fetching weather data</Typography>;

  return (
    <>
      <CityName name={location.name} />
      <CurrentCondition currentCondition={current} />
      <TemperatureRange forecastToday={forecast} currentCondition={current} />
      <Typography
        sx={{
          fontSize: "1rem",
          marginTop: "100px",
        }}
      >
        Current weather conditions
      </Typography>
    </>
  );
}

export default Content;
