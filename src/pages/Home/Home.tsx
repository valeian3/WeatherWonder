import React, { useState, useEffect } from "react";

// mui components
import { Box, Typography } from "@mui/material";

// components
import Section from "layout/MainLayout/Section";
import SearchBox from "components/Search/Search";
import WeatherCard from "components/cards/WeatherCard";
import ForecastCard from "components/cards/ForecastCard";
import CustomSnackbar from "components/Snackbar/CustomSnackbar";

// service
import { getDayOfWeek } from "services/utils/dateFormat";
import { fetchForecastWeatherAsync } from "services/store/slices/weather";

// redux
import { useSelector, useDispatch } from "react-redux";

// types
import { DefaultRootStateProps } from "types";
import { IForecastDay } from "types/weather";

function Home() {
  const dispatch = useDispatch();
  const { location, current, forecast, isFetchingWeatherData, searchLocation } =
    useSelector((state: DefaultRootStateProps) => state.weather);

  useEffect(() => {
    if (searchLocation !== "")
      dispatch(fetchForecastWeatherAsync(searchLocation) as any);
  }, [dispatch, searchLocation]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
        }}
      >
        <Section
          location={location}
          current={current}
          forecast={forecast}
          isFetchingWeatherData={isFetchingWeatherData}
        />
        <Box
          sx={{
            width: "60%",
            height: "calc(100vh - 64px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#D7D8F0",
          }}
        >
          <Box sx={{ width: "80%", marginTop: "53px" }}>
            <SearchBox />
          </Box>
          {/* forecast section */}
          <Box sx={{ width: "80%" }}>
            <Typography
              sx={{
                marginTop: "52px",
                fontSize: "1.25rem",
                borderBottom: "solid 1px",
                padding: "18px",
                display: "inline-block",
              }}
            >
              Forecast
            </Typography>

            {isFetchingWeatherData === false ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  marginTop: "72px",
                  padding: "0px 38px",
                }}
              >
                {forecast.forecastday.map(
                  (date: IForecastDay, index: number) => {
                    if (!date) return null;
                    return (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <ForecastCard date={date} />
                        <Typography
                          style={{
                            fontSize: "1.125rem",
                            margin: "unset",
                            marginTop: "10px",
                            color: "grey",
                            display: "inline-block",
                          }}
                        >
                          {getDayOfWeek(date.date)}
                        </Typography>
                      </Box>
                    );
                  }
                )}
              </Box>
            ) : (
              ""
            )}
          </Box>
        </Box>
      </Box>
      <CustomSnackbar />
    </>
  );
}

export default Home;
