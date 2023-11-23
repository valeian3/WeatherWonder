import React, { useState, ChangeEvent, KeyboardEvent } from "react";

// mui components
import { Box, TextField, InputAdornment } from "@mui/material";

// mui assets
import SearchIcon from "@mui/icons-material/Search";

// redux
import { useDispatch } from "react-redux";

// service
import { setSearchLocation } from "services/store/slices/weather";

function Search() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

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
    <Box sx={{ width: "652px" }}>
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
      />
    </Box>
  );
}

export default Search;
