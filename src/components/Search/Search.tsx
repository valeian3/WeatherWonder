import React, { useEffect, useState, ChangeEvent, KeyboardEvent } from "react";

// mui components
import { TextField, InputAdornment } from "@mui/material";

// mui assets
import SearchIcon from "@mui/icons-material/Search";

// redux
import { useDispatch, useSelector } from "react-redux";

// service
import {
  setSearchLocation,
  fetchForecastWeatherAsync,
} from "services/store/slices/weather";

// types
import { DefaultRootStateProps } from "types";

function Search() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const { searchLocation } = useSelector(
    (state: DefaultRootStateProps) => state.weather
  );

  useEffect(() => {
    if (searchLocation !== "")
      dispatch(fetchForecastWeatherAsync(searchLocation) as any);
  }, [dispatch, searchLocation]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = () => {
    dispatch(setSearchLocation(searchValue));
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSearchSubmit();
    }
  };

  return (
    <TextField
      id="searchbox"
      label="Search"
      variant="outlined"
      fullWidth
      value={searchValue}
      onChange={handleSearchChange}
      onKeyPress={handleKeyPress}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{ borderRadius: "20px" }}
    />
  );
}

export default Search;
