import React, { useState, useEffect } from "react";

// mui components
import { Box } from "@mui/material";

// components
import SearchBox from "components/Search/Search";
import WeatherCard from "components/cards/WeatherCard";
import CustomSnackbar from "components/Snackbar/CustomSnackbar";

// service
import { getDayOfWeek } from "services/utils/dateFormat";
import { fetchForecastWeatherAsync } from "services/store/slices/weather";

// redux
import { useSelector, useDispatch } from "react-redux";

// types
import { DefaultRootStateProps } from "types";

function Home() {
  const dispatch = useDispatch();
  const {
    location,
    current,
    forecast,
    fetchWeatherDataPending,
    searchLocation,
  } = useSelector((state: DefaultRootStateProps) => state.weather);

  const [dayOfTheWeek, setDayOfTheWeek] = useState<string>("");

  useEffect(() => {
    if (searchLocation !== "")
      dispatch(fetchForecastWeatherAsync(searchLocation) as any);
  }, [dispatch, searchLocation]);

  useEffect(() => {
    if (fetchWeatherDataPending === "fetched") {
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
          width: "100%",
        }}
      >
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
          <h1
            style={{ fontSize: "5.125rem", margin: "unset", marginTop: "12px" }}
          >
            {location.name}
          </h1>
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
                width: "256px",
                height: "auto",
              }}
            />
            <h2
              style={{
                fontSize: "5.75rem",
                margin: "unset",
                marginTop: "44px",
                marginLeft: "40px",
              }}
            >
              {current.temp_c}°
            </h2>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              marginTop: "40px",
              width: "50px",
              marginLeft: "10px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <h2
                style={{
                  fontSize: "1.125rem",
                  margin: "unset",
                }}
              >
                {fetchWeatherDataPending === "fetched"
                  ? forecast.forecastday[0].day.maxtemp_c
                  : ""}
              </h2>
              <h2 style={{ fontSize: "1.125rem", margin: "unset" }}>/</h2>
              <h2
                style={{ fontSize: "1.125rem", margin: "unset", color: "grey" }}
              >
                {fetchWeatherDataPending === "fetched"
                  ? forecast.forecastday[0].day.mintemp_c
                  : ""}
                °
              </h2>
            </Box>

            <h2
              style={{
                fontSize: "1.125rem",
                margin: "unset",
                marginTop: "14px",
                marginLeft: "5px",
              }}
            >
              {current.condition.text}
            </h2>
          </Box>
        </Box>
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
          {/* today section */}
          <Box sx={{ width: "80%" }}>
            <label
              style={{
                marginTop: "52px",
                fontSize: "1.25rem",
                borderBottom: "solid 1px",
                padding: "18px",
                display: "inline-block",
              }}
            >
              Forecast
            </label>

            {fetchWeatherDataPending === "fetched" ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "72px",
                  padding: "0px 38px",
                }}
              >
                {/* card */}
                {forecast.forecastday.map((date: any, index: number) => {
                  return (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Box
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
                        <label
                          style={{
                            fontSize: "0.938rem",
                            marginBottom: "2px",
                            textAlign: "center",
                          }}
                        >
                          {date.day.condition.text}
                        </label>
                        {/* <label
                        style={{
                          fontSize: "0.938rem",
                        }}
                      >
                        {date.day?.avgtemp_c}°
                      </label> */}
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          <h2
                            style={{
                              fontSize: "0.938rem",
                              margin: "unset",
                            }}
                          >
                            {date.day?.maxtemp_c}°
                          </h2>
                          <h2 style={{ fontSize: "0.938rem", margin: "unset" }}>
                            /
                          </h2>
                          <h2
                            style={{
                              fontSize: "0.938rem",
                              margin: "unset",
                              color: "grey",
                            }}
                          >
                            {date.day?.mintemp_c}°
                          </h2>
                        </Box>
                      </Box>
                      <label
                        style={{
                          fontSize: "1.125rem",
                          margin: "unset",
                          marginTop: "10px",
                          color: "grey",
                          display: "inline-block",
                        }}
                      >
                        {getDayOfWeek(date.date)}
                      </label>
                    </Box>
                  );
                })}
              </Box>
            ) : (
              ""
            )}
          </Box>
        </Box>
        {/* <SearchBox />
        <br />
        <br />
        <WeatherCard
          condition={current.condition.text}
          location={location.name}
          date={dayOfTheWeek}
          temp_c={current.temp_c}
          temp_f={current.temp_f}
          image={current.condition.icon}
        /> */}
      </Box>
      <CustomSnackbar />
    </>
  );
}

export default Home;
