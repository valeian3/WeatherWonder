import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// service
import { openSnackbar, closeSnackbar } from "./snackbar";

// axios
import axios, { AxiosError } from "axios";
import weatherApiInstance from "services/api";

// types
import { WeatherStateProps } from "types/weather";

const initialState: WeatherStateProps = {
  isFetchingWeatherData: false,
  searchLocation: "",
  location: {
    name: "",
    region: "",
    country: "",
    lat: 0,
    lon: 0,
    tz_id: "",
    localtime_epoch: 0,
    localtime: "",
  },
  current: {
    last_updated: "",
    temp_c: 0,
    temp_f: 0,
    condition: {
      text: "",
      icon: "",
    },
    uv: 0,
  },
  forecast: {
    forecastday: [],
  },
};

/* fetch current weather */
export const fetchCurrentWeatherAsync = createAsyncThunk(
  "weather/fetchCurrentWeatherAsync",
  async (location: string, { dispatch }) => {
    try {
      const response = await weatherApiInstance.get("/current.json", {
        params: { q: location },
      });
      return response.data;
    } catch (error) {
      dispatch(
        openSnackbar({ type: "error", message: "Error fetching weather data" })
      );
      // Handle specific AxiosError
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          // The request was made and the server responded with a status code
          console.error("Response error:", axiosError.response.data);
        } else if (axiosError.request) {
          // The request was made but no response was received
          console.error("No response received:", axiosError.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Request setup error:", axiosError.message);
        }
      } else {
        // Handle other errors
        console.error("Non-Axios error:", error);
      }

      // Close the Snackbar after 6 seconds (6000 milliseconds)
      setTimeout(() => {
        dispatch(closeSnackbar());
      }, 6000);

      throw new Error("Error fetching weather data");
    }
  }
);

/* fetch forecast weather */
export const fetchForecastWeatherAsync = createAsyncThunk(
  "weather/fetchForecastWeatherAsync",
  async (location: string, { dispatch }) => {
    try {
      const response = await weatherApiInstance.get("/forecast.json", {
        params: { q: location, days: 5 },
      });
      return response.data;
    } catch (error) {
      dispatch(
        openSnackbar({ type: "error", message: "Error fetching weather data" })
      );
      // Handle specific AxiosError
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          // The request was made and the server responded with a status code
          console.error("Response error:", axiosError.response.data);
        } else if (axiosError.request) {
          // The request was made but no response was received
          console.error("No response received:", axiosError.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Request setup error:", axiosError.message);
        }
      } else {
        // Handle other errors
        console.error("Non-Axios error:", error);
      }

      // Close the Snackbar after 6 seconds (6000 milliseconds)
      setTimeout(() => {
        dispatch(closeSnackbar());
      }, 6000);

      throw new Error("Error fetching weather data");
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setSearchLocation(state, action) {
      if (action.payload === undefined || null) return;
      state.searchLocation = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentWeatherAsync.pending, (state) => {
        state.isFetchingWeatherData = true;
      })
      .addCase(fetchCurrentWeatherAsync.rejected, (state) => {
        state.isFetchingWeatherData = false;
      })
      .addCase(fetchCurrentWeatherAsync.fulfilled, (state, action) => {
        if (!action.payload) return;
        state.current = action.payload.current;
        state.location = action.payload.location;
        state.isFetchingWeatherData = false;
      })

      .addCase(fetchForecastWeatherAsync.pending, (state) => {
        state.isFetchingWeatherData = true;
      })
      .addCase(fetchForecastWeatherAsync.rejected, (state) => {
        state.isFetchingWeatherData = false;
      })
      .addCase(fetchForecastWeatherAsync.fulfilled, (state, action) => {
        if (!action.payload) return;
        state.current = action.payload.current;
        state.forecast = action.payload.forecast;
        state.location = action.payload.location;
        state.isFetchingWeatherData = false;
      });
  },
});

export const { setSearchLocation } = weatherSlice.actions;

export default weatherSlice.reducer;
