import axios from "axios";

/* temporary place for api key, used only in development */
const API_KEY = "d1888327521448e1abc122739231711";
const BASE_URL = "https://api.weatherapi.com/v1";

if (!API_KEY) {
  throw new Error("REACT_APP_API_KEY is not set in the environment variables");
}

const weatherApiInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
    aqi: "no",
  },
});

export default weatherApiInstance;
