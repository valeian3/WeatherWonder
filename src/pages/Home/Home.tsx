import React, { useState, useEffect } from "react";

// mui components
import { Box } from "@mui/material";

// components
import SearchBox from "components/Search/Search";
import WeatherCard from "components/cards/WeatherCard";
import CustomSnackbar from "components/Snackbar/CustomSnackbar";

// service
import { getDayOfWeek } from "services/utils/dateFormat";
import { fetchCurrentWeatherAsync } from "services/store/slices/weather";

// redux
import { useSelector, useDispatch } from "react-redux";

// types
import { DefaultRootStateProps } from "types";

function Home() {
  const dispatch = useDispatch();
  const { location, current, fetchWeatherDataPending, searchLocation } =
    useSelector((state: DefaultRootStateProps) => state.weather);

  const [dayOfTheWeek, setDayOfTheWeek] = useState<string>("");

  useEffect(() => {
    if (searchLocation !== "")
      dispatch(fetchCurrentWeatherAsync(searchLocation) as any);
  }, [dispatch, searchLocation]);

  useEffect(() => {
    if (fetchWeatherDataPending === false) {
      if (!location) return;
      const day = getDayOfWeek(location?.localtime);

      setDayOfTheWeek(day);
    }
  }, [dispatch, fetchWeatherDataPending, location]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SearchBox />
        <br />
        <br />
        <WeatherCard
          condition={current.condition.text}
          location={location.name}
          date={dayOfTheWeek}
          temp_c={current.temp_c}
          temp_f={current.temp_f}
          image={current.condition.icon}
        />
      </Box>
      <CustomSnackbar />
    </>
  );
}

export default Home;
