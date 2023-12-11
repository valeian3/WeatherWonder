import React from "react";

// mui components
import { Box, Typography } from "@mui/material";

// components
import SearchBox from "components/Search/Search";
import ForecastCard from "components/cards/ForecastCard";
import CustomSnackbar from "components/Snackbar/CustomSnackbar";
import CurrentWeatherSection from "components/sections/CurrentWeatherSection";

// service
import { getDayOfWeek } from "services/utils/dateFormat";

// redux
import { useSelector } from "react-redux";

// types
import { DefaultRootStateProps } from "types";
import { IForecastDay } from "types/weather";

function Home() {
  const { forecast, isFetchingWeatherData } = useSelector(
    (state: DefaultRootStateProps) => state.weather
  );

  return (
    <>
      {/* TODO: refactor main section*/}
      <Box
        sx={{
          display: "flex",
          width: "100%",
        }}
      >
        <CurrentWeatherSection />
        {/* TODO: refactor forecast section */}
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
