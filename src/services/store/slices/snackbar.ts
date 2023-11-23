import { createSlice } from "@reduxjs/toolkit";

// types
import { SnackbarStateProps } from "types/snackbar";

const initialState: SnackbarStateProps = {
  open: false,
  message: "",
  type: "success",
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    openSnackbar: (state, action) => {
      state.open = true;
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    closeSnackbar: (state) => {
      state.open = false;
      state.message = "";
      state.type = "success";
    },
  },
});

export const { openSnackbar, closeSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
